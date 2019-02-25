import { element } from 'protractor';
import { PipeTransform, Pipe } from '@angular/core';
import { Schlorshipmodal } from './sch.model';


@Pipe({
    name: 'schFilter'
})

export class SchFilterPipe implements PipeTransform {

    transform(lcomments: Schlorshipmodal[], searchdata: string): Schlorshipmodal[] {

        if (!lcomments || !searchdata) {
            return lcomments;
        }
        // tslint:disable-next-line:no-shadowed-variable
        return lcomments.filter(element =>
            element.sch_Name.toLowerCase().indexOf(searchdata.toLowerCase()) !== -1);

    }

}
