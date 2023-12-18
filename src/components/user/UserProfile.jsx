import React from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../feed/Feed';
import Head from '../helper/Head';

export default function UserProfile() {
    const { user } = useParams();

  return (
    <section className='container mainSection'>
    <Head title={user} />
    <h1 className='title'>{user}</h1>
      <Feed user={user}/>
    </section>
  )
}
