import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  activeTechnology: string = 'software-card'
  technologyCardScroll(id: string) {
    this.activeTechnology = id;
    const element = document.getElementById(id);
    var topPos: any = element?.offsetTop;
    if (element) {
      element.scrollTop = topPos;
      element.scrollIntoView({ block: 'center', behavior: 'smooth' })
    }
  }
}
