import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path : 'counter',
        loadComponent: ()=>import('./features/counter/counter.component').then((c)=>c.CounterComponent)
    },
    {
        path : 'products',
        loadComponent: ()=>import('./features/shopping/products/products.component').then((c)=>c.ProductsComponent)
    },
    {
        path: 'cart',
        loadComponent: ()=>import('./features/shopping/cart/cart.component').then((c)=>c.CartComponent)
    }
];
