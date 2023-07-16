import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: string;

  constructor() {
    this.currentTheme = localStorage.getItem('theme') || 'dark-mode';
    if (this.currentTheme) {
      document.body.classList.add(this.currentTheme);
    } else {
      document.body.classList.add('dark-mode');
    }
  }

  setTheme(theme: string): void {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(theme);
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
  }

  getTheme(): string {
    return this.currentTheme;
  }
}
