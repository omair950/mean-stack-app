import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gaud-add',
  templateUrl: './gaud-add.component.html',
  styleUrls: ['./gaud-add.component.scss']
})
export class GaudAddComponent implements OnInit {

  constructor(public router: Router) {
    let details = localStorage.getItem("details")

    if (details === null) {
      this.router.navigate(['/login']);
    }
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

}
