import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'applications',
        title: 'Applications',
        translate: 'NAV.APPLICATIONS',
        type: 'group',
        icon: 'school',
        children: [

            {
                id: 'clg',
                title: 'College',
                translate: 'NAV.CLG',

                type: 'item',
                icon: 'arrow_forward',
                url: '/apps/clg/get'

            },
            {
                id: 'schlorship',
                title: 'Scholarship',
                translate: 'NAV.SCHLORSHIP',
                type: 'item',
                url: '/apps/schlorship/get',
                icon: 'arrow_forward',
                // children: [
                //     {
                //         id: 'add',
                //         title: 'sch-add',
                //         type: 'item',
                //         exactMatch: true
                //     },
                //     {
                //         id: 'get',
                //         title: 'sch-get',
                //         type: 'item',
                //         url: '/apps/schlorship/get',
                //         exactMatch: true
                //     },
                //     {
                //         id: 'edit/:sch_id',
                //         title: 'sch-edit',
                //         type: 'item',
                //         exactMatch: true
                //     },
                // ]
            },
            {
                id: 'profession',
                title: 'Profession',
                translate: 'NAV.PROFESSION',
                type: 'item',
                url: '/apps/profession/get',
                icon: 'arrow_forward',
                // children: [
                //     {
                //         id: 'add',
                //         title: 'prof-add',
                //         type: 'item',
                //         exactMatch: true
                //     },
                //     {
                //         id: 'get',
                //         title: 'prof-get',
                //         type: 'item',
                //         url: '/apps/profession/get',
                //         exactMatch: true
                //     },
                //     {
                //         id: 'edit/:pro_id',
                //         title: 'prof-edit',
                //         type: 'item',
                //         exactMatch: true
                //     },
                // ]
            },
            {
                id: 'student',
                title: 'Student',
                translate: 'NAV.STUDENT',
                type: 'item',
                url: '/apps/student/get',
                icon: 'arrow_forward',
                // children: [
                //     {
                //         id: 'add',
                //         title: 'std-add',
                //         type: 'item',
                //         exactMatch: true
                //     },
                //     {
                //         id: 'get',
                //         title: 'std-get',
                //         type: 'item',
                //         url: '/apps/student/get',
                //         exactMatch: true
                //     },
                //     {
                //         id: 'edit/:std_Nic',
                //         title: 'std-edit',
                //         type: 'item',
                //         exactMatch: true
                //     },
                // ]
            },
            {
                id: 'acadamic',
                title: 'Academic',
                translate: 'NAV.ACADAMIC',
                type: 'item',
                url: '/apps/acadamic/get',
                icon: 'arrow_forward',
                // children: [

                //     {
                //         id: 'get',
                //         title: 'acad-get',
                //         type: 'item',
                //         url: '/apps/acadamic/get',
                //         exactMatch: true
                //     },
                //     {
                //         id: 'edit/:acad_id',
                //         title: 'acad-edit',
                //         type: 'item',
                //         exactMatch: true
                //     },
                // ]
            },
            {
                id: 'bill',
                title: 'Bill',
                translate: 'NAV.BILL',
                type: 'item',
                url: '/apps/bill/get',
                icon: 'arrow_forward',
                // children: [

                //     {
                //         id: 'get',
                //         title: 'bill-get',
                //         type: 'item',
                //         url: '/apps/bill/get',
                //         exactMatch: true
                //     },
                //     {
                //         id: 'edit/:bill_id',
                //         title: 'bill-edit',
                //         type: 'item',
                //         exactMatch: true
                //     },
                // ]
            },
            {
                id: 'gaudian',
                title: 'Guardian',
                translate: 'NAV.GAUDIAN',
                type: 'item',
                url: '/apps/gaudian/get',
                icon: 'arrow_forward',
                // children: [

                //     {
                //         id: 'get',
                //         title: 'gaud-get',
                //         type: 'item',
                //         url: '/apps/gaudian/get',
                //         exactMatch: true
                //     },
                //     {
                //         id: 'edit/:gaud_id',
                //         title: 'gaud-edit',
                //         type: 'item',
                //         exactMatch: true
                //     },
                // ]
            },
            {
                id: 'subject',
                title: 'Subject',
                translate: 'NAV.SUBJECT',
                type: 'item',
                url: '/apps/subject/get',
                icon: 'arrow_forward',
                // children: [
                //     {
                //         id: 'add',
                //         title: 'subj-add',
                //         type: 'item',
                //         exactMatch: true
                //     },
                //     {
                //         id: 'get',
                //         title: 'subj-get',
                //         type: 'item',
                //         url: '/apps/subject/get',
                //         exactMatch: true
                //     },
                //     {
                //         id: 'edit/:sub_id',
                //         title: 'subj-edit',
                //         type: 'item',
                //         exactMatch: true
                //     },
                // ]
            },
            // {
            //     id: 'std.clg',
            //     title: 'Student & College ',
            //     translate: 'NAV.STDCLG',
            //     type: 'item',
            //     url: '/apps/std.clg/get',
            //     icon: 'today',
            // children: [

            //     {
            //         id: 'get',
            //         title: 'Std/Clg-get',
            //         type: 'item',
            //         url: '/apps/std.clg/get',
            //         exactMatch: true
            //     },
            //     {
            //         id: 'edit/:std_clg_id',
            //         title: 'stdclg-edit',
            //         type: 'item',
            //         exactMatch: true
            //     },
            // ]
            // },

            {
                id: 'application',
                title: 'Application',
                translate: 'NAV.APPLICATION',
                type: 'item',
                icon: 'arrow_forward',
                url: '/apps/application/get'
            },
            {
                id: 'address',
                title: 'Address',
                translate: 'NAV.ADDRESS',
                type: 'item',
                icon: 'arrow_forward',
                url: '/apps/address/get'
            }

        ]
    },
    {
        id: 'Access',
        title: 'Access',
        translate: 'NAV.ACCESS',
        type: 'group',
        icon: 'apps',
        children: [

            {
                id: 'access',
                title: 'Role',


                type: 'item',
                icon: 'group_add',
                url: '/apps/access/get'

            }]
    }
];
