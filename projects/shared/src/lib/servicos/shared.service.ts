import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class SharedService {

  abstract carregar(): Observable<any>

  constructor() { }
}
