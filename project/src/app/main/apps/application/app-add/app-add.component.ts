import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-add',
  templateUrl: './app-add.component.html',
  styleUrls: ['./app-add.component.scss']
})
export class AppAddComponent implements OnInit {

  constructor(public _router: Router) {
    let details = localStorage.getItem("details")

    if (details === null) {
      this._router.navigate(['/login']);
    }
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

}
