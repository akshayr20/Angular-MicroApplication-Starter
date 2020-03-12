import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, NgZone, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  // entryComponents: [AppComponent]
})
export class AppModule {
  // constructor(private injector: Injector, private ngZone: NgZone) {
  //   (window as any).ngZone = this.ngZone;
  // }

  // ngDoBootstrap() {
  //   const elm = createCustomElement(AppComponent, {
  //     injector: this.injector
  //   }) as any;
  //   customElements.define('my-app1', elm);
  // }
}
