import { Component, OnInit } from '@angular/core'
import { TodoService } from '../services/todo.service'
import { ITodo } from '../models/todo.model'

@Component({
  selector: 'app-root',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoList implements OnInit {
  private todos: ITodo[]
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos(): void {
    this.todoService.getTodos()
      .subscribe(todos => {
        this.todos = todos
        console.log(this.todos)
      })
  }
}
