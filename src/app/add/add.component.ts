import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  response : any = {};
  angForm : FormGroup;
  constructor(private fb : FormBuilder, private us: UserService) { 
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      phone_number: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

  addUser() {
    this.us.addUser(this.angForm.value).subscribe(res => {
      this.response = res;
      if (this.response.status == 'success'){
        this.us.alert('User added successfully!','success');
        this.angForm.reset();
      } else {
        this.us.alert('Error saving user!','error');
      }
    })
  }
}
