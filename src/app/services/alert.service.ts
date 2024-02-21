import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alert$ = new Subject<any>

  setAlert(alert: any) {
    this.alert$.next(alert)
  }

  getAlert() {
    return this.alert$.asObservable();
  }
}
