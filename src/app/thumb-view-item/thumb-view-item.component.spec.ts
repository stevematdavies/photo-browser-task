import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbViewItemComponent } from './thumb-view-item.component';

describe('ThumbViewItemComponent', () => {
  let component: ThumbViewItemComponent;
  let fixture: ComponentFixture<ThumbViewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbViewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
