import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OktaAuthModule } from '@okta/okta-angular';
import { AuthInterceptor } from './shared/okta/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MarkdownModule } from 'ngx-markdown';
import { EditComponent } from './edit/edit.component';
import { SafePipeModule } from 'safe-pipe';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


const firebaseConfig = {
  apiKey: "xxx",
  authDomain: "flowrolljj.firebaseapp.com",
  databaseURL: "https://flowrolljj.firebaseio.com",
  projectId: "flowrolljj",
  storageBucket: "flowrolljj.appspot.com",
  messagingSenderId: "xxx"
};

const config = {
  issuer: 'https://dev-637635.okta.com',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: 'xxx'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OktaAuthModule.initAuth(config),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    MarkdownModule.forRoot(),
    SafePipeModule,
    CKEditorModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
