import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPagoComponent } from './add-pago/add-pago.component';
import { DashboardComponent } from './dashboard.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [{ path: '', component: DashboardComponent,
children:[
  {
    path:'add-pago',
    component: AddPagoComponent
  },
  {
    path: 'servicios',
    component: ServiciosComponent
  }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
