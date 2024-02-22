import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Campain } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  isModalShow$: BehaviorSubject<boolean> = new BehaviorSubject(false)
  modalCampainData$: BehaviorSubject<Campain | undefined> = new BehaviorSubject<Campain | undefined>(undefined);

  setModalStatus(isWillShow: boolean) {
    this.isModalShow$.next(isWillShow)
  }

  setModalCampainData(campain: Campain) {
    this.modalCampainData$.next(campain)
  }

  constructor() {

  }


}
