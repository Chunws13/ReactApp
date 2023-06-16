import { useState } from 'react';

function Todos() {
    const [todoList, setTodoList] = useState([]);
    const submitFunction = (event) => {
        event.preventDefault();
        const todo = event.target.todo.value;
        setTodoList([todo, ...todoList ]);

        event.target.todo.value = '';
    }

    return (
        <div>
            <div className='todoListArea'> todo-list will here</div>
            {todoList}
            <form onSubmit={submitFunction}> 
                <input type='text' name='todo' placeholder='write your todoList'/>
            </form>
        </div>
    )
}
export default Todos;