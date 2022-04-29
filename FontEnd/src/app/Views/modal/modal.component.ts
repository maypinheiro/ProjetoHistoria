import { Component, Inject, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConexaoService } from 'src/app/Shared/conexao.service';
import { SucesoComponent } from 'src/app/suceso/suceso.component';



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
      nome: ([null, [Validators.required,Validators.minLength(3)]]),
      idade: [null, [Validators.required,Validators.maxLength(3)]],
      relato: [null, [Validators.required,Validators.maxLength(2000)]],
      imagem: [null,Validators.required]
    });



  }

  enviar() {
    
     // console.log(this.formulario.value)
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
  this.dialog.open(SucesoComponent);
  }

}




