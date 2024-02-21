import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-create-campain',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-campain.component.html',
  styleUrl: './create-campain.component.scss'
})
export class CreateCampainComponent {
  createCampainForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  })


  setLastId() {
    let lastCampainID: any = localStorage.getItem("lastCampainID")
    let lastCampainIdNumber: any;
    if (lastCampainID) {
      lastCampainIdNumber = (+lastCampainID) + 1;
      localStorage.setItem("lastCampainID", lastCampainIdNumber)
      return lastCampainIdNumber
    }
    else {
      lastCampainIdNumber = 0
      localStorage.setItem("lastCampainID", "0")
      return lastCampainIdNumber
    }
  }

  generateCampain(campain: any) {
    let campains = localStorage.getItem("campains")

    if (campains) {
      let newCampains = JSON.parse(campains)
      newCampains = JSON.stringify([campain, ...newCampains])
      localStorage.setItem("campains", newCampains)

      this.alertService.setAlert({
        type: 'success',
        text: 'Kampanya Başarıyla Kaydedildi'
      })
    } else {
      let initCampains: any = [campain];
      initCampains = JSON.stringify(initCampains)
      localStorage.setItem("campains", initCampains)
      this.alertService.setAlert({
        type: 'success',
        text: 'Kampanya Başarıyla Kaydedildi'
      })
    }
  }

  createCampain() {
    if (this.createCampainForm.valid) {

      let campain = {
        id: this.setLastId(),
        title: this.createCampainForm.get("title")?.value,
        description: this.createCampainForm.get("description")?.value,
        date: new Date().toLocaleDateString(),
        point: 0
      }

      this.generateCampain(campain)
    }
  }

  constructor(private fb: FormBuilder, private alertService: AlertService) {

  }
}
