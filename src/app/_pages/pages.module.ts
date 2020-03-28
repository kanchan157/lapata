import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
      HomeComponent,
      UserDetailComponent
  ],
  imports:[
    PagesRoutingModule,IonicModule.forRoot()
  ]
})

export class PagesModule {}
