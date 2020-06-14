import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PactivityComponent } from './pactivity/pactivity.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PactivityComponent],
  imports: [
  
  CommonModule, RouterModule,FormsModule
  ]
})
export class ActivityModule { }
