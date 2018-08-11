import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/patients', title: 'Patients',  icon:'person', class: '' },
    { path: '/appointments', title: 'Appointments',  icon:'content_paste', class: '' },
    { path: '/centres', title: 'Medical Centres',  icon:'library_books', class: '' },
    { path: '/services', title: 'Services',  icon:'bubble_chart', class: '' },
    { path: '/users', title: 'User Management',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/login', title: 'Login',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
        return false;
    }
    return true;
  };
}
