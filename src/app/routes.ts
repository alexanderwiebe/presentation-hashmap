import { Routes } from '@angular/router';
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
    path: 'questions',
    component: QuestionsComponent,
  },
  {
    path: 'thanks',
    component: ThanksComponent,
  },
];
