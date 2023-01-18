import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { UptimeComponent } from './uptime/uptime.component';
import { ClockComponent } from './clock/clock.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CounterComponent } from './counter/counter.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MultiStateButtonComponent } from './multi-state-button/multi-state-button.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    UptimeComponent,
    ClockComponent,
    UserFormComponent,
    CounterComponent,
    HelloWorldComponent,
    MultiStateButtonComponent,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
