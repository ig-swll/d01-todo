import { Trash } from 'phosphor-react';
import { MouseEvent } from 'react';
import styles from './Todo.module.css';

interface TodoProps {
  id: string;
  done: boolean;
  text: string;
  onToggleDone: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

export function Todo(props: TodoProps) {
  const { id, done, text, onDeleteTodo, onToggleDone } = props;
  const toggleDone = () => {
    onToggleDone(id);
  };
  const deleteTodo = () => {
    onDeleteTodo(id);
  };

  function textDoubleClick(event: MouseEvent<HTMLDivElement>) {
    if (event.detail > 1) {
      event.preventDefault();
    }
  }

  return (
    <div className={done ? styles.todoDone : styles.todoNotDone}>
      <div className={styles.todoContent}>
        <div
          className={styles.labelWrapper}
          onClick={toggleDone}
          onMouseDown={textDoubleClick}
        >
          <input
            name="todo-checkbox"
            type="checkbox"
            checked={done}
            onClick={toggleDone}
            onChange={toggleDone}
          />
          <label htmlFor="todo-checkbox">{text}</label>
        </div>
        <button type="button" onClick={deleteTodo}>
          <Trash size={14} />
        </button>
      </div>
    </div>
  );
}
