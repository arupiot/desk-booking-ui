// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//This needs to be put into .gitignore, will probably have the clientsecret in it

export const environment = {
  production: false,
  auth: {
    clientID: 'M0q1Dt5-1OPgqwG2xza_NsnMfYrH_hdD',
    domain: 'angular-authentication.eu.auth0.com',
    // audience: 'http://localhost:3001',
    redirect: 'https://arup-iot-desk.firebaseapp.com/callback',
    scope: 'openid profile '
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
