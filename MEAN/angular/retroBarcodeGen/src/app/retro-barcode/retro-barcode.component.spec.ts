import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroBarcodeComponent } from './retro-barcode.component';

describe('RetroBarcodeComponent', () => {
  let component: RetroBarcodeComponent;
  let fixture: ComponentFixture<RetroBarcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetroBarcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
