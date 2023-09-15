import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PtBrComponent } from './pt-br/pt-br.component';
import { EnUsComponent } from './en-us/en-us.component';

const routes: Routes = [
  { path: 'pt-br', component: PtBrComponent },
  { path: 'en-us', component: EnUsComponent },
  { path: '**', redirectTo: '/pt-br' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
