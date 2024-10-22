import { Component } from '@angular/core';
import { NavBarComponent } from "../../shared/nav-bar/nav-bar.component";
import { ResourcesComponent } from "../../shared/resources/resources.component";
import { FormsModule, NgForm } from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Resource } from '../../models/resource.model';

@Component({
  selector: 'app-my-resources',
  standalone: true,
  imports: [NavBarComponent, ResourcesComponent, FormsModule, NgIf, NgClass],
  templateUrl: './my-resources.component.html',
  styleUrl: './my-resources.component.css'
})
export class MyResourcesComponent {
  
  onEdit : boolean = false;

  edit(resource: Resource, resourceForm: NgForm){ 
    this.onEdit = true;
    resourceForm.controls['title'].setValue(resource.title); 
    resourceForm.controls['content'].setValue(resource.content);

  }


  resetForm(resourceForm: NgForm){
    this.onEdit = false;
    resourceForm.controls['title'].setValue(''); 
    resourceForm.controls['content'].setValue('');
  }

}
