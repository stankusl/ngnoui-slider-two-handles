import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AgGridModule} from 'ag-grid-angular';
import {NouisliderModule} from 'ng2-nouislider';
import {FiltersSettingsComponent} from './filters-settings/filters-settings.component';
import {FilterDdComponentComponent} from './filters-settings/filter-dd-component/filter-dd-component.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FiltersSettingsComponent,
    FilterDdComponentComponent
  ],
  imports: [
    AgGridModule.withComponents([]),
    BrowserModule,
    FormsModule,
    NouisliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
