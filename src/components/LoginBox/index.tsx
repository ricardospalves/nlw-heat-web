import styles from './styles.module.scss'

export const LoginBox = () => {
  return (
    <section className={styles.Login}>
      <h2 className={styles['Login__heading']}>
        Entre e compartilhe sua mensagem
      </h2>

      <p>
        <a href="#" className={styles['Login__signin']}>
          Entrar com o GitHub
        </a>
      </p>
    </section>
  )
}
