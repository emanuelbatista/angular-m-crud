import { ActivatedRoute, Router } from '@angular/router';
import { EntityTypeComponent, entityType, AngularmService } from 'angularm';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-app-form-component',
  templateUrl: './app-form-component.component.html',
  styleUrls: ['./app-form-component.component.css']
})
export class AppFormComponentComponent extends EntityTypeComponent implements OnInit {

  public myForm: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private angularService: AngularmService
    ) {
    super();
    this.activatedRoute.params.subscribe(params => {
      this.angularService.findEntityType(params['entity'])
        .then((entityType) => {
          this.entityType = entityType;
        });
    });
  }

  ngOnInit() {
    // this.entityType.properties.
  }

}
