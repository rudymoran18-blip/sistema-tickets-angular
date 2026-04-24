import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisTicektsComponent } from './mis-ticekts-component';

describe('MisTicektsComponent', () => {
  let component: MisTicektsComponent;
  let fixture: ComponentFixture<MisTicektsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MisTicektsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisTicektsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
