import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-custom-campains',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-campains.component.html',
  styleUrl: './custom-campains.component.scss'
})
export class CustomCampainsComponent implements OnInit {
  campains: any;

  getCampains() {
    this.campains = localStorage.getItem("campains");
    if (this.campains) {
      this.campains = JSON.parse(this.campains);
    }
  }

  updateCampains(campains: any) {
    let updateCampains = JSON.stringify(campains)
    localStorage.setItem("campains", updateCampains)
  }

  deleteCampain(id: number) {

    if (this.campains) {
      this.campains = this.campains.filter((campain: any) => {
        return campain.id != id
      })

      this.updateCampains(this.campains)
    }
  }

  updatePoint(id: number, updateType: boolean) {
    if (this.campains) {
      this.campains.map((campain: any) => {
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

  showModal(campain: any) {
    this.modalService.setModalStatus(true)
    this.modalService.setModalCampainData(campain)
  }

  constructor(private modalService: ModalService) {

  }
}
