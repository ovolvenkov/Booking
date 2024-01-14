import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from "./ui/theme/layout/layout.component";
import { LayoutModule } from "./ui/theme/layout/layout.module";

const routes: Routes = [  {
  path: '',
  component: LayoutComponent,
  children: [
    // routes
  ],
},];

@NgModule({
  imports: [LayoutModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
