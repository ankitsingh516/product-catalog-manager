import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineBannerComponent } from './inline-banner.component';

describe('InlineBannerComponent', () => {
  let component: InlineBannerComponent;
  let fixture: ComponentFixture<InlineBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
