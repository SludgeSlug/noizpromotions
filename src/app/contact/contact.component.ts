import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email: any = {subject: ''};
  success: boolean = false;
  failed: boolean = false;
  loading: boolean = false;

  constructor(private contactService: ContactService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
            let subject = params['subject'];
            if(subject) {
                this.email.subject = subject;
            }
        });
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
