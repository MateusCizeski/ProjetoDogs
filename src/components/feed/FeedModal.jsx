import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../../hooks/useFetch';
import { useEffect } from 'react';
import { PHOTO_GET } from '../../api';
import Error from '../helper/Error';
import Loading from '../helper/Loading';
import PhotoContent from '../photo/PhotoContent';

export default function FeedModal({ foto, setModalPhoto }) {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(foto.id);
    request(url, options)
  }, [foto, request]);

  function handleOutsideClick(event) {
    if(event.target === event.currentTarget) setModalPhoto(null);
  } 

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
    {error && <Error error={error} />}
    {loading && <Loading />}
    {data && <PhotoContent data={data}/>}
    </div>
  )
}
