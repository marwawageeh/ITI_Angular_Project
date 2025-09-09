import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auther } from './auther';

describe('Auther', () => {
  let component: Auther;
  let fixture: ComponentFixture<Auther>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Auther]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Auther);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
