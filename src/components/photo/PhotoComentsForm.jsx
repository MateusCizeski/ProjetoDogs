import React from 'react';
import { useState } from 'react';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';
import useFetch from '../../hooks/useFetch';
import { COMMENT_POST } from '../../api';
import Error from '../helper/Error';
import styles from './PhotoCommentsForm.module.css';

export default function PhotoComentsForm({ id, setComments, single }) {
    const [comment, setComment] = useState('');
    const { request, error } =  useFetch();

    async function handleSubmit(event) {
        event.preventDefault();
        const { url, options } = COMMENT_POST(id, { comment });
        const {response, json} = await request(url, options);

        if(response.ok) {
          setComment('');
          setComments((comments) => [...comments, json]);
        }
    }

  return (
    <form className={`${styles.form} ${single ? styles.single : ''}`} onSubmit={handleSubmit}>
    <textarea 
        className={styles.textarea}
        id='comment'
        name='comment'
        placeholder='Coment...'
        value={comment}
        onChange={({ target }) => setComment(target.value)}
    />
    <button className={styles.button}><Enviar /></button>
    <Error error={error} />
    </form>
  )
}
