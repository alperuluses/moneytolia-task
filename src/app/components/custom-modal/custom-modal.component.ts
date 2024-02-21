import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-custom-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './custom-modal.component.html',
  styleUrl: './custom-modal.component.scss'
})
export class CustomModalComponent implements OnInit {

  isShow = false;
  modalData: any = null;

  updateCampainForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  })
  updateCampain() {
    this.modalData.title = this.updateCampainForm.controls["title"].value
    this.modalData.description = this.updateCampainForm.controls["description"].value
    let campains: any = localStorage.getItem("campains")
    campains = JSON.parse(campains)
    campains = campains.map((campain: any) => {
      if (campain.id == this.modalData.id) {
        return campain = this.modalData
      }

      return campain
    })

    localStorage.setItem("campains", campains)

  }

  modalClose() {
    this.modalService.setModalStatus(false)
  }

  ngOnInit(): void {
    this.modalService.isModalShow$.subscribe(data => {
      this.isShow = data;
    })

    this.modalService.modalCampainData$.subscribe(campain => {
      this.modalData = campain;
      this.updateCampainForm.setValue({
        title: this.modalData.title,
        description: this.modalData.description
      })
    })
  }
  constructor(private fb: FormBuilder, private modalService: ModalService) {

  }

}
