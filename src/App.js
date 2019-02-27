import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';


class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Build app',
        completed: false
      },
      {
        id: 3,
        title: 'Meet boss',
        completed: false
      }
    ],
    nextid: 4
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }) 
    });

  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: this.state.nextid,
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo], nextid: this.state.nextid += 1})
  }


  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Route exact path="/" render={props => (
          <React.Fragment>
            <AddTodo addTodo={this.addTodo} />
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
          </React.Fragment>
        )} />

        <Route path="/about" component={About} />

      </div>
      </Router>
    );
  }
}

export default App;
