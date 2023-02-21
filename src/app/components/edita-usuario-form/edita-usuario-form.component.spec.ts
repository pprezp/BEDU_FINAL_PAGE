import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaUsuarioFormComponent } from './edita-usuario-form.component';

describe('EditaUsuarioFormComponent', () => {
  let component: EditaUsuarioFormComponent;
  let fixture: ComponentFixture<EditaUsuarioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaUsuarioFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaUsuarioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
