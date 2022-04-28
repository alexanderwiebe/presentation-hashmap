import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MarkdownModule } from 'ngx-markdown';
import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NextDirective } from './directives/next.directive';
import { PrevDirective } from './directives/prev.directive';
import { IntroComponent } from './intro/intro.component';
import { QuestionsComponent } from './questions/questions.component';
import { RouteModule } from './route/route.module';
import { metaReducers, reducers } from './store';
import { ThanksComponent } from './thanks/thanks.component';
import { TitleComponent } from './title/title.component';
import { PointerIntroComponent } from './pointer-intro/pointer-intro.component';
import { PointerExpComponent } from './pointer-exp/pointer-exp.component';
import { PointerDemoComponent } from './pointer-demo/pointer-demo.component';
import { BigoIntroComponent } from './bigo-intro/bigo-intro.component';
import { BigoOneComponent } from './bigo-one/bigo-one.component';
import { BigoNComponent } from './bigo-n/bigo-n.component';
import { BigoNsqrComponent } from './bigo-nsqr/bigo-nsqr.component';
import { BigoFacComponent } from './bigo-fac/bigo-fac.component';
import { BigoLogComponent } from './bigo-log/bigo-log.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    IntroComponent,
    QuestionsComponent,
    ThanksComponent,
    NextDirective,
    PrevDirective,
    PointerIntroComponent,
    PointerExpComponent,
    PointerDemoComponent,
    BigoIntroComponent,
    BigoOneComponent,
    BigoNComponent,
    BigoNsqrComponent,
    BigoFacComponent,
    BigoLogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MarkdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    RouteModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
