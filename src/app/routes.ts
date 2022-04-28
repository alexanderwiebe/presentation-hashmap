import { Routes } from '@angular/router';
import { BigoFacComponent } from './bigo-fac/bigo-fac.component';
import { BigoIntroComponent } from './bigo-intro/bigo-intro.component';
import { BigoLogComponent } from './bigo-log/bigo-log.component';
import { BigoNComponent } from './bigo-n/bigo-n.component';
import { BigoNsqrComponent } from './bigo-nsqr/bigo-nsqr.component';
import { BigoOneComponent } from './bigo-one/bigo-one.component';
import { HashArrayComponent } from './hash-array/hash-array.component';
import { HashIntroComponent } from './hash-intro/hash-intro.component';
import { HashListComponent } from './hash-list/hash-list.component';
import { IntroComponent } from './intro/intro.component';
import { PointerDemoComponent } from './pointer-demo/pointer-demo.component';
import { PointerExpComponent } from './pointer-exp/pointer-exp.component';
import { PointerIntroComponent } from './pointer-intro/pointer-intro.component';
import { QuestionsComponent } from './questions/questions.component';
import { ThanksComponent } from './thanks/thanks.component';
import { TitleComponent } from './title/title.component';

export const routes: Routes = [
  {
    path: '',
    component: TitleComponent,
  },
  {
    path: 'intro',
    component: IntroComponent,
  },
  {
    path: 'pointer-intro',
    component: PointerIntroComponent,
  },
  {
    path: 'pointer-exp',
    component: PointerExpComponent,
  },
  {
    path: 'pointer-demo',
    component: PointerDemoComponent,
  },
  {
    path: 'bigo-intro',
    component: BigoIntroComponent,
  },
  {
    path: 'bigo-one',
    component: BigoOneComponent,
  },
  {
    path: 'bigo-n',
    component: BigoNComponent,
  },
  {
    path: 'bigo-nsqr',
    component: BigoNsqrComponent,
  },
  {
    path: 'bigo-fac',
    component: BigoFacComponent,
  },
  {
    path: 'bigo-log',
    component: BigoLogComponent,
  },
  {
    path: 'hash-intro',
    component: HashIntroComponent,
  },
  {
    path: 'hash-list',
    component: HashListComponent,
  },
  {
    path: 'hash-array',
    component: HashArrayComponent,
  },
  {
    path: 'questions',
    component: QuestionsComponent,
  },
  {
    path: 'thanks',
    component: ThanksComponent,
  },
];
