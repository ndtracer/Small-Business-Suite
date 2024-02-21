import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from 'rxjs/operators';

import { AccountService, AuthResponseData, AlertService } from "../_services";
import { Observable } from "rxjs";

@Component ({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
  authObsv: Observable<AuthResponseData>;
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
      this.form = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  // onSubmit() {
  //   this.submitted = true;

  //   // reset alerts on submit
  //   this.alertService.clear();

  //   // stop here if form is invalid
  //   if (this.form.invalid) {
  //     return;
  //   }

  //   this.loading = true;
  //   this.accountService.login(this.form.value.email, this.form.value.password)
  //   .pipe(first())
  //   .subscribe({
  //     next: () => {
  //       // get return url from query parameters or default to home page
  //       // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  //       this.router.navigate(['']);
  //     },
  //     error: error => {
  //       this.alertService.error(error);
  //       this.loading = false;
  //     }
  //   });
  // }
}
