import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PstaffComponent } from "./pstaff/pstaff.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [PstaffComponent],
  imports: [CommonModule, RouterModule, HttpClientModule, FormsModule]
})
export class StaffModule {}
