import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccountSettingsComponent } from './edit-account-settings.component';

describe('EditAccountSettingsComponent', () => {
  let component: EditAccountSettingsComponent;
  let fixture: ComponentFixture<EditAccountSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAccountSettingsComponent]
    });
    fixture = TestBed.createComponent(EditAccountSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
