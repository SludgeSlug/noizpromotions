import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email: Object = {};
  success: boolean = false;
  failed: boolean = false;
  loading: boolean = false;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  sendEmail() {
    this.loading = true;
    this.contactService.sendEmail(this.email)
      .subscribe(() => {
        this.success = true;
        this.loading = false;
      }, () => {
        this.failed = true;
        this.loading = false;
      });
  }
}
