import { Component, OnInit } from '@angular/core';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-bigo-fac',
  templateUrl: './bigo-fac.component.html',
  styleUrls: ['./bigo-fac.component.scss'],
})
export class BigoFacComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    sdk.embedProjectId('sb-bigo-fac', 'typescript-wf3u3x', {
      height: '100%',
      forceEmbedLayout: true,
      openFile: 'index.ts',
      devToolsHeight: 45,
    });
  }
}
