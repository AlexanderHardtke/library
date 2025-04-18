import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireAuthenticationComponent } from './angular-fire-authentication.component';

describe('AngularFireAuthenticationComponent', () => {
  let component: AngularFireAuthenticationComponent;
  let fixture: ComponentFixture<AngularFireAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularFireAuthenticationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularFireAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
