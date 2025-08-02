import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSHarpComponent } from './csharp.component';

describe('CSHarpComponent', () => {
  let component: CSHarpComponent;
  let fixture: ComponentFixture<CSHarpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSHarpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSHarpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
