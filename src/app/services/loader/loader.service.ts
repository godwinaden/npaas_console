import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loading: boolean = false;

  constructor() { }

  setLoading(status: boolean){
    this.loading = status;
  }

  getLoading(){
    return this.loading;
  }
}
