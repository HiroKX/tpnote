import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionComponentComponent } from './edition-component.component';

describe('EditionComponentComponent', () => {
  let component: EditionComponentComponent;
  let fixture: ComponentFixture<EditionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditionComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
