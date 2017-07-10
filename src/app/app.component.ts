import { Component } from '@angular/core';
import { EntityTypesComponent, AngularmService } from 'angularm';
import { describeDomain } from './entities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends EntityTypesComponent {
  constructor(angularm: AngularmService) {
    super();
    describeDomain(angularm);
    this.entityTypes = angularm.listEntityTypes();
  }
}
