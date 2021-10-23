import { FormEvent, useContext, useState } from 'react'
import { VscSignOut, VscGithubInverted } from 'react-icons/vsc'

import { AuthContext } from '../../contexts/auth'
import { api } from '../../services/api'

import styles from './styles.module.scss'

export const SendMessageForm = () => {
  const [message, setMessage] = useState('')
  const { user, signout } = useContext(AuthContext)
  const signOutText = 'Sair'

  const handleSendMessage = async (event: FormEvent) => {
    event.preventDefault()

    if(message.trim() === '') {
      return
    }

    await api.post('messages', {
      message
    })

    setMessage('')
  }

  return (
    <section className={styles.SendMessageForm}>
      <button
        type="button"
        className={styles.signOut}
        aria-label={signOutText}
        title={signOutText}
        onClick={signout}
      >
        <VscSignOut className={styles['signOut__icon']} />
      </button>

      <header className={styles.SendMessageHeader}>
        <h2 className={styles['SendMessageHeader__name']}>
          {user?.name}
        </h2>

        <p className={styles['SendMessageHeader__username']}>
          <VscGithubInverted />

          <span>
            {user?.login}
          </span>
        </p>

        <div className={styles['SendMessageHeader__avatar']}>
          <img
            src={user?.avatar_url}
            alt={`Avatar do ${user?.name}`}
          />
        </div>
      </header>

      <form className={styles.messageForm} onSubmit={handleSendMessage}>
        <label htmlFor="message">
          Qual é a sua expectativa para o evento?
        </label>

        <textarea
          name="message"
          id="message"
          placeholder="ex.: Estou empolgado em aprender novas tecnologias"
          value={message}
          onChange={event => setMessage(event.target.value)}
        />

        <button type="submit">
          Enviar a mensagem
        </button>
      </form>
    </section>
  )
}
