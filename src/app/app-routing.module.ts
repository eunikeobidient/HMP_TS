import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'transaksi',
    loadChildren: () => import('./transaksi/transaksi.module').then( m => m.TransaksiPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'detail-transaksi/:id',
    loadChildren: () => import('./detail-transaksi/detail-transaksi.module').then( m => m.DetailTransaksiPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'detail-produk/:id',
    loadChildren: () => import('./detail-produk/detail-produk.module').then( m => m.DetailProdukPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'list-produk',
    loadChildren: () => import('./list-produk/list-produk.module').then( m => m.ListProdukPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-produk/:id',
    loadChildren: () => import('./edit-produk/edit-produk.module').then( m => m.EditProdukPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tambah-produk',
    loadChildren: () => import('./tambah-produk/tambah-produk.module').then( m => m.TambahProdukPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'keranjang',
    loadChildren: () => import('./keranjang/keranjang.module').then( m => m.KeranjangPageModule),
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
