import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-MensagemSucesso',
  templateUrl: './MensagemSucesso.component.html',
  styleUrls: ['./MensagemSucesso.component.scss']
})
export class MensagemSucessoComponent implements OnInit {
  dialogRef: any;

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }

}
