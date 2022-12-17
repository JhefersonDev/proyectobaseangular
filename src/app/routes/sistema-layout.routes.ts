import { Routes } from '@angular/router';


export const SISTEMA_ROUTES: Routes = [

    {
        path: 'home',
        loadChildren: () => import('../modules/sistempage/home-page/home-page.module').then(m => m.HomePageModule)
    },
    {
        path: 'buscar',
        loadChildren: () => import('../modules/sistempage/search-page/search-page.module').then(m => m.SearchPageModule)
    },
    {
        path: 'perfil',
        loadChildren: () => import('../modules/sistempage/profile-page/profile-page.module').then(m => m.ProfilePageModule)
    },
    {
        path: 'error',
        loadChildren: () => import('../modules/errorpage/error-page/error-page.module').then(m => m.ErrorPageModule)
    }

];


