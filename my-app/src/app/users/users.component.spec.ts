import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject } from 'rxjs';
import { User } from './user.model';
import { UserService } from './user.service';

import { UsersComponent } from './users.component';

describe('UsersComponent (with real http request)', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show users', async () => {
    await fixture.whenStable(); // quand tous les cb async sont exécutés
    fixture.detectChanges();

    const nativeElement: HTMLElement = fixture.nativeElement;
    expect(nativeElement.textContent).toContain('Leanne Graham');
  });
});

describe('UsersComponent (with fake UserService)', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        {
          provide: UserService,
          useValue: {
            addEvent: new Subject<User>(),
            getAll() {
              return of([{id: 1, name: 'Toto'}])
            }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show users', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    expect(nativeElement.textContent).toContain('Toto');
  });
});

describe('UsersComponent (with HttpClientTestingModule)', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show users', () => {
    const httpTestingController = TestBed.inject(HttpTestingController);

    httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users').flush([
      {id: 1, name: 'Titi'}
    ]);

    fixture.detectChanges();

    const nativeElement: HTMLElement = fixture.nativeElement;
    expect(nativeElement.textContent).toContain('Titi');

    httpTestingController.verify();
  });
});
