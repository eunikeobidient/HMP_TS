import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
  standalone: false,
})
export class SettingPage implements OnInit {

  isDarkMode: boolean = false;

  constructor() { }

  ngOnInit() {
    this.isDarkMode = document.body.classList.contains('dark');
  }

  toggleTema(event: any){
    this.isDarkMode = event.detail.checked;

    if(this.isDarkMode){
      document.body.classList.add('dark');
    } else{
      document.body.classList.remove('dark');
    }
  }

}
