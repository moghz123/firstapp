import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { ServiseComponent } from './servise/servise.component';
import { EducationComponent } from './education/education.component';
import { ExperianceComponent } from './experiance/experiance.component';
import { WorkComponent } from './work/work.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AboutComponent,
    SkillsComponent,
    HomeComponent,
    ServiseComponent,
    EducationComponent,
    ExperianceComponent,
    WorkComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
