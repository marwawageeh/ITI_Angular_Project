import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestCategory } from './latest-category';

describe('LatestCategory', () => {
  let component: LatestCategory;
  let fixture: ComponentFixture<LatestCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
