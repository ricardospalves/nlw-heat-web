import { useContext } from 'react'
import { VscGithubInverted } from 'react-icons/vsc'
import { AuthContext } from '../../contexts/auth'

import styles from './styles.module.scss'

export const LoginBox = () => {
  const { signinURL } = useContext(AuthContext)

  return (
    <section className={styles.Login}>
      <h2 className={styles['Login__heading']}>
        Entre e compartilhe sua mensagem
      </h2>

      <p>
        <a href={signinURL} className={styles['Login__signin']}>
          <VscGithubInverted />

          <span>
            Entrar com o GitHub
          </span>
        </a>
      </p>
    </section>
  )
}
