import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdminManageUsersComponent } from './edit-admin-manage-users.component';

describe('EditAdminManageUsersComponent', () => {
  let component: EditAdminManageUsersComponent;
  let fixture: ComponentFixture<EditAdminManageUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAdminManageUsersComponent]
    });
    fixture = TestBed.createComponent(EditAdminManageUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
