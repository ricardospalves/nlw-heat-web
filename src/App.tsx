import styles from './App.module.scss'
import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'

export const App = () => {
  return (
    <div id="App" className={styles.App}>
      <main className={styles.contentWrapper}>
        <MessageList />
        <LoginBox />
      </main>
    </div>
  )
}

export default App
