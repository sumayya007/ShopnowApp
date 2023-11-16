import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AdminDashboardComponent } from './components/pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminManageUsersComponent } from './components/pages/admin/admin-manage-users/admin-manage-users.component';
import { AdminAddProductComponent } from './components/pages/admin/admin-add-product/admin-add-product.component';
import { AdminManageProductsComponent } from './components/pages/admin/admin-manage-products/admin-manage-products.component';
import { AdminAddCategoryComponent } from './components/pages/admin/admin-add-category/admin-add-category.component';
import { AdminManageCategoriesComponent } from './components/pages/admin/admin-manage-categories/admin-manage-categories.component';
import { AccountSettingsComponent } from './components/pages/admin/account-settings/account-settings.component';
import { EditAccountSettingsComponent } from './components/pages/admin/edit-account-settings/edit-account-settings.component';
import { ViewProductComponent } from './components/pages/view-product/view-product.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { OrderPageComponent } from './components/pages/order-page/order-page.component';
import { EditAddressComponent } from './components/pages/edit-address/edit-address.component';
import { authGuard } from './services/auth.guard';
import { roleGuard } from './services/role.guard';
import { EditAdminManageUsersComponent } from './components/pages/admin/edit-admin-manage-users/edit-admin-manage-users.component';
import { EditAdminManageProductsComponent } from './components/pages/admin/edit-admin-manage-products/edit-admin-manage-products.component';
import { EditAdminManageCategoriesComponent } from './components/pages/admin/edit-admin-manage-categories/edit-admin-manage-categories.component';


const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'home-page',component:HomePageComponent},
  {path:'login-page',component:LoginPageComponent},
  {path:'register-page',component:RegisterPageComponent},
  {path:'about-page',component:AboutPageComponent},
  {path:'cart-page',component:CartPageComponent,canActivate:[authGuard]},
  {path:'product-page',component:ProductPageComponent,canActivate:[authGuard]},
  {path:'dashboard',component:DashboardComponent,canActivate:[authGuard]},
  {path:'admin-dashboard',component:AdminDashboardComponent,canActivate:[roleGuard]},
  {path:'admin-manage-users',component:AdminManageUsersComponent,canActivate:[roleGuard]},
  {path:'edit-admin-manage-users',component:EditAdminManageUsersComponent,canActivate:[roleGuard]},
  {path:'edit-admin-manage-products',component:EditAdminManageProductsComponent,canActivate:[roleGuard]},
  {path:'edit-admin-manage-categories',component:EditAdminManageCategoriesComponent,canActivate:[roleGuard]},
  {path:'admin-add-product',component:AdminAddProductComponent,canActivate:[roleGuard]},
  {path:'admin-manage-products',component:AdminManageProductsComponent,canActivate:[roleGuard]},
  {path:'admin-add-category',component:AdminAddCategoryComponent,canActivate:[roleGuard]},
  {path:'admin-manage-categories',component:AdminManageCategoriesComponent,canActivate:[roleGuard]},
  {path:'account-settings',component:AccountSettingsComponent,canActivate:[roleGuard]},
  {path:'edit-account-details',component:EditAccountSettingsComponent,canActivate:[roleGuard]},
  {path:'view-product',component:ViewProductComponent,canActivate:[authGuard]},
  {path:'checkout-page',component:CheckoutPageComponent,canActivate:[authGuard]},
  {path:'order-page',component:OrderPageComponent,canActivate:[authGuard]},
  {path:'editaddress',component:EditAddressComponent,canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
