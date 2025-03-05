import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideState, provideStore } from '@ngrx/store';
import { appStateReducer } from './store/app.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()),
    provideHttpClient(), provideAnimationsAsync(),
    provideStore({ appReducer: appStateReducer }),
    provideState({ name: 'appState', reducer: appStateReducer}), // this line is super important!! Must match what's in ngrx selector
    provideStoreDevtools({ maxAge: 25 }), provideAnimationsAsync()
]

};