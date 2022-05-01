import { ConexaoService } from './../../Shared/conexao.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Pessoa } from 'src/app/Shared/Model/pessoa.model';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pessoa!: Pessoa;
  
 constructor(public dialog: MatDialog,public conexaoService: ConexaoService) {}

  ngOnInit() {
    this.getPessoa()
   
  }
 
   getPessoa(){
    this.conexaoService.getPessoa().subscribe(
      ( data: Pessoa) => {
        this.pessoa= data;
      }
    );
  }
  
  abrir(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '900px',
    });

    dialogRef.afterClosed().subscribe();
  }
  atualizar() {this.getPessoa();}
}


