import { useEffect, useState } from 'react'

import { api } from '../../services/api'

import styles from './styles.module.scss'

import logoImg from '../../assets/logo.svg'

type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
}

export const MessageList = () => {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    api.get<Message[]>('messages/latest').then(response => {
      setMessages(response.data)
    })
  }, [])

  return (
    <section className={styles.MessageList}>
      <img
        src={logoImg}
        className={styles['MessageList__logo']}
        alt="DoWhile 2021"
      />

      {
        messages.map((message, index) => (
          <article
            className={`${styles.MessageListComment} ${index === 1 && styles['MessageListComment--offset']}`}
            key={message.id}
          >
            <h3 className={styles['MessageListComment__user']}>
              <span className={styles['MessageListComment__name']}>
                {message.user.name}
              </span>

              <span className={styles['MessageListComment__avatar']}>
                <img
                  src={message.user.avatar_url}
                  alt={`Avatar do ${message.user.name}`}
                />
              </span>
            </h3>

            <p className={styles['MessageListComment__comment']}>
              {message.text}
            </p>
          </article>
        ))
      }
    </section>
  )
}
