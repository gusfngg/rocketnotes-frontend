import { useState } from 'react'
import { FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Link, useNavigate} from 'react-router-dom'
import { Container, Form, Background } from './styles'

import { api } from '../../services/api'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const navigate = useNavigate();

   function  handleSingUp() {
      if(!name || !email || !password) {
         return alert("Porfavor, prencha todos os campos!")
      }

      api.post("/users", { name, email, password })
      .then(() => {
         alert("Usuario cadastrado com sucesso!")
         navigate("/")
      })
      .catch(error => {
         if(error.response) {
            alert(error.response.data.message);
         } else {
            alert("Não foi possivel cadastrar!")
         }
      })


   }

   return (
      <Container>
         <Background/>
        
         <Form>
            <h1>RocketNotes</h1>
            <p>Aplicaçao para salvar e gerenciar sues links úteis.</p>

            <h2>Faça seu login</h2>
            <Input 
               placeholder="Name"
               type="text"
               icon={FiUser}
               onChange={e => setName(e.target.value)}
            />

            <Input 
               placeholder="E-mail"
               type="text"
               icon={FiMail}
               onChange={e => setEmail(e.target.value)}
            />

            <Input 
               placeholder="Senha"
               type="password"
               icon={FiLock}
               onChange={e => setPassword(e.target.value)}
            /> 

            <Button title='Entrar' onClick={handleSingUp}/>

            <Link to="/">
               Voltar para o login
            </Link>
         </Form>
      </Container>
   )
}