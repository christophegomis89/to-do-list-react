import React from 'react';
import ToDo from './ToDo';

const TodoList = ({ tasks, match, onToggleCompleted }) => {

   let filteredTasks
   switch (match.params.filter) {
      case 'completed':
         filteredTasks = tasks.filter(task => task.completed)
         break;
      default:
         filteredTasks = tasks
   }
   if (filteredTasks.length === 0) {
      return (

         <div>
            <h1 className="m-3">Liste de tâches</h1>
            <ul className="list-group m-3">
               <li clasname="list-group-items"> Acune tâche à afficher</li>
            </ul>
         </div>
      )
   }
   else {

      return (

         <div>
            <h1 className="m-3">Liste de tâches</h1>
            <ul className="list-group m-3">
               {
                  filteredTasks.map((task) => <ToDo task={task} key={task.id} onToggleCompleted={onToggleCompleted} />)
               }
            </ul>
         </div>

      )

   }
}

export default TodoList;
