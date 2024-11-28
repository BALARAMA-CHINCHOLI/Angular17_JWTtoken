# Angular17_JWTtoken
How JWT Authentication Flow Works
Let’s look at how JWT actually works in practice step by step:

1. Login: You enter your username and password on the website. If the details are correct, the server generates a JWT and sends it back to you.

2. Store and Send: Your browser then stores this token (often in a place called local storage). Every time you visit a new page on the site or request a protected resource, your browser automatically sends the JWT along in the headers of the HTTP request.

3. Verify and Allow: The server gets this request, and the JWT with it. It checks the JWT’s signature to make sure it’s legit and hasn’t been messed with. If everything checks out, the server provides the resources you asked for.
