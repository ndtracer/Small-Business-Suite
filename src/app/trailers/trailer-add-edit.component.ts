import { Component, OnInit } from "@angular/core";
import { TrailerService } from '../_services/trailer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'trailer-add-edit',
  templateUrl: 'trailer-add-edit.component.html'})

  export class TrailerAddEditComponent implements OnInit{

  form!: FormGroup;
  id?: string;
  title!: string;
  loading = false;
  submitting = false;
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private trailerService: TrailerService,

  ) { }

  ngOnInit(): void {


    this.id = this.route.snapshot.params['id'];


    // form with validation rules
    this.form = this.formBuilder.group({
      trailerID: ['', Validators.required],
      trailerType: ['', Validators.required],
      // currentLocation:
      // nextDestination:
      // assignedDriver:
      // nextPM:
      // isFull:
      // currentContents:
      // toBeLoadedWith:
      // isOutOfCommission:


    });

      this.title = 'Add Trailer'
      if (this.id) {
        // edit mode
        this.title = 'Edit Trailer';
        this.loading = true;
        this.trailerService.getTrailerById(this.id)
        .pipe(first())
        .subscribe(x => {
          this.form.patchValue(x);
          this.loading = false;
        });
      }
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.submitting = true;
    this.saveTrailer()
      .pipe(first())
      .subscribe({
        next: () => {
          // this.alertService.success('Employee saved', { keepAfterRouteChange: true });
          console.log('Trailer Saved')
          this.router.navigateByUrl('/trailers/inventory');
        },
        error: error => {
          // this.alertService.error(error);
          this.submitting = false;
        }
      })
  }

  private saveTrailer() {
    // create or update Employee based on id param
    return this.id
      ? this.trailerService.updateTrailer(this.id!, this.form.value)
      : this.trailerService.addNewTrailer(this.form.value);

  }

}

