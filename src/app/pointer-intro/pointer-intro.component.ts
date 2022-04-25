import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pointer-intro',
  templateUrl: './pointer-intro.component.html',
  styleUrls: ['./pointer-intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PointerIntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
