import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutMusicComponent } from './ajout-music.component';

describe('AjoutMusicComponent', () => {
  let component: AjoutMusicComponent;
  let fixture: ComponentFixture<AjoutMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutMusicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
