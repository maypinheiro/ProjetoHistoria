import { Component, Inject, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConexaoService } from 'src/app/Shared/conexao.service';
import { MensagemSucessoComponent } from 'src/app/Shared/MensagemSucesso/MensagemSucesso.component';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private form: FormBuilder,
    public dialog: MatDialog,
    private acesso: ConexaoService,
    public dialogRef: MatDialogRef<ModalComponent>
  ) { }

  ngOnInit() {

    this.formulario = this.form.group({
      nome:([null, [Validators.required,Validators.minLength(3),Validators.maxLength(50), Validators.pattern('[a-zA-Z]*')]]),
      idade:( [null, [Validators.required,Validators.maxLength(3),Validators.pattern('[0-9]*') ]]),
      relato:( [null, [Validators.required,Validators.minLength(20),Validators.maxLength(2000)]]),
      imagem:([null,Validators.required])
    });
  }
  
  get relato(){ return this.formulario.get('relato')}
  
  enviar() {
      this.acesso.postPessoa(this.formulario.value).subscribe(
          dados => {
          let retorno = dados; 
          console.log('Cadastrado consucesso')
          this.cancelar();
          this.openDialog(); 
     })
    }

  cancelar() {
   this.dialogRef.close();   
  }

  openDialog() {
  this.dialog.open(MensagemSucessoComponent);
  }

  

}




