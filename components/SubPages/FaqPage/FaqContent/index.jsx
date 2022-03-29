import React from 'react';
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';


const FaqContent = ({ title, uuid, description }) => {
  return (
    <AccordionItem uuid={uuid}>
      <AccordionItemHeading>
        <AccordionItemButton>
          {title}
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <p>
          {description}
        </p>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

export default FaqContent;