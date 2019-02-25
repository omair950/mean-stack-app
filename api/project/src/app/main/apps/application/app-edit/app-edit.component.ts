// import { Profession } from './../../../../../../../cilent_side/src/app/Model';
import { AppService } from './../app.service';
import { Studentmodal } from 'app/main/apps/student/std.model';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ControlValueAccessor, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';
import { Subjectmodal } from 'app/main/apps/subject/subj.model';
import { Professionmodal } from 'app/main/apps/profession/prof.model';
import { SubjService } from 'app/main/apps/subject/subj.service';
import { Schlorshipmodal } from 'app/main/apps/schlorship/sch.model';
import { SchService } from 'app/main/apps/schlorship/sch.service';
import { CustomValidator } from 'app/main/apps/CustomValidation';



@Component({
  selector: 'app-app-edit',
  templateUrl: './app-edit.component.html',
  styleUrls: ['./app-edit.component.scss']
})
export class AppEditComponent implements OnInit {
  lcomments: any;
  subjects: any;
  colleges: any;
  profession: any;
  datashow: any = [];
  std_id: any = [];
  add_id: any = [];
  bill_id: any = [];
  acad_id: any = [];
  clg_id: any = [];
  sub_id: any = [];

  // Student
  std_Nic: any;
  std_Name: any;
  std_F_Name: any;
  std_Gender: any;
  std_Phone_no: any;
  std_DOB: any;
  std_Email: any;

  // Address
  parmnt_add: any;
  temp_add: any;
  add_City: any;
  add_province: any;


  guad_Name: any;
  guad_Cnic: any;
  guad_Income: any;
  pro_id: any;
  prof_id: any;
  gaud_id: any;


  // Bill
  bill_last_month: any;
  bill_Average: any;
  bill_address: any;


  // subject
  subj_id: any;
  subj_Group_department: any;

  // college
  clg_Name: any;

  // Academic
  last_degree_tittle: any;
  board_university_last_exam: any;
  last_exam_marks_obt: any;
  last_exam_total_marks: any;
  percentage_last_exam: any;
  current_degree_tittle: any;
  current_study_year: any;
  current_degree_fee_amount: any;
  grade_last_exam: any;
  year_passing_last_exam: any;
  current_degree_adm_date: any;
  current_exam_obt_marks: any;
  current_exam_total_marks: any;
  current_exam_grade: any;
  admission_date_current_degree: any;

  // college: College[];
  // professions: Profession[];
  // scholarships: Scholarship[];
  // Addresses: Address[];
  // academics: Academic[];
  // applications: Application[];
  // bills: Bill[];
  // students: Student[];
  // subject: Subject[];
  // guadians: Guadian[];
  regiForm: FormGroup;

  // combine id (for foreign key relation)
  // studentCNIC: any;
  // studentID: any;
  // checkcnic: any;
  // checkID: any;

  // profname: any;
  // profID: any;

  // newbill_id: any;
  // newadd_id: any;
  // newguad_id: any;
  // newacad_id: any;
  // newclg_id: any;



  // bill_id: any;
  // add_id: any;
  // guad_id: any;
  // acad_id: any;

  // sub_id: any;
  // study_year: any;
  // sch_id: any;
  // clg_id: any;

  productForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router,
    private ac: AppService,
    private _formBuilder: FormBuilder,
    private _location: Location,
    private _matSnackBar: MatSnackBar
  ) {
    this.productForm = new FormGroup({
      std_Name: new FormControl(),
      std_F_Name: new FormControl(),
      std_Nic: new FormControl(),
      std_Gender: new FormControl(),
      std_DOB: new FormControl(),
      std_Phone_no: new FormControl(),
      std_Email: new FormControl(),


      gaud_Name: new FormControl(),
      gaud_Income: new FormControl(),
      gaud_cnic: new FormControl(),
      pro_id: new FormControl(),


      temp_add: new FormControl(),
      parmnt_add: new FormControl(),
      add_City: new FormControl(),
      add_province: new FormControl(),


      bill_last_month: new FormControl(),
      bill_Average: new FormControl(),
      bill_address: new FormControl(),


      last_degree_tittle: new FormControl(),
      board_university_last_exam: new FormControl(),
      last_exam_marks_obt: new FormControl(),
      last_exam_total_marks: new FormControl(),
      grade_last_exam: new FormControl(),
      percentage_last_exam: new FormControl(),
      year_passing_last_exam: new FormControl(),
      admission_date_current_degree: new FormControl(),
      current_degree_tittle: new FormControl(),
      current_study_year: new FormControl(),
      current_degree_fee_amount: new FormControl(),

      sub_id: new FormControl(),
      clg_id: new FormControl(),
      sch_id: new FormControl(),

    });


    // this.productForm = this._formBuilder.group({

    this.productForm = this._formBuilder.group({

      'std_Name': ['', [Validators.required, CustomValidator.alphabetValidator]],
      'std_DOB': ['', [Validators.required]],
      'std_F_Name': [' ', [Validators.required, CustomValidator.alphabetValidator]],
      'std_Phone_no': ['', [Validators.required, CustomValidator.numberValidator]],
      'std_Email': ['', [Validators.required, CustomValidator.emailValidator]],
      'std_Gender': ['', [Validators.required]],
      'sch_id': [''],


      'clg_id': [''],

      'gaud_Name': ['', [Validators.required, CustomValidator.alphabetValidator]],
      'gaud_Income': ['', [Validators.required, CustomValidator.numberValidator]],
      'pro_id': [''],
      'gaud_cnic': ['', [Validators.required, CustomValidator.cnicValidator]],


      'sub_id': [''],
      'bill_last_month': ['', [Validators.required, CustomValidator.numberValidator]],
      'bill_Average': ['', [Validators.required, CustomValidator.numberValidator]],
      'bill_address': ['', [Validators.required]],



      'temp_add': ['', [Validators.required]],
      'parmnt_add': ['', [Validators.required]],
      'add_City': ['', [Validators.required, CustomValidator.alphabetValidator]],
      'add_province': ['', [Validators.required]],
      'last_degree_tittle': ['', [Validators.required, CustomValidator.alphabetValidator]],

      'board_university_last_exam': ['', [Validators.required, CustomValidator.alphabetValidator]],
      'last_exam_marks_obt': ['', [Validators.required, CustomValidator.numberValidator]],
      'last_exam_total_marks': ['', [Validators.required, CustomValidator.numberValidator]],
      'grade_last_exam': ['', [Validators.required, CustomValidator.alphabetValidator]],
      'percentage_last_exam': ['', [Validators.required, CustomValidator.numberValidator]],
      'year_passing_last_exam': ['', [Validators.required, CustomValidator.numberValidator]],
      'admission_date_current_degree': [''],
      'current_degree_tittle': ['', [Validators.required, CustomValidator.alphabetValidator]],
      'current_study_year': ['', [Validators.required, CustomValidator.numberValidator]],
      'current_degree_fee_amount': ['', [Validators.required, CustomValidator.numberValidator]],
    });



  }
  // tslint:disable-next-line:typedef
  ngOnInit() {


    this.ac.getclgdata().subscribe((data: any) => {
      this.colleges = data;
      // console.log(this.colleges);
    });


    this.ac.getsubdata().subscribe((data: Subjectmodal[]) => {

      this.subjects = data;
      // console.log(this.subjects);
    });

    this.ac.getprodata().subscribe((data: Professionmodal[]) => {

      this.profession = data;
      // console.log(this.subjects);
    });


    this.ac.getschdata().subscribe((data: Schlorshipmodal[]) => {
      this.lcomments = data;

      // console.log(this.lcomments);

    });


    this.route.params.subscribe(params => {
      this.ac.geteditclg(params['app_id']).subscribe((data: any) => {
        this.datashow = data[0];
        this.std_id = data[0].std_id;
        this.gaud_id = data[0].gaud_id;
        this.add_id = data[0].add_id;
        this.bill_id = data[0].bill_id;

        this.acad_id = data[0].acad_id;
        this.clg_id = data[0].clg_id;
        this.sub_id = data[0].subj_id;

        this.datashow.subj_Group_department = data[0].sub_id;
        this.datashow.clg_Name = data[0].clg_id;
        this.datashow.sch_Name = data[0].sch_id;
        this.datashow.profession = data[0].prof_id;
        this.datashow.subj_Group_department = data[0].subj_id;

        console.log(data[0].subj_id);
        // console.log(data[0].std_id + 'yesasa');

      });
    });

  }
  // tslint:disable-next-line:typedef

  // tslint:disable-next-line:typedef
  updateApp(clg_id, sub_id, sch_id) {

    if (this.productForm.get('clg_id').touched || this.productForm.get('sub_id').touched || this.productForm.get('sch_id').touched) {
      this.route.params.subscribe(params => {
        console.log(clg_id, sub_id, sch_id, params['app_id']);
        this.ac.updateApp(clg_id, sub_id, sch_id, params['app_id']);
        this.updateStudent();

        //  console.log(clg_id, sub_id, sch_id, params['app_id']);
        // this.router.navigate(['college/get']);
      });
    }
    else {
      console.log('clg sch sub not change');
      this.updateStudent();
    }


    // tslint:disable-next-line:semicolon

  }

  // tslint:disable-next-line:typedef
  updateStudent() {
    // tslint:disable-next-line:max-line-length
    if (this.productForm.get('std_Name').touched || this.productForm.get('std_F_Name').touched || this.productForm.get('std_DOB').touched || this.productForm.get('std_Phone_no').touched
      || this.productForm.get('std_Email').touched || this.productForm.get('std_Gender').touched) {

      this.std_Name = this.productForm.value.std_Name;
      this.std_F_Name = this.productForm.value.std_F_Name;
      this.std_DOB = this.productForm.value.std_DOB;
      this.std_Phone_no = this.productForm.value.std_Phone_no;
      this.std_Email = this.productForm.value.std_Email;
      this.std_Gender = this.productForm.value.std_Gender;
      this.ac.updateStudent(this.std_Name, this.std_F_Name, this.std_DOB, this.std_Phone_no, this.std_Email, this.std_Gender, this.std_id);


      console.log('omer');
      this.updateGaudian();

    }
    else {
      console.log('student not change');
      this.updateGaudian();
    }
  }



  // tslint:disable-next-line:typedef
  updateGaudian() {
    // tslint:disable-next-line:max-line-length
    if (this.productForm.get('gaud_Name').touched || this.productForm.get('gaud_cnic').touched || this.productForm.get('gaud_Income').touched || this.productForm.get('pro_id').touched) {
      this.guad_Name = this.productForm.value.gaud_Name;
      this.guad_Cnic = this.productForm.value.gaud_cnic;
      this.guad_Income = this.productForm.value.gaud_Income;
      this.prof_id = this.productForm.value.pro_id;

      // console.log('this.datashow', this.datashow);
      // if (this.datashow) { return false; }
      // console.log(this.guad_Name, this.guad_Cnic, this.guad_Income, this.prof_id, this.gaud_id);
      this.ac.updateGaudian(this.guad_Name, this.guad_Cnic, this.guad_Income, this.prof_id, this.gaud_id);
      this.updateAddrs();



    }
    else {
      console.log('gaudian not change');
      this.updateAddrs();
    }
  }





  // tslint:disable-next-line:typedef
  updateAddrs() {

    // tslint:disable-next-line:max-line-length
    if (this.productForm.get('temp_add').touched || this.productForm.get('parmnt_add').touched || this.productForm.get('add_City').touched || this.productForm.get('add_province').touched) {
      this.temp_add = this.productForm.value.temp_add,
        this.parmnt_add = this.productForm.value.parmnt_add,
        this.add_City = this.productForm.value.add_City,
        this.add_province = this.productForm.value.add_province,
        this.ac.updateAddrs(this.temp_add, this.parmnt_add, this.add_City, this.add_province, this.add_id);
      // this.router.navigate(['college/get']);
      this.updateBill();

    }
    else {
      console.log('address not change');
      this.updateBill();
    }
  }



  // tslint:disable-next-line:typedef
  updateBill() {

    if (this.productForm.get('bill_last_month').touched || this.productForm.get('bill_Average').touched || this.productForm.get('bill_address').touched) {
      this.bill_last_month = this.productForm.value.bill_last_month,
        this.bill_Average = this.productForm.value.bill_Average,
        this.bill_address = this.productForm.value.bill_address,

        // console.log(bill_last_month, bill_Average, bill_address);
        this.ac.updateBill(this.bill_last_month, this.bill_Average, this.bill_address, this.bill_id);
      // this.router.navigate(['college/get']);
      this.updateAcad();

    }
    else {
      console.log('bill not change');
      this.updateAcad();
    }
  }


  // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:typedef
  updateAcad() {
    this.last_degree_tittle = this.productForm.value.last_degree_tittle,
      this.board_university_last_exam = this.productForm.value.board_university_last_exam,
      this.last_exam_marks_obt = this.productForm.value.last_exam_marks_obt,
      this.grade_last_exam = this.productForm.value.grade_last_exam,
      this.last_exam_total_marks = this.productForm.value.last_exam_total_marks,
      this.percentage_last_exam = this.productForm.value.percentage_last_exam,
      this.year_passing_last_exam = this.productForm.value.year_passing_last_exam,
      this.admission_date_current_degree = this.productForm.value.admission_date_current_degree,
      this.current_degree_tittle = this.productForm.value.current_degree_tittle,
      this.current_study_year = this.productForm.value.current_study_year,
      this.current_degree_fee_amount = this.productForm.value.current_degree_fee_amount,

      this.route.params.subscribe(params => {
        // tslint:disable-next-line:max-line-length
        // console.log(last_degree_tittle, board_university_last_exam, last_exam_marks_obt, last_exam_total_marks, grade_last_exam, percentage_last_exam, year_passing_last_exam, admission_date_current_degree, current_degree_tittle, current_study_year, current_degree_fee_amount);
        // // tslint:disable-next-line:max-line-length
        this.ac.updateAcad(this.last_degree_tittle, this.board_university_last_exam,
          this.last_exam_marks_obt, this.last_exam_total_marks, this.grade_last_exam, this.percentage_last_exam,
          this.year_passing_last_exam, this.admission_date_current_degree, this.current_degree_tittle,
          this.current_study_year, this.current_degree_fee_amount, this.acad_id, params['app_id']);
        // this.router.navigate(['college/get']);


        // this.router.navigate(['college/get']);
      });
    this.openSnackBar();
  }

  // tslint:disable-next-line:typedef
  openSnackBar() {
    this._matSnackBar.open('Application Details', ' Updated', {
      duration: 2000,
      panelClass: 'true-dialog',


    });
  }
}
