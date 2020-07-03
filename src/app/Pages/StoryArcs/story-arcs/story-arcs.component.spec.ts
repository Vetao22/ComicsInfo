import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryArcsComponent } from './story-arcs.component';

describe('StoryArcsComponent', () => {
  let component: StoryArcsComponent;
  let fixture: ComponentFixture<StoryArcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryArcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryArcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
