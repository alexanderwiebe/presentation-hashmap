import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pointer-exp',
  templateUrl: './pointer-exp.component.html',
  styleUrls: ['./pointer-exp.component.scss'],
})
export class PointerExpComponent implements OnInit {
  markdown = `\`\`\` javascript
  let myName = "AJ";
  // myName has some memory location eg: 0x12345678
  let myObj = { name: "AJ", favColour: "blue" };
  // myObj has some memory location eg: 0x87654321
  // when we operate with:
  //     myName its using the value not the reference
  //     myObj its using the reference not the value
  \`\`\``;

  constructor() {}

  ngOnInit(): void {}
}
