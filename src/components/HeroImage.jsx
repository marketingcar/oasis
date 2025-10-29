import React from 'react';
import OptimizedImage from '@/components/OptimizedImage';

const HeroImage = () => {
  return (
    <div className='flex justify-center items-center'>
      <OptimizedImage
        src='https://imagedelivery.net/LqiWLm-3MGbYHtFuUbcBtA/119580eb-abd9-4191-b93a-f01938786700/public'
        alt='Hostinger Horizons'
        priority={true}
      />
    </div>
  );
};

export default HeroImage;