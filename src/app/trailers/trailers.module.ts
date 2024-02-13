import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { TrailersRoutingModule } from "./trailers-routing.module";

import { TrailerLayoutComponent } from './trailer-layout.component';
import { TrailerMenuComponent } from './trailer-menu.component';
import { TrailerAddEditComponent } from './trailer-add-edit.component';
import { TrailerInventoryComponent } from './trailer-inventory.component';
import { TrailerMaintenanceComponent } from './trailer-maintenance.component';


@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, TrailersRoutingModule
  ],
  declarations: [TrailerLayoutComponent, TrailerInventoryComponent, TrailerAddEditComponent, TrailerMenuComponent, TrailerMaintenanceComponent
  ]
})
export class TrailersModule {}
