import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged: boolean;

  constructor() {}
  // constructor(private userService: UserService) {}

  ngOnInit() {
    //  this.userService.currentUser.subscribe(user => {
    //    this.isLogged = Boolean(user);
    //  });
  }

  //   onLogout() {
  //     this.userService.logOut();
  //   }
}
