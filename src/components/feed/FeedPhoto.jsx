import React, { useEffect } from 'react';
import FeedPhotoItem from './FeedPhotoItem';
import useFetch from '../../hooks/useFetch';
import { PHOTOS_GET } from '../../api';
import Error from '../helper/Error';
import Loading from '../helper/Loading';
import styles from './FeedPhotos.module.css';

export default function FeedPhoto({page, user, setModalPhoto, setInfinite }) {
    const { data, loading, error, request } = useFetch();

    useEffect(() => {
        async function fetchPhotos() {
          const total = 6;

            const { url, options } = PHOTOS_GET({page, total, user: 0});  
            const { response, json } = await request(url, options);
            if(response && response.ok && json.length < total) {
              setInfinite(false);
            }
        }
        fetchPhotos();
    }, [request, user, page, setInfinite]);

    if(error) return <Error error={error}/>
    if(loading) return <Loading />
    if(data) {
      return (
        <ul className={`${styles.feed} animeLeft`}>
        {data.map((foto) => (
            <FeedPhotoItem key={foto.id} foto={foto} setModalPhoto={setModalPhoto}/>  
        ))}
        </ul>
      );

    }else {
      return null;
    } 
}
