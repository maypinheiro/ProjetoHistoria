import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-suceso',
  templateUrl: './suceso.component.html',
  styleUrls: ['./suceso.component.scss']
})
export class SucesoComponent implements OnInit {
  dialogRef: any;

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }

}
