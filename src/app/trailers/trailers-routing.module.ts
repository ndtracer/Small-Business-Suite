import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { TrailerLayoutComponent } from './trailer-layout.component';
import { TrailerMenuComponent } from './trailer-menu.component';
import { TrailerAddEditComponent } from './trailer-add-edit.component';
import { TrailerInventoryComponent } from './trailer-inventory.component';
import { TrailerMaintenanceComponent } from './trailer-maintenance.component';




const routes: Routes = [
  {
    path: '', component: TrailerLayoutComponent, children: [
      { path: '', component: TrailerMenuComponent},
      { path: 'add', component: TrailerAddEditComponent},
      { path: 'edit/:id', component: TrailerAddEditComponent},
      { path: 'inventory', component: TrailerInventoryComponent},
      { path: 'maintenance', component: TrailerMaintenanceComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrailersRoutingModule {}
