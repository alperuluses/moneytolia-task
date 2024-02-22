import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alert$ = new Subject<Alert>

  setAlert(alert: Alert) {
    this.alert$.next(alert)
  }

  getAlert() {
    return this.alert$.asObservable();
  }
}
