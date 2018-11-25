import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
