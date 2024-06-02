import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumFotoComponent } from './album-foto.component';

describe('AlbumFotoComponent', () => {
  let component: AlbumFotoComponent;
  let fixture: ComponentFixture<AlbumFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumFotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
