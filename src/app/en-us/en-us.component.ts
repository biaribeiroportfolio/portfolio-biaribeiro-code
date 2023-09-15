import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-en-us',
  templateUrl: './en-us.component.html',
  styleUrls: ['./en-us.component.scss']
})
export class EnUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
