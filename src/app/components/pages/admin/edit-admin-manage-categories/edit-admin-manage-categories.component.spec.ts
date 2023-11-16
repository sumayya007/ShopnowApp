import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdminManageCategoriesComponent } from './edit-admin-manage-categories.component';

describe('EditAdminManageCategoriesComponent', () => {
  let component: EditAdminManageCategoriesComponent;
  let fixture: ComponentFixture<EditAdminManageCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAdminManageCategoriesComponent]
    });
    fixture = TestBed.createComponent(EditAdminManageCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
