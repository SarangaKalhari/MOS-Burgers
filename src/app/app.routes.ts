import { Routes } from '@angular/router';
import { BurgersComponent } from './pages/burgers/burgers.component';
import { SalesComponent } from './pages/sales/sales.component';

export const routes: Routes = [
    {
        path: "",
        component: BurgersComponent
    },
    {
        path: "sales",
        component: SalesComponent
    }
];
