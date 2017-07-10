import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { EntityTypeComponent, AngularmService, entityType, Entity } from 'angularm';

@Component({
  selector: 'app-app-listing-table',
  templateUrl: './app-listing-table.component.html',
  styleUrls: ['./app-listing-table.component.css']
})
export class AppListingTableComponent extends EntityTypeComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private angularService: AngularmService) {
    super();
    this.activatedRoute.params.subscribe(params => {
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

  show(id: any){
    this.router.navigate([id.toString(), 'show'], {relativeTo: this.activatedRoute});
  }

  edit(id: any){
    this.router.navigate([id.toString(), 'edit']);
  }

  public destroy(id: any){
    this.angularService.delete(this.entityType.singular,id);
    this.entities = this.entities.filter((value, index, array)=>{
      if(value.key!=id){
        return value;
      }
    });
  }
  
  create(){
    this.router.navigate(['new'],{relativeTo: this.activatedRoute});
  }


}
