<<<<<<< HEAD
# Angular17_JWTtoken
How JWT Authentication Flow Works
Let’s look at how JWT actually works in practice step by step:

1. Login: You enter your username and password on the website. If the details are correct, the server generates a JWT and sends it back to you.

2. Store and Send: Your browser then stores this token (often in a place called local storage). Every time you visit a new page on the site or request a protected resource, your browser automatically sends the JWT along in the headers of the HTTP request.

3. Verify and Allow: The server gets this request, and the JWT with it. It checks the JWT’s signature to make sure it’s legit and hasn’t been messed with. If everything checks out, the server provides the resources you asked for.
=======
# FormValidation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
>>>>>>> c1e23a7 (initial commit)
