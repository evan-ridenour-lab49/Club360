import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRowComponent } from './detail-row.component';

describe('DetailRowComponent', () => {
  let component: DetailRowComponent;
  let fixture: ComponentFixture<DetailRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailRowComponent]
    });
    fixture = TestBed.createComponent(DetailRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
