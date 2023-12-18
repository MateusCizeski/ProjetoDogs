import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Error from '../helper/Error';
import Loading from '../helper/Loading';
import Head from '../helper/Head';
import PhotoContent from './PhotoContent';
import { PHOTO_PAGE_GET } from '../../api';

export default function Photo() {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_PAGE_GET(id);
    request(url, options);
  }, [request, id]);

  if(error) return <Error error={error}/>
  if(loading) return <Loading />
  if(data) return <section className="container mainContainer">
                          <Head title={data.photo.title} />
                          <PhotoContent single={true} data={data}/>
                  </section>
    else return null
}
