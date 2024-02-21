import { Component } from '@angular/core';
import { CustomHeaderComponent } from '../custom-header/custom-header.component';
import { CustomSideBarComponent } from '../custom-side-bar/custom-side-bar.component';
import { RouterOutlet } from '@angular/router';
import { CustomAlertComponent } from '../custom-alert/custom-alert.component';
import { CustomModalComponent } from '../custom-modal/custom-modal.component';

@Component({
  selector: 'app-custom-dashboard',
  standalone: true,
  imports: [CustomHeaderComponent, CustomSideBarComponent, CustomAlertComponent, RouterOutlet, CustomModalComponent],
  templateUrl: './custom-dashboard.component.html',
  styleUrl: './custom-dashboard.component.scss'
})
export class CustomDashboardComponent {

}
