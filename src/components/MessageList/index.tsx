import styles from './styles.module.scss'

import logoImg from '../../assets/logo.svg'

export const MessageList = () => {
  return (
    <section className={styles.MessageList}>
      <img
        src={logoImg}
        className={styles['MessageList__logo']}
        alt="DoWhile 2021"
      />

      <article className={styles.MessageListComment}>
        <h3 className={styles['MessageListComment__user']}>
          <span className={styles['MessageListComment__name']}>
            Ricardo Alves
          </span>

          <span className={styles['MessageListComment__avatar']}>
            <img
              src="https://github.com/ricardospalves.png"
              alt="Avatar do Ricardo Alves"
            />
          </span>
        </h3>

        <p className={styles['MessageListComment__comment']}>
          Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥
        </p>
      </article>

      <article className={`${styles.MessageListComment} ${styles['MessageListComment--offset']}`}>
        <h3 className={styles['MessageListComment__user']}>
          <span className={styles['MessageListComment__name']}>
            Ricardo Alves
          </span>

          <span className={styles['MessageListComment__avatar']}>
            <img
              src="https://github.com/ricardospalves.png"
              alt="Avatar do Ricardo Alves"
            />
          </span>
        </h3>

        <p className={styles['MessageListComment__comment']}>
          Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥
        </p>
      </article>

      <article className={styles.MessageListComment}>
        <h3 className={styles['MessageListComment__user']}>
          <span className={styles['MessageListComment__name']}>
            Ricardo Alves
          </span>

          <span className={styles['MessageListComment__avatar']}>
            <img
              src="https://github.com/ricardospalves.png"
              alt="Avatar do Ricardo Alves"
            />
          </span>
        </h3>

        <p className={styles['MessageListComment__comment']}>
          Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥
        </p>
      </article>
    </section>
  )
}
