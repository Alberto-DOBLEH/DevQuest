import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landpage } from './landpage';

describe('Landpage', () => {
  let component: Landpage;
  let fixture: ComponentFixture<Landpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
