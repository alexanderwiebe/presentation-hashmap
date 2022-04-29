import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-hash-list',
  templateUrl: './hash-list.component.html',
  styleUrls: ['./hash-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class HashListComponent implements OnInit {
  array = `\`\`\` typescript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
\`\`\``;
  dictionary = `\`\`\` typescript
const dictionary = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 };
\`\`\``;
  hashmap = `\`\`\` typescript
const hashmap = { [md5sum('a')]: 'a', [md5sum('b')]: 'b' };
\`\`\``;
  sets = `\`\`\` typescript
const set = new Set([1, 2, 3, 4, 1, 2, 3, 4]);
\`\`\``;
  trees = `\`\`\` typescript
class leaf {
  left: leaf | null = null;
  right: leaf | null = null;
}
const tree = new leaf();
\`\`\``;

  constructor() {}

  ngOnInit(): void {}
}
