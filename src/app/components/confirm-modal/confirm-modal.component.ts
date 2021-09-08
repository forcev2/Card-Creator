import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  constructor(
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  ok() {
    this.router.navigate(['']);
    this.modalService.dismissAll();
  }

}
