import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertService } from '../../services/alert.service';
import { AlertTypes, Campain } from '../../types/types';

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
    let lastCampainID: string | null = localStorage.getItem("lastCampainID")
    let lastCampainIdNumber: number | string;
    if (lastCampainID) {
      lastCampainIdNumber = (+lastCampainID) + 1;
      lastCampainIdNumber = lastCampainIdNumber.toString();
      localStorage.setItem("lastCampainID", lastCampainIdNumber)
      return lastCampainIdNumber
    }
    else {
      lastCampainIdNumber = 0
      localStorage.setItem("lastCampainID", "0")
      return lastCampainIdNumber
    }
  }

  generateCampain(campain: Campain) {
    let campains = localStorage.getItem("campains")

    if (campains) {
      let newCampains = JSON.parse(campains)
      newCampains = JSON.stringify([campain, ...newCampains])
      localStorage.setItem("campains", newCampains)

      this.alertService.setAlert({
        type: AlertTypes.succes,
        text: 'Kampanya Başarıyla Kaydedildi'
      })
    } else {
      let initCampains: Campain[] | string = [campain];
      initCampains = JSON.stringify(initCampains)
      localStorage.setItem("campains", initCampains)
      this.alertService.setAlert({
        type: AlertTypes.succes,
        text: 'Kampanya Başarıyla Kaydedildi'
      })
    }
  }

  createCampain() {
    if (this.createCampainForm.valid) {

      let campain: Campain = {
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
