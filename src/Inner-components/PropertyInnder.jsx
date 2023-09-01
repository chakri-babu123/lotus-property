import React from 'react';
import '../App.css';
import Pdata from './Pdata';
import Proeprtycard from './Propertycard';

function Propertyinnder() {
  return (
    <>
  <section id="blog" className="blog">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="section-header">
          <h2>Properties</h2>
          <p>Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet deleniti fignissimos eos
            quam</p>
        </div>
        <div className="row gy-4 posts-list">
        {
                Pdata.map((val, ind)=>{
                    return<Proeprtycard
                    pimgsrc={val.pimgsrc}
                    tittle={val.tittle}
                    date={val.date}
                    />
                })
               }
        </div>
      

      </div>
    </section>
   
    </>
  );
}

export default Propertyinnder;