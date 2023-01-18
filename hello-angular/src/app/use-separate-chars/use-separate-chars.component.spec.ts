import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseSeparateCharsComponent } from './use-separate-chars.component';

describe('UseSeparateCharsComponent', () => {
  let component: UseSeparateCharsComponent;
  let fixture: ComponentFixture<UseSeparateCharsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseSeparateCharsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseSeparateCharsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
