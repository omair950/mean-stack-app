import { element } from 'protractor';
import { PipeTransform, Pipe } from '@angular/core';
import { Addressmodal } from './addrs.model';


@Pipe({
    name: 'addrsFilter'
})

export class AddrsFilterPipe implements PipeTransform {

    transform(lcomments: any[], searchdata: string): Addressmodal[] {

        if (!lcomments || !searchdata) {
            return lcomments;
        }
        // tslint:disable-next-line:no-shadowed-variable
        return lcomments.filter(element =>
            // tslint:disable-next-line:triple-equals
            element.std_Nic.toLowerCase().indexOf(searchdata.toLowerCase()) !== -1);

    }

}
