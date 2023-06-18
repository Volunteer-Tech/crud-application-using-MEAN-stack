import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import User from '../User';

@Component({
	selector: 'app-get',
	templateUrl: './get.component.html',
	styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
	users: User[];
	response : any = {};
	responseDelete : any = {};
	constructor(private us: UserService) { }

	ngOnInit() {
		this.getUsers();
	}

	getUsers() {
		this.us.getUser().subscribe((res) => {
			this.response = res;
			if (this.response.status == 'success'){
				this.users = this.response.users;
			} else {
			}
		});
	}

	deleteUser(id) {
		this.us.deleteUser(id).subscribe(res => {
			this.responseDelete = res;
			if (this.responseDelete.status == 'success'){
				this.us.alert('User deleted successfully!','success');
				this.getUsers();
			} else {
				this.us.alert('Error deleting user!','error');
			}
		});
	}
}
