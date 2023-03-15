import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { CustomercareComponent } from './customercare/customercare.component';
import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import { customer } from './customer/customer.service';
import { CustomerComponent } from './customer/customer.component';
import { PurchasecardComponent } from './purchasecard/purchasecard.component';
import { AdminComponent } from './admin/admin.component';
import { GameDataComponent } from './game-data/game-data.component';


const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    { path: 'game', component: GameComponent, canActivate: [AuthGuard] },
    { path: 'customercare', component:CustomercareComponent, canActivate: [AuthGuard]},
    { path: 'customer', component:CustomerComponent, canActivate: [AuthGuard]},
    { path: 'purchasecard', component:PurchasecardComponent, canActivate: [AuthGuard]},
    { path: 'admin', component:AdminComponent, canActivate: [AuthGuard]},
    { path: 'gamedata', component: GameDataComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }