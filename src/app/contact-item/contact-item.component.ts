import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/Contact';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent {
  @Input() contact: Contact = {
    id: 1,
    firstName: '',
    lastName: '',
    email: '',
    type: 'Friend',
    description: '',
    phone: ''
  };
  @Input() index: number = 0;

  // Declare the deleteEvent as an EventEmitter
  @Output() deleteEvent = new EventEmitter<number>();

  // Remove this line as it's a duplicate declaration
  // deleteEvent: any;

  deleteContact(): void {
    // Instead of alert, emit the deleteEvent with the index
    let reponse = confirm('Voulez-vous supprimer le contact');
    if (reponse) {
      // Emit the deleteEvent with the index
      this.deleteEvent.emit(this.contact.id);
    }
  }
}