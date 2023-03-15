import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import { NgxSnakeModule } from 'ngx-snake';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameComponent } from './game/game.component';
import { CustomercareComponent } from './customercare/customercare.component';
import { CustomerComponent } from './customer/customer.component';
import { PurchasecardComponent } from './purchasecard/purchasecard.component';
import { AdminComponent } from './admin/admin.component';
import { GameDataComponent } from './game-data/game-data.component';
import { PurchaseComponent } from './components/purchase/purchase.component';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        NgxSnakeModule,
        BrowserAnimationsModule,


    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        GameComponent,
        CustomercareComponent,
        CustomerComponent,
        PurchasecardComponent,
        AdminComponent,
        GameDataComponent,
        PurchaseComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };