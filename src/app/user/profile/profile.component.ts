import { ProfileService } from './../../profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private user: ProfileService) {}

  ngOnInit() {
    // this.getIds();
  }

  getIds(): void {
    this.user.getAllIdsFavorites().subscribe(resp => {
      console.log(resp);
    });
  }
}
