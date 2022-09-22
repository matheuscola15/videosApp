import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'circulo-de-fogo',
    loadChildren: () => import('./circulo-de-fogo/circulo-de-fogo.module').then( m => m.CirculoDeFogoPageModule)
  },  {
    path: 'gigantes-de-aco',
    loadChildren: () => import('./gigantes-de-aco/gigantes-de-aco.module').then( m => m.GigantesDeAcoPageModule)
  },
  {
    path: 'venom',
    loadChildren: () => import('./venom/venom.module').then( m => m.VenomPageModule)
  },
  {
    path: 'detona-ralph',
    loadChildren: () => import('./detona-ralph/detona-ralph.module').then( m => m.DetonaRalphPageModule)
  },
  {
    path: 'karate-kid',
    loadChildren: () => import('./karate-kid/karate-kid.module').then( m => m.KarateKidPageModule)
  },
  {
    path: 'um-lugar-silencioso',
    loadChildren: () => import('./um-lugar-silencioso/um-lugar-silencioso.module').then( m => m.UmLugarSilenciosoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
