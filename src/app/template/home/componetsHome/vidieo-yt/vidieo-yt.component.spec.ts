import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidieoYtComponent } from './vidieo-yt.component';

describe('VidieoYtComponent', () => {
  let component: VidieoYtComponent;
  let fixture: ComponentFixture<VidieoYtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VidieoYtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VidieoYtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
