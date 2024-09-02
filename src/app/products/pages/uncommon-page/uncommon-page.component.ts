import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18nSelect
  public name: String ='Jhon Jairo';
  public gender: 'male'|'female' ='male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void {
    this.name = 'Nohelys';
    this.gender = 'female'
  }

  // i18nPlural
  public clients : string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 personas esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Jhon Jairo',
    age: 34,
    address: 'Aldana - Nariño'
  } 

  //Async Pipe - Observables
  //Interval es una manera de crear onservables emite valores de 0 1 2 3 basado en la cantidad de tiempo que quieran definir

  public myObservableTime: Observable<number> = interval(2000)
    .pipe(
      tap( value => console.log('tap: ', value))
    );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(()=>{
      resolve('Tenemos data en la promesa.')
      console.log('Tenemos data en la promesa.');
      this.person.name = 'Otro nombre'
    }, 3500);
  }); 
}
