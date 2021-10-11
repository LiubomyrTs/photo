import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/admin/user/services/user.service';
import { User } from 'src/app/admin/user/interfaces/user.interface';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  users: User[];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.gelAll()
      .subscribe(users => {
        this.users = users;
      });
  }
}
