// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyBeUFlnSZ5F-V9KBYQh4BOROv8kMWe_vok",
    authDomain: "restaurants-upd.firebaseapp.com",
    databaseURL: "https://restaurants-upd.firebaseio.com",
    projectId: "restaurants-upd",
    storageBucket: "restaurants-upd.appspot.com",
    messagingSenderId: "301624065973"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
