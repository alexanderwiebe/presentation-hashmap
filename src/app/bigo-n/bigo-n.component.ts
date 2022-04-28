import { Component, OnInit } from '@angular/core';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-bigo-n',
  templateUrl: './bigo-n.component.html',
  styleUrls: ['./bigo-n.component.scss'],
})
export class BigoNComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    sdk.embedProjectId('sb-bigo-n', 'typescript-gv84km', {
      height: '100%',
      forceEmbedLayout: true,
      openFile: 'index.ts',
      devToolsHeight: 45,
    });
  }
}
