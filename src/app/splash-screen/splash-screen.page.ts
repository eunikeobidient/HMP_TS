import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
  standalone: false,
})
export class SplashScreenPage implements OnInit {

  constructor(private router: Router, private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.jalankanAnimasi();
  }
  
  async jalankanAnimasi() {
    const bumperScreen = document.querySelector('#bumperScreen') as HTMLElement;
    const bumperLogo = document.querySelector('#bumperLogo') as HTMLElement;
    const bumperTitle = document.querySelector('#bumperTitle') as HTMLElement;

    const bgAnim = this.animationCtrl.create()
      .addElement(bumperScreen)
      .duration(300)
      .delay(500)
      .keyframes([
        { offset: 0, background: 'var(--ion-color-primary)' },
        { offset: 1, background: '#ffffff' }
      ]);

    const logoAnim = this.animationCtrl.create()
      .addElement(bumperLogo)
      .duration(300)
      .delay(500)
      .keyframes([
        { offset: 0, color: '#ffffff' },
        { offset: 1, color: 'var(--ion-color-primary)' }
      ]);

    const titleAnim = this.animationCtrl.create()
      .addElement(bumperTitle)
      .duration(300)
      .delay(500)
      .keyframes([
        { offset: 0, color: '#ffffff' },
        { offset: 1, color: '#000000' }
      ]);

    const animasiWarna = this.animationCtrl.create().addAnimation([bgAnim, logoAnim, titleAnim]);
    await animasiWarna.play();

    const fadeOutAnim = this.animationCtrl.create()
      .addElement(bumperScreen)
      .duration(500)
      .delay(300)
      .keyframes([ 
        { offset: 0, opacity: '1' },
        { offset: 1, opacity: '0' }
      ]);

    await fadeOutAnim.play();

    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
