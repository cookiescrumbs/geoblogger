import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishingPhotoComponent } from './fishing-photo.component';

describe('FishingPhotoComponent', () => {
  let component: FishingPhotoComponent;
  let fixture: ComponentFixture<FishingPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishingPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishingPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
