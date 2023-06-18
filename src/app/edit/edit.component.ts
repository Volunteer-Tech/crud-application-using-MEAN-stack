import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
	user: any = {};
	angForm: FormGroup;
	response: any = {};
	constructor(private route: ActivatedRoute, 
		private fb: FormBuilder,
		private router: Router, 
		private us: UserService) {
		this.angForm = this.fb.group({
			name: ['', Validators.required ],
			email: ['', Validators.required ],
			phone_number: ['', Validators.required ]
		});
	}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.us.editUser(params['id']).subscribe(res => {
				this.user = res;
				this.user = this.user.user;
			});
		});
	}

	updateUser() {
		this.route.params.subscribe(params => {
			this.us.updateUser(params['id'], this.angForm.value).subscribe(res => {
				this.response = res;
				if (this.response.status == 'success'){
					this.us.alert('User updated successfully!','success');
					this.router.navigate(['user']);
				} else {
					this.us.alert('Error updating user!','error');
				}
			});
		});
	}
}
