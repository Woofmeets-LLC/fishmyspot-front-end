import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { ownerFAQData } from '../utils/faq-data';

const OwnerFAQ = ({ sectionTitle = 'FAQ', titleClass = '' }) => {
  return (
    <>
      <div className="mb-5 space-y-2 text-primary md:mb-6 md:space-y-3 lg:mb-10 lg:space-y-5">
        <h1
          className={`font-food-truck text-2xl uppercase md:text-3xl lg:text-4xl 2xl:text-5xl ${titleClass}`}
        >
          {sectionTitle ? sectionTitle : 'FAQ'}
        </h1>
      </div>
      <Accordion preExpanded={ownerFAQData?.[0]?.id}>
        {ownerFAQData?.map((faq) => (
          <AccordionItem key={faq?.id} uuid={faq?.id}>
            <AccordionItemHeading>
              <AccordionItemButton>{faq?.title}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>{faq?.description}</AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default OwnerFAQ;
