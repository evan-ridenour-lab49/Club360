import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTreeComponent } from './detail-tree.component';

describe('DetailTreeComponent', () => {
  let component: DetailTreeComponent;
  let fixture: ComponentFixture<DetailTreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailTreeComponent]
    });
    fixture = TestBed.createComponent(DetailTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
