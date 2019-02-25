import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { confirmPasswordValidator } from 'app/main/pages/authentication/register/register.component';
import { takeUntil } from 'rxjs/operators';
import { ConfirmPasswordValidator } from 'app/main/apps/CustomValidation';


@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class LoginRegComponent implements OnInit {

  registerForm: FormGroup;




  constructor(

    private _formBuilder: FormBuilder
  ) {

  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------


  ngOnInit(): void {
    this.registerForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['']
    }, { validator: ConfirmPasswordValidator.MatchPassword })




  }


  /**
   * On destroy
   */
  ngOnDestroy(): void {

  }
}

/**
 * Confirm password validator
 *
 * @param {AbstractControl} control
 * @returns {ValidationErrors | null}
 */

