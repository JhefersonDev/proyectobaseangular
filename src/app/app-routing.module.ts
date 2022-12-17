import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SISTEMA_ROUTES } from './routes/sistema-layout.routes';
import { SistemaLayoutComponent } from './layout/sistema-layout/sistema-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full',
  },
  { path: '', 
  component: SistemaLayoutComponent, 
  children: SISTEMA_ROUTES },

  {
    path: '**',
    redirectTo: '/error'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
