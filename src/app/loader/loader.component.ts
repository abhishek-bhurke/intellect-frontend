import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  isLoading$: any;
  constructor(private loaderService: LoaderService) { }
  ngOnInit() {
    this.isLoading$ = this.loaderService.loading$;
  }
}
