import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../../components/not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, children:[
    { path: 'creausuario', component: NotFoundComponent },
    { path: 'editausuario', component: NotFoundComponent },
    { path: 'pagos', component: NotFoundComponent },
    { path: 'pagos/:id', component: NotFoundComponent },
    { path: 'clases', component: NotFoundComponent },
    { path: 'perfil', component: NotFoundComponent },    
  ] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
