import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryArcsDetailsComponent } from './story-arcs-details.component';

describe('StoryArcsDetailsComponent', () => {
  let component: StoryArcsDetailsComponent;
  let fixture: ComponentFixture<StoryArcsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryArcsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryArcsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
