import { Component } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    password: '',
    message: ''
  };

  submitted = false;

  onSubmit() {
    // Handle form submission logic here, such as sending the data to a server.
    console.log('Contact form submitted:', this.contact);
    this.submitted = true;

    // Reset the form (optional)
    this.contact = { name: '', email: '', password: '', message: '' };
  }
}


