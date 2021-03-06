import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { SpinnerModule } from './widgets/spinner/spinner.module';
import { RoutingDemoComponent } from './routing-demo.component';

@NgModule({
  declarations: [RoutingDemoComponent],
  imports: [
    CommonModule,
    SharedModule,
    SpinnerModule.forRoot(),
    AdminModule,
    //MUST BE LAST
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [RoutingDemoComponent],
})
export class RoutingDemoModule {}
