import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { NavBarComponent } from "../../shared/nav-bar/nav-bar.component";
import { ResourcesComponent } from "../../shared/resources/resources.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, FontAwesomeModule, NavBarComponent, ResourcesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  

}
