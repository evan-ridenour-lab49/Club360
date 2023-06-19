import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailObjectComponent } from './detail-object.component';

describe('DetailObjectComponent', () => {
  let component: DetailObjectComponent;
  let fixture: ComponentFixture<DetailObjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailObjectComponent]
    });
    fixture = TestBed.createComponent(DetailObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
