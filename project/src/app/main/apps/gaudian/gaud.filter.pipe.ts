import { element } from 'protractor';
import { PipeTransform, Pipe } from '@angular/core';
import { gaudianmodal } from './gaud.model';


@Pipe({
    name: 'gaudFilter'
})

export class GaudFilterPipe implements PipeTransform {

    transform(lcomments: any[], searchdata: string): gaudianmodal[] {

        if (!lcomments || !searchdata) {
            return lcomments;
        }
        // tslint:disable-next-line:no-shadowed-variable
        return lcomments.filter(element =>
            // tslint:disable-next-line:triple-equals
            element.std_Nic.toLowerCase().indexOf(searchdata.toLowerCase()) !== -1);

    }

}
