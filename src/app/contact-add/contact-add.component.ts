import { Component } from '@angular/core';
import { Contact } from '../models/Contact';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent {
[x: string]:any;
contactFromData: any={};
contacts: any[] =[];
listContacts: Array<Contact> = new Array<Contact>();
item: any;
onSubmit() {
  console.log('Submit Clicked. Contact Form Data:', this['contactFormData']);

  if (this['contactFormData'].firstName) {
    this.contacts.push({ ...this['contactFormData'] });
    this.listContacts.push({ ...this['contactFormData'] });
    this.clearForm();
    console.log('Contact added. Updated Contacts:', this.contacts);
  } else {
    console.log('First name is missing. Contact not added.');
  }
}

clearForm() {
  this['contactFormData'] = {};
}
}
