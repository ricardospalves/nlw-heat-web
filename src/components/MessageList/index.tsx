import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

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

const messagesQueue: Message[] = []
const socket = io('http://localhost:4000')

socket.on('new_message', newMessage => {
  messagesQueue.push(newMessage)
})

export const MessageList = () => {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    setInterval(() => {
      if(messagesQueue.length > 0) {
        setMessages(previousState => [
          messagesQueue[0],
          previousState[0],
          previousState[1]
        ].filter(Boolean))

        messagesQueue.shift()
      }
    }, 3000)
  })

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
