import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestDetails } from './latest-details';

describe('LatestDetails', () => {
  
  let component: LatestDetails;
  let fixture: ComponentFixture<LatestDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
