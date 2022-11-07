import todoLogo from './assets/logo.svg';
import styles from './App.module.css';
import { PlusCircle } from 'phosphor-react';
import { Empty } from './components/Empty';
import { Todo } from './components/Todo';

export function App() {
  return (
    <>
      <header className={styles.topBackground}>
        <img src={todoLogo} alt="Logo do ToDo" />
      </header>
      <main className={styles.container}>
        <form className={styles.inputForm}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit">
            Criar <PlusCircle size={16} weight="bold" />
          </button>
        </form>

        <div className={styles.listWrapper}>
          <div className={styles.listHeader}>
            <div>
              <strong>Tarefas criadas</strong>
              <span>0</span>
            </div>

            <div>
              <strong>Concluídas</strong>
              <span>0</span>
            </div>
          </div>

          <div className={styles.list}>
            {/* <Empty /> */}
            <Todo
              done={false}
              text="Lorem ipsum dolor sit amet consectetur adipiscing elit"
            />
            <Todo
              done={true}
              text="Lorem ipsum dolor sit amet consectetur adipiscing elit"
            />
          </div>
        </div>
      </main>
    </>
  );
}
