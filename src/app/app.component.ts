import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { HomeComponent } from "./home/home.component";
import { ServicesComponent } from "./services/services.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { FooterComponent } from "./footer/footer.component";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from "./loader/loader.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, AboutUsComponent, HomeComponent, ServicesComponent, ContactUsComponent, FooterComponent, CommonModule, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
  loading: boolean = false;
}
