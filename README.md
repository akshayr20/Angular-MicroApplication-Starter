## Angular Micro Application Scaffolding

## For Development

Open app.modules.ts

Comment entryComponents and uncomment bootstrap

1.  bootstrap: [AppComponent],
    // entryComponents: [AppComponent]

## For Production

Comment bootstrap and uncomment entryComponents

2.  // bootstrap: [AppComponent],
    entryComponents: [AppComponent]

## Scripts.

1. Output > Single Build File
   If you need a standalone build, which can be injected in the DOM without any external dependencies, execute

## npm run build:single from root directory.

Although this build works stand alone the major drawback of this type of build would be that lots of dependencies would be duplicated in all the Micro Applications.

2. Output > Single Build File with extracted core dependencies

Although this build extracts core packages and final bundle for Micro Application is really small the major drawback of this type of build would be that initial payload would be comparatively higher

## npm run build:extracted from root directory

## More Info:

More Information on Angular Custom Element is available on
https://angular.io/guide/elements
