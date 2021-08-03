import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './fakedb.service';
import { FornecedoresModule } from 'projects/fornecedores/src/public-api';
import { ClientesModule } from 'projects/clientes/src/public-api';
import { SharedModule } from 'projects/shared/src/public-api';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { httpClientInMemBackendServiceFactory, HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FornecedoresModule,
    ClientesModule,
    RouterModule,
    SharedModule,
    MatTabsModule,
    
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false},
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
