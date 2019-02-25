import { element } from 'protractor';
import { PipeTransform, Pipe } from '@angular/core';
import { Subjectmodal } from './subj.model';


@Pipe({
    name: 'subjFilter'
})

export class SubjFilterPipe implements PipeTransform {

    transform(lcomments: any[], searchdata: string): any[] {

        if (!lcomments || !searchdata) {
            return lcomments;
        }
        // tslint:disable-next-line:no-shadowed-variable
        return lcomments.filter(element =>
            // tslint:disable-next-line:triple-equals
            element.subj_Group_department.toLowerCase().indexOf(searchdata.toLowerCase()) !== -1);

    }

}
