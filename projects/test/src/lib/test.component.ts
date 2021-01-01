import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-test',
  template: `
    <p>
      test module works! Below are loading from core/shared module..

      <lib-form-input></lib-form-input>

      <lib-form-select></lib-form-select>
    </p>
  `,
  styles: [
  ]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
