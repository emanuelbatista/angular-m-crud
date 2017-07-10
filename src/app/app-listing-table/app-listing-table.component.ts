import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { EntityTypeComponent, AngularmService, entityType } from 'angularm';

@Component({
  selector: 'app-app-listing-table',
  templateUrl: './app-listing-table.component.html',
  styleUrls: ['./app-listing-table.component.css']
})
export class AppListingTableComponent extends EntityTypeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private angularService: AngularmService) {
    super();
    this.route.params.subscribe(params => {
      this.angularService.findEntityType(params['entity'])
        .then((entityType) => {
          this.entityType = entityType;
          return entityType;
        }).then(entityType=>{
          this.angularService.listAll(entityType.singular)
            .then(entities=>{
              this.entities = entities;
            })
        });
    });
  }

  ngOnInit() {
    
  }

}
