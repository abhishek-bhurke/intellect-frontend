import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  year: any;
  ngOnInit() {
    this.year = new Date().getFullYear();
  }
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    // this.activeSection = sectionId;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  goToLinkedin() {
    window.open('https://www.linkedin.com/company/intellect-isolutions', '_blank')
  }
}
