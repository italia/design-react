import React, { useState } from 'react';
import { Accordion, AccordionHeader, AccordionBody } from '../../src';

const CollapseNestedExample = () => {
  const [collapseOpen1, setCollapseOpen1] = useState(true);
  const [collapseOpen2, setCollapseOpen2] = useState(false);
  const [collapseOpen3, setCollapseOpen3] = useState(false);
  const [nestedCollapseOpen1, setNestedCollapseOpen1] = useState(true);
  const [nestedCollapseOpen2, setNestedCollapseOpen2] = useState(false);
  const [nestedCollapseOpen3, setNestedCollapseOpen3] = useState(false);
  return (
    <Accordion>
      <AccordionHeader
        active={collapseOpen1}
        onToggle={() => setCollapseOpen1(!collapseOpen1)}
      >
        Collapse header #1
      </AccordionHeader>
      <AccordionBody active={collapseOpen1}>
        <Accordion>
          <AccordionHeader
            active={nestedCollapseOpen1}
            onToggle={() => setNestedCollapseOpen1(!nestedCollapseOpen1)}
          >
            Nested panel header #1
          </AccordionHeader>
          <AccordionBody active={nestedCollapseOpen1}>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch.
          </AccordionBody>

          <AccordionHeader
            active={nestedCollapseOpen2}
            onToggle={() => setNestedCollapseOpen2(!nestedCollapseOpen2)}
          >
            Nested panel header #2
          </AccordionHeader>
          <AccordionBody active={nestedCollapseOpen2}>
            Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
            farm-to-table, raw denim aesthetic synth nesciunt you probably
            haven&apos;t heard of them accusamus labore sustainable VHS.
          </AccordionBody>

          <AccordionHeader
            active={nestedCollapseOpen3}
            onToggle={() => setNestedCollapseOpen3(!nestedCollapseOpen3)}
          >
            Nested panel header #3
          </AccordionHeader>
          <AccordionBody active={nestedCollapseOpen3}>
            Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
            tempor, sunt aliqua put a bird on it squid single-origin coffee
            nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
            beer labore wes anderson cred nesciunt sapiente ea proident.
          </AccordionBody>
        </Accordion>
      </AccordionBody>

      <AccordionHeader
        active={collapseOpen2}
        onToggle={() => setCollapseOpen2(!collapseOpen2)}
      >
        Collapse header #2
      </AccordionHeader>
      <AccordionBody active={collapseOpen2}>
        Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
        farm-to-table, raw denim aesthetic synth nesciunt you probably
        haven&apos;t heard of them accusamus labore sustainable VHS.
      </AccordionBody>

      <AccordionHeader
        active={collapseOpen3}
        onToggle={() => setCollapseOpen3(!collapseOpen3)}
      >
        Collapse header #3
      </AccordionHeader>
      <AccordionBody active={collapseOpen3}>
        Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
        anderson cred nesciunt sapiente ea proident.
      </AccordionBody>
    </Accordion>
  );
};

export default CollapseNestedExample;
