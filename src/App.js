import React from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends React.Component {
 state= {
   todos : [
     {
       id:1,
       title:'take out the trash',
       completed : false
     },
     {
      id:2,
      title:'Dinner with gf',
      completed : true
    },
    {
      id:3,
      title:'Meeting with boss',
      completed : false
    },
   ]
 } 
 // Completed todo
 markComplete=(id)=>{
   this.setState({todos:this.state.todos.map(todo=>{
   if(todo.id===id){
     todo.completed=!todo.completed
   }
   return todo;
   })});
 }

 //Delete Todo
deleteTodo=(id)=>{
  console.log(id)
}


  render(){
    console.log(this.state.todos)
    return (
      <div className="App">
        <Todos  todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
  }


export default App;
