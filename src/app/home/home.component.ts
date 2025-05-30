import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, NgZone } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  selectedFile: File | null = null;
  words = ['Futures', 'Impact'];
  currentWordIndex = 0;
  displayText = '';
  isDeleting = false;
  typingSpeed = 400;
  pauseTime = 1000;

  constructor(private ngZone: NgZone, private http: HttpClient) { }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => this.startTyping());
  }

  startTyping() {
    const currentWord = this.words[this.currentWordIndex];
    const fullText = currentWord;

    if (this.isDeleting) {
      this.updateDisplayText(fullText.substring(0, this.displayText.length - 1));
    } else {
      this.updateDisplayText(fullText.substring(0, this.displayText.length + 1));
    }

    let speed = this.typingSpeed;

    if (!this.isDeleting && this.displayText === fullText) {
      // Pause before deleting
      speed = this.pauseTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.displayText === '') {
      // Move to next word
      this.isDeleting = false;
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
      speed = 500;
    }

    setTimeout(() => this.startTyping(), speed);
  }
  private updateDisplayText(text: string) {
    this.ngZone.run(() => {
      this.displayText = text;
    });
  }
  onFileSelection(event: any) {
    this.selectedFile = event.target.files[0];
  }
  goToServices() {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
