import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SeccionService extends BaseService {

  // apiURL = 'http://127.0.0.1:8000/api/comercio/local/'
  apiURL = 'http://localhost/api/comercio/seccion/'


}
