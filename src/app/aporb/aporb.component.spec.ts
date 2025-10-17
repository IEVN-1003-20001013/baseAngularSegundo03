import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AporbComponent } from './aporb.component';

describe('AporbComponent', () => {
  let component: AporbComponent;
  let fixture: ComponentFixture<AporbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AporbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AporbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
