import { Component, computed, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-inc-dec',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  styleUrl: 'inc-dec.scss',
  templateUrl: 'inc-dec.html',
})
export class IncDecPercentage {
  percentage = model('10');
  value = model('1000');
  oper = model('inc');
  result = computed(() => {
    const per = parseFloat(this.percentage()) || 0;
    const val = parseFloat(this.value()) || 0;
    if (this.oper() === 'inc') {
      return val + val * (per / 100);
    }
    return val - val * (per / 100);
  });
}
