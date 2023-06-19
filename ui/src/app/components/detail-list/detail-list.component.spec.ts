import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailListComponent } from './detail-list.component';

describe('DetailListComponent', () => {
  let component: DetailListComponent;
  let fixture: ComponentFixture<DetailListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailListComponent]
    });
    fixture = TestBed.createComponent(DetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
