import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEndSerializerComponent } from './back-end-serializer.component';

describe('BackEndSerializerComponent', () => {
  let component: BackEndSerializerComponent;
  let fixture: ComponentFixture<BackEndSerializerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackEndSerializerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackEndSerializerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
