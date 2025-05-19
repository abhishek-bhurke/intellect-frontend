import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTooltipModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
