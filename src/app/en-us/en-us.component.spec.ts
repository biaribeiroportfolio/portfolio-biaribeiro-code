import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnUsComponent } from './en-us.component';

describe('EnUsComponent', () => {
  let component: EnUsComponent;
  let fixture: ComponentFixture<EnUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
