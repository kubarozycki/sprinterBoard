import { NgModule, ModuleWithProviders } from '@angular/core';
const appModeKey: string = "appState";

export enum AppState {
  Online,
  Offline
}


@NgModule()
export class AppMode {
  constructor() {
    AppMode.AppState = localStorage.getItem(appModeKey) == AppState.Offline.toString() ? AppState.Offline : AppState.Online;
  }
  private static appState: AppState;
  static get AppState(): AppState {
    return this.appState;
  }
  static set AppState(val: AppState) {
    this.appState = val;
    localStorage.setItem(appModeKey, val.toString());
  }
}
