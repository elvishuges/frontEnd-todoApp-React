import React, { Component } from "react";
import axios from "axios";

import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const URL = "http://localhost:3003/api/todos";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { description: "", list: [] };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleMarklAsPending = this.handleMarklAsPending.bind(this);
    this.handleSearch = this.handleSearch.bind(this);    

    this.refresh(); // descrição será vazia e a lista preenchida
  }

  handleAdd() {
    const description = this.state.description;
    axios.post(URL, { description }).then(resp => this.refresh());
  }

   handleSearch(){
     console.log( 'handleSearch')
     this.refresh(this.state.description)
   }
   
  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value });
  }

  refresh(description='') {
    const search = description ? `&description__regex=/${description}/`: ''
    axios.get(`${URL}?sort=-createdAt${search}`)
      .then(resp =>
         this.setState({ ...this.state, description, list: resp.data })
      );
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`)
    .then(resp => this.refresh(this.state.description));
    
  }

  handleMarkAsDone(todo){
    axios.put(`${URL}/${todo._id}`,{...todo,done:true})
    .then(resp => this.refresh(this.state.description))
  }

  handleMarklAsPending(todo){
    axios.put(`${URL}/${todo._id}`,{...todo,done:false})
      .then(resp => this.refresh(this.state.description))
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm
          handleChange={this.handleChange}
          description={this.state.description}
          handleAdd={this.handleAdd}
          handleSearch = {this.handleSearch} 
        />
        <TodoList 
           list={this.state.list} 
           handleRemove={this.handleRemove}
           handleMarkAsDone = {this.handleMarkAsDone}
           handleMarklAsPending = {this.handleMarklAsPending}
          / >
      </div>
    );
  }
}
