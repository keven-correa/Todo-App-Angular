import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/Models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listaTareas: Tarea[] = [];
  nombreTarea = '';

  constructor() { }

  ngOnInit(): void {
  }
  agregarTarea(){
    //crear objeto tarea
    //console.log(this.nombreTarea);
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    };

    //agregar el objeto al array
    this.listaTareas.push(tarea);

    //resetear form
    this.nombreTarea = '';

      
    
  }
  eliminarTarea(index: number):void{
    this.listaTareas.splice(index, 1);
  }

  actualizarTarea(tarea: Tarea,index: number): void {
    this.listaTareas[index].estado = !tarea.estado
  }
}
