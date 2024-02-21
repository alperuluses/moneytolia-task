import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  isModalShow$ = new BehaviorSubject(false)
  modalCampainData$ = new BehaviorSubject(null);

  setModalStatus(isWillShow: boolean) {
    this.isModalShow$.next(isWillShow)
  }

  setModalCampainData(campain: any) {
    this.modalCampainData$.next(campain)
  }

  constructor() {

  }


}
