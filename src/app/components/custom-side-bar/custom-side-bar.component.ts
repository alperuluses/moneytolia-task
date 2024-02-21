import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-custom-side-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './custom-side-bar.component.html',
  styleUrl: './custom-side-bar.component.scss'
})
export class CustomSideBarComponent {

}
