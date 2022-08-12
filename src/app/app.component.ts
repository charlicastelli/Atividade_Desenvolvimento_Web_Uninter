import { Component } from '@angular/core';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'ATIVIDADE-PRATICA';
data : Array<any>;constructor(){
this.data = [
{ Name: 'Charli Roberto Castelli', RU: '3457769', COURSE: 'Análise e desenvolvimento de sistemas', BIRTH:'21/05/1992' },
{ Name: 'Ana Paula Mendes', RU: '8874552', COURSE: 'Bacharelado em engenharia civil', BIRTH:'11/01/2010' },
{ Name: 'Roberto Caroso', RU: '1478523', COURSE: 'Bacharelado em engenharia da computação', BIRTH:'28/08/1988' },
{ Name: 'Daiane da Silva', RU: '8521456', COURSE: 'Bacharelado em ciências contábeis', BIRTH:'02/06/1999' },
{ Name: 'Paulo Dias', RU: '9654123', COURSE: 'Bacharelado em engenharia elétrica', BIRTH:'23/04/1993' }
];
}
}