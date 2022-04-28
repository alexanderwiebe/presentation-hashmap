import { Component, OnInit } from '@angular/core';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-bigo-nsqr',
  templateUrl: './bigo-nsqr.component.html',
  styleUrls: ['./bigo-nsqr.component.scss'],
})
export class BigoNsqrComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    sdk.embedProjectId('sb-bigo-nsqr', 'typescript-vxirw6', {
      height: '100%',
      forceEmbedLayout: true,
      openFile: 'index.ts',
      devToolsHeight: 45,
    });
  }
}
