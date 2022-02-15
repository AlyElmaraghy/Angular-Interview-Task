import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  submitted: boolean = false;
  
  namePattern ='^[a-zA-Z ]*$'

  milarityStatuses = [
    { Id: 1, Name: 'temporary delay' },
    { Id: 2, Name: 'Temporary exemption' },
    { Id: 3, Name: 'Final dismissal' },
    { Id: 4, Name: 'Ended military service' }
  ]
 
  info = {
    Name: '',
    Gender: '',
    MilarityStatuses: '',
    DateOfBirth: '',
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    if (form.invalid) {
      return;
    }
    console.log(this.info);
  }
}
