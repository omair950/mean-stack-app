import { element } from 'protractor';
import { PipeTransform, Pipe } from '@angular/core';
import { Studentmodal } from './std.model';


@Pipe({
    name: 'stdFilter'
})

export class StdFilterPipe implements PipeTransform {

    transform(lcomments: Studentmodal[], searchdata: string): Studentmodal[] {

        if (!lcomments || !searchdata) {
            return lcomments;
        }
        // tslint:disable-next-line:no-shadowed-variable
        return lcomments.filter(element =>
            // tslint:disable-next-line:triple-equals
            element.std_Nic.toLowerCase().indexOf(searchdata.toLowerCase()) !== -1);

    }

}
