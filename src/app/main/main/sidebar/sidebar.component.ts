import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  content = [
    { name: 'Dashboard', icon: 'home', route: 'dashboard' },
    { name: 'Notes', icon: 'file-text', route: 'notes' },
    { name: 'Favorites', icon: 'heart', route: 'favourites' },
    { name: 'Archive', icon: 'archive', route: 'archives' },
    { name: 'Trash', icon: 'trash', route: 'trash' },
  ];

  isSidebarOpen = false;

  get isMobile(): boolean {
    return window.innerWidth <= 640;
  }

  constructor() {
    window.addEventListener('resize', () => {
      if (!this.isMobile) {
        this.isSidebarOpen = true;
      }
    });
  }

  ngOnInit() {
    this.isSidebarOpen = !this.isMobile;
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
