import { element } from 'protractor';
import { PipeTransform, Pipe } from '@angular/core';
import { Professionmodal } from './prof.model';


@Pipe({
    name: 'profFilter'
})

export class ProfFilterPipe implements PipeTransform {

    transform(lcomments: Professionmodal[], searchdata: string): Professionmodal[] {

        if (!lcomments || !searchdata) {
            return lcomments;
        }
        // tslint:disable-next-line:no-shadowed-variable
        return lcomments.filter(element =>
            element.profession.toLowerCase().indexOf(searchdata.toLowerCase()) !== -1);

    }

}
