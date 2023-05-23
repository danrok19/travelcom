import React from 'react';
import { useFetchDataQuery } from '../../store';
import img from '../../Assets/landscape.png';
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'
import './main.css';

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
              <img src={img} alt={dataCard.destTitle} />
            </div>
            <div className="cardInfo">
              <h4 className="destTitle">
                {dataCard.destTitle}
              </h4>
              <span className="continent flex">
                <HiOutlineLocationMarker />
                <span className='name'>{dataCard.location}</span>
              </span>
              <div className='fees flex'>
                <div className="grade">
                  <span>{dataCard.grade}<small>+1</small></span>
                </div>
                <div className="price">
                  <h5>{dataCard.fees}</h5>
                </div>
              </div>
              <div className="desc">
                <p>{dataCard.description}</p>
              </div>
              <button className="btn flex">
                DETAILS <HiOutlineClipboardCheck className='icon'/>
              </button>
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
