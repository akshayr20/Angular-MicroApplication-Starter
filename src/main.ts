// import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import '@bit/orxe_3.base.rating-bar';
import '@bit/orxe_3.base.counter';
import '@bit/orxe_3.base.accordion';
import '@bit/orxe_3.base.card';

if (environment.production) {
  // enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule, { ngZone: (window as any).ngZone })
  .catch(err => console.error(err));
