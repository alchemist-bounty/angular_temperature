import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter implements OnInit {
  Celsius: string = '';
  Fahrenheit: string = '';
  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
  }

  celsiusChange(value: any) {
    this.Celsius = value;
    this.Fahrenheit = (parseFloat(this.Celsius) * 9 / 5 +32).toFixed(1);
  }

  fahrenheitChange(value: any) {
    this.Fahrenheit = value;
    this.Celsius = ((parseFloat(this.Fahrenheit)-32) * 5 / 9).toFixed(1);
  }

}