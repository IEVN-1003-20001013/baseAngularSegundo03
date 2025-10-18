import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemComponent } from './tem.component';

describe('TemComponent', () => {
  let component: TemComponent;
  let fixture: ComponentFixture<TemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
