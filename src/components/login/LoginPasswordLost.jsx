import React from 'react';
import Input from '../form/Input';
import Button from '../form/Button';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import { PASSWORD_LOST } from '../../api';
import Error from '../helper/Error';
import Head from '../helper/Head';

export default function LoginPasswordLost() {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if(login.validate()) {
      const { url, options } = PASSWORD_LOST({
          login: login.value, 
          url: window.location.href.replace('perdeu', 'resetar')
        });
  
     const { json } = await request(url, options);
     console.log(json)
    }
  }
  return (
    <section className='animeLeft'>
      <Head title="Perdeu a senha" />
      <h1 className='title'>Perdeu a senha?</h1>
      { data ? (<p style={{ color: '#4c1' }}>{data}</p>) : (
      <form onSubmit={handleSubmit}>
        <Input label="E-mail/Usuário" type="text" name="email" {...login}/>
        { loading ? <Button disabled>Enviando...</Button> : <Button>Enviar e-mail</Button> }
      </form>
      )}
      <Error error={error}/>
    </section>
  )
}