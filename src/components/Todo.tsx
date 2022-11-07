import styles from './Todo.module.css';

interface TodoProps {
  done: boolean;
  text: string;
  toggleDone?: () => void;
  deleteTodo?: () => void;
}

export function Todo({ done, text }: TodoProps) {
  return (
    <div className={styles.todo}>
      <input type="checkbox" checked={done} />
      <p>{text}</p>
    </div>
  );
}
