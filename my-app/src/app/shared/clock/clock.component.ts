import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'my-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit, OnDestroy {
  now = new Date();

  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // private interval!: any;

  private interval!: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
