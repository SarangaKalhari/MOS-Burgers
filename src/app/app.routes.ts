import { Routes } from '@angular/router';
import { BurgersComponent } from './pages/burgers/burgers.component';
import { SalesComponent } from './pages/sales/sales.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { OrdersComponent } from './pages/orders/orders.component';

export const routes: Routes = [
    {
        path: "",
        component: BurgersComponent
    },
    {
        path: "sales",
        component: SalesComponent
    },
    {
        path: "search",
        component: SearchPageComponent
    },
    {
        path: "orders",
        component: OrdersComponent
    }
];
