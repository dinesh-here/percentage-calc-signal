import { Component, computed, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-percentage',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  styleUrl: 'percentage.scss',
  templateUrl: 'percentage.html',
})
export class Percentage {
  percentage = model('10');
  value = model('1000');
  result = computed(() => {
    const per = parseFloat(this.percentage()) || 0;
    const val = parseFloat(this.value()) || 0;
    return ((per / 100) * val).toFixed(2);
  });
}
