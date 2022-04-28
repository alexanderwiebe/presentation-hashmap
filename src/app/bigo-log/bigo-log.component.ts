import { Component, OnInit } from '@angular/core';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-bigo-log',
  templateUrl: './bigo-log.component.html',
  styleUrls: ['./bigo-log.component.scss'],
})
export class BigoLogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    sdk.embedProjectId('sb-bigo-log', 'typescript-ciuunx', {
      height: '100%',
      forceEmbedLayout: true,
      openFile: 'index.ts',
      devToolsHeight: 45,
    });
  }
}
