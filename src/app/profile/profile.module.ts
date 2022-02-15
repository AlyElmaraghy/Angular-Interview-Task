import { ProfileComponent } from './profile.component';

import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CustomFormsModule } from 'ngx-custom-validators';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    NgbModule,
    CustomFormsModule,
  ]
 
})
export class ProfileModule { }
