import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { ExperianceComponent } from './experiance/experiance.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ServiseComponent } from './servise/servise.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
{
  path:'about',component:AboutComponent
},
{
  path:'blog',component:BlogComponent
},
{
  path:'home',component: HomeComponent
},
{
  path:'education',component:EducationComponent
},
{
  path:'experiance',component: ExperianceComponent
},
{
  path:'contact',component:ContactComponent
},
{
  path:'skills',component:SkillsComponent
},
{
  path:'service',component:ServiseComponent
},
{
  path:'work',component:WorkComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
