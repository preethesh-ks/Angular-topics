import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';
// import { NgIf } from '@angular/common';
@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent,FormsModule,FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
    todoservice = inject(TodosService);
    todoItems = signal<Array<Todo>>([

    ])

    searchTerm = signal('');
    ngOnInit(): void {
        this.todoservice.getTodos().pipe(
          catchError((error) => {
            console.error('Error fetching todos', error);
            throw error;
          }
        )).subscribe((data) => {
            this.todoItems.set(data);
        })
      
    }


    updateTodoItem(todo: Todo) {
       this.todoItems.update((todos)=>{
        return todos.map((t) => {
          if(t.id === todo.id) {
            return {
              ...t,
              completed: !t.completed
            };
          }
          return t;
        });

       }) 
    }
}