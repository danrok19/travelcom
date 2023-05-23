import React from 'react';
import { useFetchDataQuery } from '../../store';
import img from '../../Assets/landscape.png';

const Main = () => {

  const { data, error, isLoading } = useFetchDataQuery();
  // console.log("W Mainie: ", data);

  let content;

    if(isLoading){
        content = <div className="text-white h-screen">Loading...</div>
    }
    else if(error){
        content = <div className="text-white h-screen">Something has crashed...</div>
    }
    else{
      content = data.map((dataCard) => {
        return (
          <div key={dataCard.id} className='singleDestination'>
            <div className='imageDiv'>
              <img src={img} alt="img" />
            </div>
          </div>
        )
      })
    }


  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {content}
      </div>

    </section>
  )
}

export default Main
