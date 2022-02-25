import React from 'react';
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';


const FaqContent = ({ title, uuid }) => {
  return (
    <AccordionItem uuid={uuid}>
      <AccordionItemHeading>
        <AccordionItemButton>
          {title}
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <p>
          Fish my sopt  tool lets you set your prices to automatically go up or down based on changes in demand for listings
          like yours. You’re always responsible for your price, so Smart Pricing is controlled by other pricing settings you choose, and
          you can adjust nightly prices any time. Smart Pricing is based on the type and location of your listing, the season, demand
          and other factors (like events in your area).
        </p>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

export default FaqContent;