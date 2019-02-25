import { element } from 'protractor';
import { PipeTransform, Pipe } from '@angular/core';
import { Acadamicmodal } from './acad.model';


@Pipe({
    name: 'acadFilter'
})

export class AcadFilterPipe implements PipeTransform {

    transform(lcomments: Acadamicmodal[], searchdata: string): Acadamicmodal[] {

        if (!lcomments || !searchdata) {
            return lcomments;
        }
        // tslint:disable-next-line:no-shadowed-variable
        return lcomments.filter(element =>
            // tslint:disable-next-line:triple-equals
            // element.std_Nic == searchdata);
            element.std_Nic.toLowerCase().indexOf(searchdata.toLowerCase()) !== -1);

    }

}
