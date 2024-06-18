import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortProfileCardComponent } from './short-profile-card.component';

describe('ShortProfileCardComponent', () => {
  let component: ShortProfileCardComponent;
  let fixture: ComponentFixture<ShortProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortProfileCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShortProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
