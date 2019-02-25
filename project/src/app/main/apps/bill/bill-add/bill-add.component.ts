import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill-add',
  templateUrl: './bill-add.component.html',
  styleUrls: ['./bill-add.component.scss']
})
export class BillAddComponent implements OnInit {

  constructor(public router: Router) {
    let details = localStorage.getItem("details")

    if (details === null) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
  }

}
