// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseDev: {
    apiKey: 'AIzaSyAWOhSKVvR9A2OgoLjC1f0BvyHabLif_7A',
    authDomain: 'hoyesdisenoappdev.firebaseapp.com',
    databaseURL: 'https://hoyesdisenoappdev.firebaseio.com',
    projectId: 'hoyesdisenoappdev',
    storageBucket: 'hoyesdisenoappdev.appspot.com',
    messagingSenderId: '687133183435'
  },
  firebase: {
    apiKey: 'AIzaSyB2FnCENfDq91qwEPIlg-tUTIE4hlkn1cw',
    authDomain: 'hoyesdisenoapp.firebaseapp.com',
    databaseURL: 'https://hoyesdisenoapp.firebaseio.com',
    projectId: 'hoyesdisenoapp',
    storageBucket: 'hoyesdisenoapp.appspot.com',
    messagingSenderId: '731835721273'
  }
};
