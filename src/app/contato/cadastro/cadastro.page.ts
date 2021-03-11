import { ContatoapiService } from './../../services/contatoapi.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ContatoModel } from '../../shared/contato-model';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  erros : string = "";
  ionicForm: FormGroup;

  constructor(private navCtrl : NavController,
              private contatoApi: ContatoapiService,
              public formBuilder: FormBuilder) {

                this.ionicForm = this.formBuilder.group({
                  nome: ['', Validators.nullValidator],
                  email: [''],
                  telefone: [''],
                  nascimento: ['']
                });
              }

  ngOnInit() {

  }

  gotoPage(page) {
    this.navCtrl.navigateForward(page);
  }

  cadastraContato() {
     console.log('chamou o cadastro' + this.ionicForm.value['nome'] );

     /*
     this.contatoApi.postContato("KAYKY", "kayky@etec.sp.gov.br", "999999", "2000-03-10T01:15:30.757Z")
        .then((json) => {
          console.log(json);
        })
        .catch((erro) => {
          console.log(erro.error);
          this.erros = erro.error[0];
        });
        */
  }

}
