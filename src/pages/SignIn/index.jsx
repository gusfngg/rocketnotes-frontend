import { useState } from 'react'
import { FiLock, FiMail } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Container, Form, Background } from './styles'

import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'   

export function SignIn() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   

   const { signIn } = useAuth();
   
   function handleSignIn() {
      signIn({ email, password})
   }
   return (
      <Container>
         <Form>
            <h1>RocketNotes</h1>
            <p>Aplicaçao para salvar e gerenciar sues links úteis.</p>

            <h2>Faça seu login</h2>
            <Input 
               placeholder="E-mail"
               type="text"
               icon={FiMail}
               onChange={ e => setEmail(e.target.value) }
            />

            <Input 
               placeholder="Senha"
               type="password"
               icon={FiLock}
               onChange={ e => setPassword(e.target.value) }
            /> 

            <Button title='Entrar' onClick={handleSignIn}/>

            <Link to="/register">
               Criar Conta
            </Link>
         </Form>
         <Background/>
      </Container>
   )
}