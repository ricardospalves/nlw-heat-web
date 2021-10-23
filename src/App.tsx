import { useContext } from 'react'
import styles from './App.module.scss'
import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'
import { SendMessageForm } from './components/SendMessageForm'
import { AuthContext } from './contexts/auth'

export const App = () => {
  const { user } = useContext(AuthContext)

  return (
    <div
      id="App"
      className={`${styles.App} ${Boolean(user) && styles['App--signed']}`}
    >
      <main className={styles.contentWrapper}>
        <MessageList />

        {
          Boolean(user) ? <SendMessageForm /> : <LoginBox />
        }
      </main>
    </div>
  )
}

export default App
