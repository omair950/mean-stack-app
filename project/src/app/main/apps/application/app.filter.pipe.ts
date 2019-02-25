import { element } from 'protractor';
import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
    name: 'appFilter'
})

export class AppFilterPipe implements PipeTransform {

    transform(lcomments: any[], searchdata: string): any[] {

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
