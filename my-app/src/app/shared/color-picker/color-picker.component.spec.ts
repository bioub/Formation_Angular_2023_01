import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerComponent } from './color-picker.component';

describe('ColorPickerComponent', () => {
  let component: ColorPickerComponent;
  let fixture: ComponentFixture<ColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display Input selected', () => {
    component.selected = 'red';
    fixture.detectChanges(); // lance la détection de changement manuellement

    const nativeElement: HTMLElement = fixture.nativeElement;
    expect(nativeElement.textContent).toContain('Selected color : red');
  });

  it('should display Output selectedChange', () => {
    component.selected = 'red';
    component.colors = ['red', 'green', 'blue'];
    fixture.detectChanges(); // lance la détection de changement manuellement

    const nativeElement: HTMLElement = fixture.nativeElement;
    const blueEl = nativeElement.querySelector('[data-color="blue"]');

    const spy = jasmine.createSpy();
    component.selectedChange.subscribe(spy);

    // déclenche l'événement click (API DOM)
    blueEl?.dispatchEvent(new MouseEvent('click'));

    expect(spy).toHaveBeenCalledWith('blue');
  });
});
