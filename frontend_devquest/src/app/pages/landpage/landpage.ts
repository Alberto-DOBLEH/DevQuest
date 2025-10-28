import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landpage',
  imports: [Header, RouterLink],
  templateUrl: './landpage.html',
  styleUrl: './landpage.css'
})
export class Landpage {

}
