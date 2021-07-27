import React from 'react';
import Navigation from './Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoList from './ToDoList';
import AddTasks from './AddTasks';
import initialData from '../initialData';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import uniqueid from 'uniqueid';


class App extends React.Component {
      state = {
            tasks: initialData
      }
      onToggleCompleted = (taskId) => {
            let taskToUpdate = this.state.tasks.find(task => task.id === taskId)
            taskToUpdate.completed = !taskToUpdate.completed
            this.setState(prevState => (
                  prevState.tasks.map(task => {
                        return task.id === taskId ? taskToUpdate : task
                  })
            ))

      }
      onAddTask = (newTaskName) => {
            let newTask = {
                  id: uniqueid(),
                  name: newTaskName,
                  completed: false
            }
            this.setState(prevState => ({
                  tasks: [...prevState.tasks, newTask]
            }))
      }
      onDeleteCompleted = () => {
            this.setState(prevState => {
                  let newState = prevState.tasks.filter(task => !task.completed)
                  return {
                        tasks: newState
                  }
            })
      }

      render() {
            return (
                  <section id="todo">

                        <BrowserRouter>
                              <Switch>
                                    <Route path="/add-task" render={(props) => <AddTasks {...props} onAddTask={this.onAddTask} />} />
                                    <Route path="/:filter?" render={(props) => <ToDoList {...props} tasks={this.state.tasks} onToggleCompleted={this.onToggleCompleted} />} />
                              </Switch>
                              <Navigation onDeleteCompleted={this.onDeleteCompleted} />
                        </BrowserRouter>

                  </section>
            )
      }
}
export default App;












