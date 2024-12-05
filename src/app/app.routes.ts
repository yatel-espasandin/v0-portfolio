import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProjectViewPageComponent } from './pages/project-view-page/project-view-page.component';

export const routes: Routes = [
    {
      path: '',
      component: MainPageComponent,
      children: [
        {
          path: 'about',
          component: AboutPageComponent
        },
        {
          path: 'projects',
          component: ProjectViewPageComponent,
        },
        {
          path: '',
          redirectTo: '',
          pathMatch: 'full'
        }
      ]
    }
]
/* LO QUE VAMOS A HACER ACA ES LAZYLOADING DE LAS SECCIONES (PROJECT CONTACT...ETC) */