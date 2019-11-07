import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  resImage = faker.image.imageUrl(400, 400, 'people');

  constructor() {}

  ngOnInit() {
    console.log(this.resImage);

  }
}
