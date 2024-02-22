import { CommonModule } from '@angular/common';
import { Component, DoCheck, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Campain } from '../../types/types';

@Component({
  selector: 'app-custom-campains',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-campains.component.html',
  styleUrl: './custom-campains.component.scss'
})
export class CustomCampainsComponent implements OnInit {
  campains: Campain[] = [];

  getCampains() {
    let campains = localStorage.getItem("campains");
    if (campains) {
      this.campains = JSON.parse(campains);
    }
  }

  updateCampains(campains: Campain[]) {
    let updateCampains = JSON.stringify(campains)
    localStorage.setItem("campains", updateCampains)
  }

  deleteCampain(id: number | string) {

    if (this.campains) {
      this.campains = this.campains.filter((campain: Campain) => {
        return campain.id != id
      })

      this.updateCampains(this.campains)
    }
  }

  updatePoint(id: number | string, updateType: boolean) {
    if (this.campains) {
      this.campains.map((campain: Campain) => {
        if (campain.id == id) {
          updateType ? campain.point++ : campain.point--
          this.updateCampains(this.campains)
        }
        return campain
      })
    }

  }

  ngOnInit(): void {
    this.getCampains()
  }

  showModal(campain: Campain) {
    this.modalService.setModalStatus(true)
    this.modalService.setModalCampainData(campain)
  }

  constructor(private modalService: ModalService) {
  }
}
