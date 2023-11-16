import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { FormsModule } from '@angular/forms';
import { AuthServiceService } from './services/auth-service.service';
import { UserServiceService } from './services/user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AdminDashboardComponent } from './components/pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './components/partials/admin-header/admin-header.component';
import { AdminManageUsersComponent } from './components/pages/admin/admin-manage-users/admin-manage-users.component';
import { AdminServiceService } from './services/admin-service.service';
import { AdminAddProductComponent } from './components/pages/admin/admin-add-product/admin-add-product.component';
import { AdminManageProductsComponent } from './components/pages/admin/admin-manage-products/admin-manage-products.component';
import { AdminAddCategoryComponent } from './components/pages/admin/admin-add-category/admin-add-category.component';
import { AdminManageCategoriesComponent } from './components/pages/admin/admin-manage-categories/admin-manage-categories.component';
import { AccountSettingsComponent } from './components/pages/admin/account-settings/account-settings.component';
import { EditAccountSettingsComponent } from './components/pages/admin/edit-account-settings/edit-account-settings.component';
import { StarRatingComponent } from './components/partials/star-rating/star-rating.component';
import { ViewProductComponent } from './components/pages/view-product/view-product.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { OrderPageComponent } from './components/pages/order-page/order-page.component';
import { MapComponent } from './components/partials/map/map.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { EditAddressComponent } from './components/pages/edit-address/edit-address.component';


import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationComponent } from './components/partials/pagination/pagination.component';
import { EditAdminManageUsersComponent } from './components/pages/admin/edit-admin-manage-users/edit-admin-manage-users.component';
import { EditAdminManageProductsComponent } from './components/pages/admin/edit-admin-manage-products/edit-admin-manage-products.component';
import { EditAdminManageCategoriesComponent } from './components/pages/admin/edit-admin-manage-categories/edit-admin-manage-categories.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ProductPageComponent,
    CartPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    AboutPageComponent,
    DashboardComponent,
    AdminDashboardComponent,
    AdminHeaderComponent,
    AdminManageUsersComponent,
    AdminAddProductComponent,
    AdminManageProductsComponent,
    AdminAddCategoryComponent,
    AdminManageCategoriesComponent,
    AccountSettingsComponent,
    EditAccountSettingsComponent,
    StarRatingComponent,
    ViewProductComponent,
    CheckoutPageComponent,
    OrderPageComponent,
    MapComponent,
    FooterComponent,
    NotFoundComponent,
    EditAddressComponent,
    PaginationComponent,
    EditAdminManageUsersComponent,
    EditAdminManageProductsComponent,
    EditAdminManageCategoriesComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
    

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ],
  providers: [AuthServiceService,UserServiceService,AdminServiceService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
