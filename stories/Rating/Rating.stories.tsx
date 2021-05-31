import React, { useState } from 'react';

import { Rating } from '../../src';

export const RatingBase = () => {
  return (
    <Rating
      legend={'Rating'}
      value={0}
      inputs={['star1a', 'star2a', 'star3a', 'star4a', 'star5a']}
      name='ratingA'
    />
  );
};

export const RatingConLabel = () => {
  const [rating, setRating] = useState(4);
  return (
    <Rating
      value={rating}
      legend={
        <>
          <span className='sr-only'>Valutazione</span>{' '}
          <span>{rating} stelle</span> <span className='sr-only'>su 5</span>
        </>
      }
      inputs={['star1b', 'star2b', 'star3b', 'star4b', 'star5b']}
      name='ratingB'
      onChange={(e) => setRating(Number(e.target.value))}
    />
  );
};

export const RatingReadOnly = () => (
  <Rating
    value={4}
    readOnly
    legend={{ content: 'Valutazione 4 stelle su 5', srOnly: true }}
    inputs={['star1c', 'star2c', 'star3c', 'star4c', 'star5c']}
    name='ratingC'
  />
);

export default {
  title: 'Componenti/Rating'
};

RatingBase.args = {
  value: null,
  legend: 'Rating'
};
RatingBase.argTypes = {
  value: {
    control: {
      type: 'range',
      options: { min: 1, max: 5, step: 1 }
    }
  }
};

RatingConLabel.story = {
  name: 'Rating con Label'
};

RatingReadOnly.story = {
  name: 'Rating read-only'
};
