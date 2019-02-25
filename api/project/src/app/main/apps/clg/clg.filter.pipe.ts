import { element } from 'protractor';
import { PipeTransform, Pipe } from '@angular/core';
import { Collegemodal } from './clg.model';


@Pipe({
    name: 'clgFilter'
})

export class ClgFilterPipe implements PipeTransform {

    transform(lcomments: Collegemodal[], searchdata: string): Collegemodal[] {

        if (!lcomments || !searchdata) {
            return lcomments;
        }
        // tslint:disable-next-line:no-shadowed-variable
        return lcomments.filter(element =>
            element.clg_Name.toLowerCase().indexOf(searchdata.toLowerCase()) !== -1);

    }

}
