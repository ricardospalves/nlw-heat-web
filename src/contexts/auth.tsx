import { createContext, ReactNode, useEffect, useState } from 'react'

import { api } from '../services/api'

type User = {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
}

type AuthContextData = {
  user: User | null;
  signinURL: string;
  signout: () => void
}

export const AuthContext = createContext({} as AuthContextData)

type AuthProps = {
  children: ReactNode
}

type AuthResponse = {
  token: string;
  user: {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
  }
}

export const AuthProvider = (props: AuthProps) => {
  const [user, setUser] = useState<User | null>(null)
  const signinURL = `https://github.com/login/oauth/authorize?scope=user&client_id=a06a5ac0c1cfe7d7c414`

  const signin = async (githubCode: string) => {
    const response = await api.post<AuthResponse>('authenticate', {
      code: githubCode,
    })

    const { token, user } = response.data

    localStorage.setItem('@dowhile:token', token)

    api.defaults.headers.common.authorization = `Bearer ${token}`

    setUser(user)
  }

  const signout = () => {
    setUser(null)
    localStorage.removeItem('@dowhile:token')
  }

  useEffect(() => {
    const token = localStorage.getItem('@dowhile:token')

    if(token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`

      api.get<User>('profile').then(response => {
        setUser(response.data)
      })
    }
  }, [])

  useEffect(() => {
    const url = window.location.href
    const hasGithubCode = url.includes('?code=')

    if(hasGithubCode === true) {
      const [urlWithouCode, githubCode] = url.split('?code=')

      window.history.pushState({}, '', urlWithouCode)

      signin(githubCode)
    }
  }, [])

  return (
    <AuthContext.Provider value={{signinURL, user, signout}}>
      {props.children}
    </AuthContext.Provider>
  )
}
