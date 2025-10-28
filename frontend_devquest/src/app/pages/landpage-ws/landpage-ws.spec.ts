import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandpageWs } from './landpage-ws';

describe('LandpageWs', () => {
  let component: LandpageWs;
  let fixture: ComponentFixture<LandpageWs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandpageWs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandpageWs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
