import { Component, OnInit } from '@angular/core';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-bigo-one',
  templateUrl: './bigo-one.component.html',
  styleUrls: ['./bigo-one.component.scss'],
})
export class BigoOneComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    sdk.embedProjectId('sb-bigo-one', 'typescript-tscc4d', {
      height: '100%',
      forceEmbedLayout: true,
      openFile: 'index.ts',
      devToolsHeight: 45,
    });
  }
}
