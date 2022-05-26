import React, { Fragment } from 'react';

const Services = () => {
  return (
    <Fragment>
      <section className='testiomonial'>
        <h1>Our Founder's Video</h1>
        <video width='750' height='500' controls>
          <source src='shortvideo.mp4' type='video/mp4' />
        </video>
      </section>
    </Fragment>
  );
};

export default Services;
