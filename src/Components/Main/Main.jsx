import React from 'react';
import { useFetchDataQuery } from '../../store';

const Main = () => {


    const { data, error, isLoading } = useFetchDataQuery();

  return (
    <section className='main container section'>
        <div className="secTitle">
            <h3 className="title">
                Most visited destinations
            </h3>
        </div>

        <div className="secContent grid">

        </div>

    </section>
  )
}

export default Main
