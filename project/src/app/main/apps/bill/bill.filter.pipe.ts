import { element } from 'protractor';
import { PipeTransform, Pipe } from '@angular/core';
import { Billmodal } from './bill.model';
// import { Collegemodal } from '../clg/clg.model';


@Pipe({
    name: 'billFilter'
})

export class BillFilterPipe implements PipeTransform {

    transform(lcomments: any, searchdata: string): any {

        if (!lcomments || !searchdata) {
            return lcomments;
        }
        // tslint:disable-next-line:no-shadowed-variable
        return lcomments.filter(element =>
            // element.bill_address.toLowerCase().indexOf(searchdata.toLowerCase()) !== -1);

            // tslint:disable-next-line:triple-equals
            // element.std_Nic == searchdata);
            element.std_Nic.toLowerCase().indexOf(searchdata.toLowerCase()) !== -1);

        // 4 == '4'   true
        // 4 === '4'  false
        // 4 === 4 true

    }

}
