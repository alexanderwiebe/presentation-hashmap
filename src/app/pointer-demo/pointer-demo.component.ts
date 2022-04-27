import { Component, OnInit } from '@angular/core';
import sdk from '@stackblitz/sdk';
@Component({
  selector: 'app-pointer-demo',
  templateUrl: './pointer-demo.component.html',
  styleUrls: ['./pointer-demo.component.scss'],
})
export class PointerDemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    sdk.embedProjectId('sb-pointer-demo', 'typescript-jfauku', {
      height: '100%',
      forceEmbedLayout: true,
      openFile: 'index.ts',
      devToolsHeight: 100,
    });
  }
}
