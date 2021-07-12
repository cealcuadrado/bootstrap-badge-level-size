import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  level = 1;

  constructor() { }

  ngOnInit(): void {
  }

  getLevel(): string {
    return `level-${this.level}`;
  }

}
