import todoLogo from './assets/logo.svg';
import styles from './App.module.css';
import { PlusCircle } from 'phosphor-react';
import { Empty } from './components/Empty';
import { Todo } from './components/Todo';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Todo {
  id: string;
  done: boolean;
  text: string;
}

export function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  function addTodo(text: string) {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      done: false,
    };

    setTodos([...todos, newTodo]);
  }

  function handleAddNewTodo(e: FormEvent) {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
    }
  }

  function handleNewTodoChange(e: ChangeEvent<HTMLInputElement>) {
    e.target.setCustomValidity('');
    setNewTodo(e.target.value);
  }

  function handleDeleteTodo(id: string) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleToggleDone(id: string) {
    // const todoIdx = todos.findIndex((todo) => todo.id === id);
    const modifiedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    });

    setTodos(modifiedTodos);
  }

  function handleInvalidTodo(e: InvalidEvent<HTMLInputElement>) {
    e.target.setCustomValidity('É obrigatório definir um texto!');
  }

  const doneTodos = todos.filter((todo) => todo.done);

  return (
    <>
      <header className={styles.topBackground}>
        <a href="/">
          <img src={todoLogo} alt="Logo do ToDo" />
        </a>
      </header>
      <main className={styles.container}>
        <form className={styles.inputForm} onSubmit={handleAddNewTodo}>
          <input
            type="text"
            value={newTodo}
            placeholder="Adicione uma nova tarefa"
            onInvalid={handleInvalidTodo}
            onChange={handleNewTodoChange}
            required
          />
          <button type="submit">
            Criar <PlusCircle size={16} weight="bold" />
          </button>
        </form>

        <div className={styles.listWrapper}>
          <div className={styles.listHeader}>
            <div>
              <strong>Tarefas criadas</strong>
              <span>{todos.length}</span>
            </div>

            <div>
              <strong>Concluídas</strong>
              <span>
                {todos.length ? `${doneTodos.length} de ${todos.length}` : 0}
              </span>
            </div>
          </div>

          <div className={styles.list}>
            {todos.length ? (
              todos.map((todo) => (
                <Todo
                  key={todo.id}
                  id={todo.id}
                  done={todo.done}
                  text={todo.text}
                  onDeleteTodo={handleDeleteTodo}
                  onToggleDone={handleToggleDone}
                />
              ))
            ) : (
              <Empty />
            )}
          </div>
        </div>
      </main>
    </>
  );
}
