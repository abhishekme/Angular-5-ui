﻿import { PipeTransform, Pipe, Injectable } from '@angular/core';
//import { IUser } from '../Model/user';

@Pipe({
    name: 'userFilter'
})

@Injectable()
export class UserFilterPipe implements PipeTransform {
    transform(){
        
    }
    /*transform(value: IUser[], filter: string): IUser[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((app: IUser) =>
            app.FirstName != null && app.FirstName.toLocaleLowerCase().indexOf(filter) != -1
            || app.LastName != null && app.LastName.toLocaleLowerCase().indexOf(filter) != -1
            || app.Gender != null && app.Gender.toLocaleLowerCase().indexOf(filter) != -1
            || app.DOB != null && app.DOB.indexOf(filter) != -1
        ) : value;
    }*/

}