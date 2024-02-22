import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal.service';
import { Campain } from '../../types/types';

@Component({
  selector: 'app-custom-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './custom-modal.component.html',
  styleUrl: './custom-modal.component.scss'
})
export class CustomModalComponent implements OnInit {

  isShow = false;
  modalData: Campain | undefined = undefined;

  updateCampainForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  })

  updateCampain() {
    if (this.modalData) {
      this.modalData.title = this.updateCampainForm.controls["title"].value;
      this.modalData.description = this.updateCampainForm.controls["description"].value;

      const storedCampains = localStorage.getItem("campains");


      if (storedCampains) {

        const campainsJson: Campain[] = JSON.parse(storedCampains);


        const updatedCampainsArray = campainsJson.map((campain: Campain) => {
          return campain.id === this.modalData?.id ? this.modalData : campain;
        });


        const updatedCampainsString = JSON.stringify(updatedCampainsArray);

        localStorage.setItem("campains", updatedCampainsString);
      }
    }
  }

  modalClose() {
    this.modalService.setModalStatus(false)
  }

  ngOnInit(): void {
    this.modalService.isModalShow$.subscribe(data => {
      this.isShow = data;
    })

    this.modalService.modalCampainData$.subscribe((campain: Campain | undefined) => {
      this.modalData = campain;

      if (this.modalData) {
        this.updateCampainForm.setValue({
          title: this.modalData?.title,
          description: this.modalData?.description
        })
      }



    })
  }
  constructor(private fb: FormBuilder, private modalService: ModalService) {

  }

}
