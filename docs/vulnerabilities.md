# Vulnerabilities

This document contains information about the vulnerabilities of the application and how to fix them. All vulnerabilities can be found in the 2017 [Top 10](https://owasp.org/www-project-top-ten/2017/Top_10.html) list by OWASP.

## FLAW 1: Injection

> [A1:2017](https://owasp.org/www-project-top-ten/2017/A1_2017-Injection)

### Vulnerability

```typescript
// ...
loginRouter.post('/', async (request: Request, response: Response) => {
  const username = request.body.username as string;
  const password = request.body.password as string;

  const user: User | null = await db.getUser(username, password)
// ...
```

**branch** main, **file** [login.ts](https://github.com/rikurauhala/hack-this/blob/main/server/src/routes/login.ts#L14)

```typescript
// ...
public getUser(username: string, password: string): Promise<User | null> {
  return new Promise<User | null>((resolve, reject) => {
    this.db.get(
      `SELECT id, username, admin FROM users WHERE username = '${username}' AND password = '${password}'`,
      (error: Error | null, row: User) => {
// ...
```

**branch** main, **file** [database.ts](https://github.com/rikurauhala/hack-this/blob/main/server/src/db/database.ts#L57)

The login functionality contains an SQL injection vulnerability. This vulnerability is only possible because several horrible design choices have been made. Firstly, passwords are being stored in the database as plaintext which is already a huge mistake. Secondly, user input (username and password) is not being properly sanitized. The unsanitized input is then being directly inserted into the database query.

### Fix

```sql
-- ...
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  admin BOOLEAN DEFAULT 0
);
-- ...
```

**branch** fixed, **file** [init.sql](https://github.com/rikurauhala/hack-this/blob/fixed/server/data/init.sql#L7)

```typescript
// ...
public getUser(username: string): Promise<User | null> {
  return new Promise<User | null>((resolve, reject) => {
    this.db.get(
      'SELECT id, username, password_hash as passwordHash, admin FROM users WHERE username = ?',
      [username],
      (error: Error | null, row: User) => {
// ...
```

**branch** fixed, file [database.ts](https://github.com/rikurauhala/hack-this/blob/fixed/server/src/db/database.ts#L57)

```typescript
// ...
loginRouter.post('/', loginRateLimit, async (request: Request, response: Response) => {
  const username = request.body.username as string;
  const password = request.body.password as string;

  const user: User | null = await db.getUser(username);

  if (!user) {
    return response.status(401).json({ message: 'This user does not exist' });
  }

  const passwordCorrect = await bcrypt.compare(password, user.passwordHash);
// ...
```

**branch** fixed, **file** [login.ts](https://github.com/rikurauhala/hack-this/blob/fixed/server/src/routes/login.ts#L28)

The first step to fix the vulnerability is to store passwords as hashes in the database. Never store passwords as plaintext! Checking if the password is correct should be done by comparing only the hashes. The vulnerable SQL query can be taken care of by using parameterized queries for the login function. Modern frameworks and libraries are already making SQL injection more and more obsolete, but the developer still has to know what they are doing. Always use parameterized queries and never trust user input enough to allow it anywhere near the database without checking first.

## FLAW 2: Broken Authentication 

> [A2:2017](https://owasp.org/www-project-top-ten/2017/A2_2017-Broken_Authentication)

### Vulnerability

```sql
-- ...
INSERT INTO users (username, password, admin) VALUES ('admin', 'secret', 1);
-- ...
```

**branch** main, **file** [init.sql](https://github.com/rikurauhala/hack-this/blob/main/server/data/init.sql#L35)

The admin account uses a very weak password that can be easily guessed or brute forced. This is a huge security flaw as guessing or cracking the admin password can compromise the whole application and give the attacker access to every functionality on the site.

### Fix

```sql
-- ...
INSERT INTO users (username, password_hash, admin) VALUES ('Anonymous', '$2b$10$iqtij1IfdJh/S7EB1fL4G.RQt9.j2d6HIcnKKRjYFFKDkmTGGRJqe', 1);
-- ...
```

**branch** fixed, **file** [init.sql](https://github.com/rikurauhala/hack-this/blob/fixed/server/data/init.sql#L38)


```typescript
// ...
const loginRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { message: 'Too many requests, please try again later.' }
// ...
});
```

**branch** fixed, **file** [login.ts](https://github.com/rikurauhala/hack-this/blob/fixed/server/src/routes/login.ts#L12)

The weak admin password can be fixed by using a random string of characters instead of using a simple six-letter word that can be easily cracked. The admin account name has also been changed for extra security as it makes it harder for the attacker to guess which account they should be targeting. The application contains no public list of administrators so the name of an account is the only thing that might give away administrator status.

As an additional security measure, rate limiting has been added to the login router. Now the API can no longer be spammed trying to guess any passwords by brute force.

To improve the security further, weak passwords should never be allowed in the first place. Users and especially administrators should not be allowed to use passwords that can be easily guessed and/or are found in the dictionary.

## FLAW 3: Broken Access Control

> [A5:2017](https://owasp.org/www-project-top-ten/2017/A5_2017-Broken_Access_Control)

### Vulnerability

```typescript
// ...
messagesRouter.delete('/:messageId', async (request: Request, response: Response) => {
  const decodedToken = jwt.verify(request.token as string, SECRET) as jwt.JwtPayload;
  const userId = decodedToken.id as string;

  if (!userId) {
    return response.status(401).json({ error: 'Token missing or invalid!' });
  }

  const messageId = request.params.messageId;

  if (!messageId) {
    return response.status(400).json({ message: 'Message ID required' });
  }
// ...
```

**branch** main, **file** [messages.ts](https://github.com/rikurauhala/hack-this/blob/main/server/src/routes/messages.ts#L33)

JSON Web Token (JWT) is used for authenticating users and checking if they have sufficient permissions to perform actions on the website. However, there is a problem: the developer of the application has intended the message deletion functionality to be available only for the admin account, but has forgotten to actually check the admin status before deleting the message. This means that anyone who is logged in and is in possession of a valid token can delete any message.

In the frontend the message deletion button is only visible for administrators but this doesn't stop anyone from simply making a DELETE request to the `/api/messages/<messageId>` endpoint and deleting any message they want. This demonstrates why it is extremely important to make sure the backend is secure. The frontend can be easily modified or bypassed.

### Fix

```typescript
// ...
messagesRouter.delete('/:messageId', async (request: Request, response: Response) => {
  const decodedToken = jwt.verify(request.token as string, SECRET) as jwt.JwtPayload;
  const userId = decodedToken.id as string;
  const admin = decodedToken.admin as string;

  if (!userId) {
    return response.status(401).json({ error: 'Token missing or invalid!' });
  }

  if (!admin) {
    return response.status(401).json({ error: 'Insufficient permissions' });
  }

  const messageId = request.params.messageId;

  if (!messageId) {
    return response.status(400).json({ message: 'Message ID required' });
  }
// ...
```

**branch** fixed, **file** [message.ts](https://github.com/rikurauhala/hack-this/blob/fixed/server/src/routes/messages.ts#L43)

An easy fix is to simply verify that the user who made the request does actually have administrative privileges to delete the message. This is why the admin status is stored as a boolean and saved in the token.

## FLAW 4: Cross-Site Scripting

> [A7:2017](https://owasp.org/www-project-top-ten/2017/A7_2017-Cross-Site_Scripting_(XSS))

### Vulnerability

```typescript
// ...
messagesRouter.post('/', async (request: Request, response: Response) => {
  const decodedToken = jwt.verify(request.token as string, SECRET) as jwt.JwtPayload;
  const userId = decodedToken.id as string;

  if (!userId) {
    return response.status(401).json({ error: 'Token missing or invalid!' });
  }

  const message = request.body.message as string;

  if (!message) {
    return response.status(400).json({ message: 'Message required' });
  }

  const createdAt = new Date().toISOString();
  const insertedMessage = await db.insertMessage(message, createdAt, userId);
  return response.status(201).json(insertedMessage);
});
// ...
```

**branch** main, **file** [messages.ts](https://github.com/rikurauhala/hack-this/blob/main/server/src/routes/messages.ts#L22)

```typescript
// ...
const GuestBookMessageContent = ({ message }: GuestBookMessageContentProps): JSX.Element => (
  <span dangerouslySetInnerHTML={{ __html: message }} />
);
// ...
```

**branch** main, **file** [GuestBookMessageContent.tsx](https://github.com/rikurauhala/hack-this/blob/main/web/src/components/GuestBook/GuestBookMessage/GuestBookMessageContent.tsx#L13)

The application contains a critical stored cross-site scripting vulnerability. Users can leave messages in the guest book for other users to read. However, the messages are not sanitized at all before being inserted into the database. The vulnerability is made possible by another horrible mistake in the frontend. The frontend is made using the React.js library which by default has some safety measures in place to prevent XSS. However, the application uses the aptly named "dangerouslySetInnerHTML" property to allow unescaped input to be inserted into the DOM.

These two design mistakes allow users to enter JavaScript code via the guest book. This code will get stored in the database and is loaded when another user enters the guest book page. Taking advantage of for example the HTML `<img>` tags "onLoad" property, malicious code can be instantly executed when a victim loads the guest book page.

### Fix

```typescript
// ...
messagesRouter.post('/', async (request: Request, response: Response) => {
  const decodedToken = jwt.verify(request.token as string, SECRET) as jwt.JwtPayload;
  const userId = decodedToken.id as string;

  if (!userId) {
    return response.status(401).json({ error: 'Token missing or invalid' });
  }

  const message = request.body.message as string;

  if (!message) {
    return response.status(400).json({ message: 'Message required' });
  }

  const createdAt = new Date().toISOString();
  const sanitizedMessage = encodeURIComponent(message);
  const insertedMessage = await db.insertMessage(sanitizedMessage, createdAt, userId);
  return response.status(201).json(insertedMessage);
});
// ...
```

**branch** fixed, **file** [messages.ts](https://github.com/rikurauhala/hack-this/blob/fixed/server/src/routes/messages.ts#L29)

```typescript
// ...
const GuestBookMessageContent = ({ message }: GuestBookMessageContentProps): JSX.Element => (
  <span>{message}</span>
);
// ...
```

**branch** fixed, **file** [GuestBookMessageContent.tsx](https://github.com/rikurauhala/hack-this/blob/fixed/web/src/components/GuestBook/GuestBookMessage/GuestBookMessageContent.tsx#L13)

To fix the cross-site scripting vulnerability, messages are sanitized in the backend and the frontend no longer uses the dangerouslySetInnerHTML property.

## FLAW 5: Insufficient Logging & Monitoring

> [A10:2017](https://owasp.org/www-project-top-ten/2017/A10_2017-Insufficient_Logging%2526Monitoring)

### Vulnerability

```typescript
// ...
export const requestLogger = (request: Request, _response: Response, next: NextFunction): void => {
  const { method, originalUrl, ip } = request;
  logger.logRequest(method, originalUrl, ip);
  next();
};
// ...
```

**branch** main, **file** [middleware.ts](https://github.com/rikurauhala/hack-this/blob/main/server/src/utils/middleware.ts#L71)

```typescript
// ...
const app = express();
app.use(express.json());
app.use(cors());
// app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);
app.use(middleware.userExtractor);
// ...
```

**branch** main, **file** [index.ts](https://github.com/rikurauhala/hack-this/blob/main/server/src/index.ts#L13)

Middleware logging all requests to the server has been created but the developer has forgotten to actually use it. If all requests were properly being logged, the administrators could more easily detect any suspicious activity and take action if necessary.

### Fix

```typescript
// ...
app.use(express.json());
app.use(cors());
app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);
app.use(middleware.userExtractor);
// ...
```

**branch** fixed, **file** [index.ts](https://github.com/rikurauhala/hack-this/blob/fixed/server/src/index.ts#L13)

Fixing the logging issue is trivial. As the request logger middleware already exists, it can be easily turned on. The middleware logs all requests the server has received, their timestamp and the IP address the request originated from. For now the logs are written into a text file and require manual review but as the logging functionality already exists, it should be easy to extend it include more information.

For additional security, automatic alerts could be set up. Any suspicious activity would be reported to the administrator. For example, someone trying to repeatedly log in to an account should trigger an alarm.
