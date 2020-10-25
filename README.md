# Crypto Trading Dashboard

## Startup

Run `npm install` to install dependencies.
After that run `npm start` for a dev server. Navigate to `http://localhost:4200/` to see the app work.

## Starting on different environments
* `npm run start:prod` - starts development app using production environment (should be used only for testing or debugging purposes)
* `npm run build:dev` - build application for development environment
* `npm run build:prod` - build application for production environment

## Unit tests

They was no requirement, but I added some.
Run `npm test` to execute them via [Karma](https://karma-runner.github.io).

## Case studies

### Waiting for update

I've added loading bar, so the user can see that new data are being loaded.

### Ensuring 15s time period between requests

Since JavaScript is using event loop, there is no way to ensure, that request will start strictly every 15 seconds. I've considered using web workers for that, but in this case the problem would be the same. I see only one gain from using web worker, which is ensuring, that event loop won't be blocked by some expensive synchronous process. In this case there are no such processes. I didn't notice any delay caused by e.g. sorting data. However I'd consider separating sorting process to web worker if the data amount increases.

### App state management

Given that in every application there is a possibility that it will be developed further, I've decided to use ngrx for state management and components almost stricte data driven. Such approach allows me to easly add new functionalities. In this case it could be e.g. showing notification if specific crypto currency reaches some predefined price or displaying in other table trending currencies (with biggest 24h change).
