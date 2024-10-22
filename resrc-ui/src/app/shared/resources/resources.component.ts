import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretDown, faCaretUp, faTrashCan, faPenToSquare, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Resource } from '../../models/resource.model';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [FontAwesomeModule, NgIf, NgFor],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent {
  
  //icons
  downVoteIcon = faCaretDown;
  upVoteIcon = faCaretUp;
  deleteIcon = faTrashCan;
  editIcon = faPenToSquare;
  warnIcon = faTriangleExclamation;

  //app data
  @Input() renderActionBar : boolean = false;
  @Output() emitResource = new EventEmitter();

  data1: Resource = {
    title: "Hello",
    content: "This is a long description but you do not know it yet, because I am very confused, just trying to make a long text This is a long description but you do not know it yet, because I am very confused, just trying to make a long text",
    voteCount: 5
  }

  data2: Resource = {
    title: "Hello",
    content: "This is a long description but you do not know it yet, because I am very confused, just trying to make a long text This is a long description but you do not know it yet, because I am very confused, just trying to make a long text",
    voteCount: 5
  }
  data3: Resource = {
    title: "Hello",
    content: "This is a long description but you do not know it yet, because I am very confused, just trying to make a long text This is a long description but you do not know it yet, because I am very confused, just trying to make a long text",
    voteCount: 5
  }
  data4: Resource = {
    title: "Hello",
    content: "This is a long description but you do not know it yet, because I am very confused, just trying to make a long text This is a long description but you do not know it yet, because I am very confused, just trying to make a long text",
    voteCount: 5
  }

  data: Resource[] = [this.data1, this.data2, this.data3, this.data4];

  voteCounter: number = 0;

  upVote(){
    this.voteCounter++;
  }

  downVote(){
    this.voteCounter--;
  }

  editResource(resource: Resource){
    this.emitResource.emit(resource);
  }
  
}
