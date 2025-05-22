import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  activeSection: string = 'home'
  sections = ['home', 'about-us', 'services', 'contact-us'];
  isCollapse: boolean = false;
  currentSection: any;
  constructor(private eRef: ElementRef) { }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    this.highlightLink();
  }
  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    if (this.isCollapse && !this.eRef.nativeElement.contains(event.target)) {
      this.closeMenu();
    }
  }
  closeMenu() {
    this.isCollapse = false;
  }
  highlightLink() {
    const sections = ['home', 'about-us', 'services', 'contact-us'];
    sections.forEach(section => {
      const element = document.querySelector(`#${section}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight * 0.49 && rect.bottom > windowHeight * 0.51) {
          this.currentSection = section;
        }
      }
    });

    this.activeSection = this.currentSection;
  }
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    this.activeSection = sectionId;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.closeMenu();
    }
  }
}
