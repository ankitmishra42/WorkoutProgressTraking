import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputFormComponent } from './MyComponents/input-form/input-form.component';
import { WorkoutListComponent } from './MyComponents/workout-list/workout-list.component';
import { WorkoutProgressComponent } from './MyComponents/workout-progress/workout-progress.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputFormComponent, WorkoutListComponent, WorkoutProgressComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  myName = 'Ankit Mishra'
  // constructor(){
  //   setTimeout(() => {
  //     this.myName ='Jay ShiyaRam';
  //   }, 2000);
  // }
}
