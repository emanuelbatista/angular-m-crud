import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EntityComponent, AngularmService } from "angularm";

@Component({
  selector: 'app-app-show-entity',
  templateUrl: './app-show-entity.component.html',
  styleUrls: ['./app-show-entity.component.css']
})
export class AppShowEntityComponent extends EntityComponent implements OnInit {

  constructor(
    private activated: ActivatedRoute,
    private angularmService: AngularmService
  ) {
    super();
    this.activated.params.subscribe(params => {
      this.angularmService.findEntityType(params['entity'])
        .then((entityType) => {
          this.angularmService.findUnique(entityType.singular, +params['id'])
            .then(entity => {
              this.entity = entity
            });
        });
    });
  }

  ngOnInit() {

  }

}
