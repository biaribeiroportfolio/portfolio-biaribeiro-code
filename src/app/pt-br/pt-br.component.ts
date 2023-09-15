import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pt-br',
  templateUrl: './pt-br.component.html',
  styleUrls: ['./pt-br.component.scss']
})
export class PtBrComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
