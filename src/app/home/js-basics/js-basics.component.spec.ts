import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsBasicsComponent } from './js-basics.component';

describe('JsBasicsComponent', () => {
  let component: JsBasicsComponent;
  let fixture: ComponentFixture<JsBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsBasicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
