// import { Profession } from './../../../../../../../cilent_side/src/app/Model';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/main/apps/application/app.service';

import { Subjectmodal } from 'app/main/apps/subject/subj.model';
import { SubjService } from 'app/main/apps/subject/subj.service';
import { Schlorshipmodal } from 'app/main/apps/schlorship/sch.model';
import { SchService } from 'app/main/apps/schlorship/sch.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Professionmodal } from 'app/main/apps/profession/prof.model';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  // profession: any = [];
  // subjects: any;
  // colleges: any;
  datashow: any = [];
  pro: any = [];
  constructor(private ac: AppService, private route: ActivatedRoute, private router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {




    this.route.params.subscribe(params => {
      this.ac.geteditclg(params['app_id']).subscribe((data: any) => {
        this.datashow = data[0];
        this.pro = data[0].prof_id;

        console.log(data[0].profession);
        // this.datashow.subj_Group_department = data[0].sub_id;
        // this.datashow.clg_Name = data[0].clg_id;
        // this.datashow.sch_Name = data[0].sch_id;


      });

      // this.ac.getdatapro(this.pro).subscribe((data: any[]) => {
      //   this.profession = data[0];
      //   console.log(data[0]);
      //   // console.log(this.profession.profession + 'dhek');

      // });
    });

    // this.ac.geteditpro(this.datashow.prof_id).subscribe((data: any) => {
    //   // this.lcomments = data[0];

    //   // this.datashow.subj_Group_department = data[0].sub_id;
    //   // this.datashow.clg_Name = data[0].clg_id;
    //   // this.datashow.sch_Name = data[0].sch_id;
    //   console.log(this.datashow.prof_id);


    // });



  }

}
