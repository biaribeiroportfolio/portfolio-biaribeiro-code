import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtBrComponent } from './pt-br.component';

describe('PtBrComponent', () => {
  let component: PtBrComponent;
  let fixture: ComponentFixture<PtBrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtBrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtBrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
