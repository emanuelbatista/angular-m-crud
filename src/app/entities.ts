import { LinePropertyComponent } from './app-show-entity/line-property/line-property.component';
import { entityType, memoryDAO, AngularmService } from 'angularm';

export let describeDomain = (angularm: AngularmService) => {
  angularm.setupDomain(
    memoryDAO(entityType('student', 'students', { id: 'code' } )
        .propertyType('code', 'number')
        .propertyType('name', 'string')),
    memoryDAO(entityType('client', 'clients', { id: 'id' } )
        .propertyType('id', 'number')
        .propertyType('name', 'string')),
    memoryDAO(entityType('carro','carros', {id: 'id'})
        .propertyType('id','number')
        .propertyType('name', 'string')
        .propertyType('model', 'string'))
        
    );
    //insert data
    angularm.create('student', {code: 1, name: 'Emanuel' });

    angularm.dpr('show_line', LinePropertyComponent);
};