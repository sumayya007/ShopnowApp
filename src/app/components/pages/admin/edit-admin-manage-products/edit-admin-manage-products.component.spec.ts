import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdminManageProductsComponent } from './edit-admin-manage-products.component';

describe('EditAdminManageProductsComponent', () => {
  let component: EditAdminManageProductsComponent;
  let fixture: ComponentFixture<EditAdminManageProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAdminManageProductsComponent]
    });
    fixture = TestBed.createComponent(EditAdminManageProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
