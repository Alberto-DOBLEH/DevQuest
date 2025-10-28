import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';

@Component({
  selector: 'app-login',
  imports: [ Header ],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true
})
export class Login {

}
