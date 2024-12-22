import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  isActive: boolean = false;
  selectedTitle: string = 'Select an option'; // Default title
  labels = [
    { label: `Управление учетной записью`, url: '/page1'},
    { label: 'Выход', url: '/page2'}
  ];

  toggleMenu(): void {
    this.isActive = !this.isActive;
  }

  selectOption(option: { label: string; url: string }): void {
    this.isActive = false;
    window.location.href = option.url;
  }
}
