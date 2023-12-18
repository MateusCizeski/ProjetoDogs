import React, { useEffect, useState } from 'react'
import Input from '../form/Input';
import Button from '../form/Button';
import useFetch from '../../hooks/useFetch';
import { PASSWORD_RESET } from '../../api';
import useForm from '../../hooks/useForm';
import Error from '../helper/Error';
import { useNavigate } from 'react-router-dom';
import Head from '../helper/Head';

const LoginPasswordReset = () => {
  const [login, setLogin] = useState('');
  const [key, setKey] = useState('');
  const password = useForm();

  useEffect(() =>{
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    const { error, loading, request } = useFetch();
    const navigate = useNavigate();

    if(key) setKey(key)
    if(login) setLogin(login)
    
  }, []); 

  async function handleSubmit(event) {
    event.preventDefault();
    if(password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value
      }); 
  
      const response = await request(url, options);
  
      if(response.ok) navigate('/login')
    }
  }

  return (
    <section className='animeLeft'>
        <Head title="resete a senha" />
        <h1 className='title'>Resete a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova senha" type="password" name="password" {...password}/>
        {loading ? <Button>Resetando...</Button> : <Button>Resetar</Button>}
      </form>
      <Error error={error}/>
    </section>
  )
}

export default LoginPasswordReset
