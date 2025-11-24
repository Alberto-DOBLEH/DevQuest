import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { FormsModule } from '@angular/forms';
import { Autenticaciones } from '../../services/autenticaciones';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ Header, FormsModule ],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true
})
export class Login {

  constructor(private auth: Autenticaciones, private router: Router) {}
  
  identifier: string = "";
  password: string = "";

  onSubmit() {
    const body = {
      identifier: this.identifier,
      contraseña: this.password
    }

    console.log(body.identifier)
    console.log(body.contraseña)
     
    this.auth.login(body).subscribe({
      next: (res) => {
        localStorage.setItem("token", res.token);
        this.router.navigate(['/landpage']);
      },
      error: (err) => {
        console.error("Error", err)
      }
    });
  }

}
