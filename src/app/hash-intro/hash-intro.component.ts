import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-hash-intro',
  templateUrl: './hash-intro.component.html',
  styleUrls: ['./hash-intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-hash-intro',
  },
})
export class HashIntroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
