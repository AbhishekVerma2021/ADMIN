// PricingCard.js
import React, { useState } from 'react';
import './PricingCard.css'; // Make sure to create a CSS file with the same name
import ViewPlanDialog from '../ViewPlanDialog';
import { Button } from '@mui/material';


const PricingCard = (props) => {
  const [openEditDialog, setOpenEditDialog] = useState(false);
  // console.log(price)
  const {
    priceId,
    productId,
    planName,
    interval,
    price,
    _id,
    metaId,
    trialDays,
    hotelCount,
    priceColor,
    buttonText,
  } = props;
  console.log(price);
  return (
    <div className="pricing-card">
      <div className="card-header">
        <h2 className='carPlanName'>{planName}</h2>
        <div className='hotelCountForplan'>Trial days for this plan: {trialDays}</div>
        <p className="price" style={{ backgroundColor: priceColor }}>
          <span>
            {price}
          </span>
          <span className="frequency">/{interval}</span>
        </p>
      </div>
      {/* <ul className="features-list">
        <div className='featuresHeader'>Features:</div>
        {features.map((feature, index) => (
          <li key={index} className={feature.available ? 'available plansFeature' : 'unavailable plansFeature'}>
            {feature.name}
          </li>
        ))}
      </ul> */}
      <Button variant='outlined' sx={{ color: `${priceColor} !important`, border: `2px solid ${priceColor}`, width: '150px' }} className="start-trial-btn" onClick={() => setOpenEditDialog(true)}>Edit Plan</Button>
      <ViewPlanDialog planName={planName} trialPeriod={trialDays} amount={price} open={openEditDialog} planId={priceId} setOpenEditDialog={setOpenEditDialog} />
    </div>
  );
};

export default PricingCard;
