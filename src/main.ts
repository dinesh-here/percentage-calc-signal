import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Percentage } from './percentage/percentage';
import { IncDecPercentage } from './inc-dec-percentage/inc-dec-percentage';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Percentage, IncDecPercentage],
  template: `
  <div class="pad-10">
  <app-percentage></app-percentage>
  <app-inc-dec></app-inc-dec>
</div>
  `,
})
export class App {}

bootstrapApplication(App);
