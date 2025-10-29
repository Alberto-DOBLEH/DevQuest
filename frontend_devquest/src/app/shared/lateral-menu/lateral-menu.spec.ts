import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralMenu } from './lateral-menu';

describe('LateralMenu', () => {
  let component: LateralMenu;
  let fixture: ComponentFixture<LateralMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LateralMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LateralMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
