import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStreamComponent } from './home-stream.component';

describe('HomeStreamComponent', () => {
  let component: HomeStreamComponent;
  let fixture: ComponentFixture<HomeStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeStreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
