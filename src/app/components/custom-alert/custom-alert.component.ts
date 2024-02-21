import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-custom-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-alert.component.html',
  styleUrl: './custom-alert.component.scss'
})
export class CustomAlertComponent implements OnInit {

  alert?: any;
  timeout?: number;
  constructor(private alertService: AlertService) {

  }
  ngOnInit(): void {
    this.alertService.getAlert().subscribe(alert => {
      this.alert = alert
      this.deleteAlert()
    })
  }

  deleteAlert() {

    if (this.timeout) {
      window.clearTimeout(this.timeout)
    }
    this.timeout = window.setTimeout(() => {
      this.alert = undefined;
    }, 2000)
  }
}
