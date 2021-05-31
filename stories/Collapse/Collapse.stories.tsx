import React, { useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
  Collapse,
  Card,
  CardBody
} from '../../src';

export default {
  title: 'Componenti/Collapse'
};

export const Esempi = () => {
  const [collapse, setCollapse] = useState(false);

  const toggle = () => {
    setCollapse(!collapse);
  };
  return (
    <div>
      <Button color='primary' onClick={toggle} aria-expanded={collapse}>
        Button con onClick
      </Button>
      <Collapse isOpen={collapse}>
        <Card>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export const GruppiDiElementiRichiudibili = () => {
  const [collapseOpen1, setCollapseOpen1] = useState(true);
  const [collapseOpen2, setCollapseOpen2] = useState(false);
  const [collapseOpen3, setCollapseOpen3] = useState(false);
  return (
    <Accordion>
      <AccordionHeader
        active={collapseOpen1}
        onToggle={() => setCollapseOpen1(!collapseOpen1)}
      >
        Collapsible Group Item #1
      </AccordionHeader>
      <AccordionBody active={collapseOpen1}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
        skateboard dolor brunch.
      </AccordionBody>

      <AccordionHeader
        active={collapseOpen2}
        onToggle={() => setCollapseOpen2(!collapseOpen2)}
      >
        Collapsible Group Item #2
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
        Collapsible Group Item #3
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

GruppiDiElementiRichiudibili.story = {
  name: 'Gruppi di elementi richiudibili'
};

export const _Accordion = () => {
  const [collapseElementOpen, setCollapseElement] = useState('');
  return (
    <Accordion>
      <AccordionHeader
        active={collapseElementOpen === '1'}
        onToggle={() => setCollapseElement('')}
      >
        Accordion Group Item #1
      </AccordionHeader>
      <AccordionBody active={collapseElementOpen === '1'}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
        skateboard dolor brunch.
      </AccordionBody>

      <AccordionHeader
        active={collapseElementOpen === '2'}
        onToggle={() => setCollapseElement('')}
      >
        Accordion Group Item #2
      </AccordionHeader>
      <AccordionBody active={collapseElementOpen === '2'}>
        Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
        farm-to-table, raw denim aesthetic synth nesciunt you probably
        haven&apos;t heard of them accusamus labore sustainable VHS.
      </AccordionBody>

      <AccordionHeader
        active={collapseElementOpen === '3'}
        onToggle={() => setCollapseElement('')}
      >
        Accordion Group Item #3
      </AccordionHeader>
      <AccordionBody active={collapseElementOpen === '3'}>
        Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
        anderson cred nesciunt sapiente ea proident.
      </AccordionBody>
    </Accordion>
  );
};

export const CollapseEAccordionInnestati = () => {
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

CollapseEAccordionInnestati.story = {
  name: 'Collapse e Accordion innestati'
};

export const HeaderAttivi = () => {
  const [collapseOpen1, setCollapseOpen1] = useState(true);
  const [collapseOpen2, setCollapseOpen2] = useState(false);
  const [collapseOpen3, setCollapseOpen3] = useState(false);
  return (
    <Accordion background='active'>
      <AccordionHeader
        active={collapseOpen1}
        onToggle={() => setCollapseOpen1(!collapseOpen1)}
      >
        Collapsible Group Item #1
      </AccordionHeader>
      <AccordionBody active={collapseOpen1}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
        skateboard dolor brunch.
      </AccordionBody>

      <AccordionHeader
        active={collapseOpen2}
        onToggle={() => setCollapseOpen2(!collapseOpen2)}
      >
        Collapsible Group Item #2
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
        Collapsible Group Item #3
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

HeaderAttivi.story = {
  name: 'Header Attivi - sfondo primario'
};

export const HeaderHover = () => {
  const [collapseOpen1, setCollapseOpen1] = useState(true);
  const [collapseOpen2, setCollapseOpen2] = useState(false);
  const [collapseOpen3, setCollapseOpen3] = useState(false);
  return (
    <Accordion background='hover'>
      <AccordionHeader
        active={collapseOpen1}
        onToggle={() => setCollapseOpen1(!collapseOpen1)}
      >
        Collapsible Group Item #1
      </AccordionHeader>
      <AccordionBody active={collapseOpen1}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
        skateboard dolor brunch.
      </AccordionBody>

      <AccordionHeader
        active={collapseOpen2}
        onToggle={() => setCollapseOpen2(!collapseOpen2)}
      >
        Collapsible Group Item #2
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
        Collapsible Group Item #3
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

HeaderHover.story = {
  name: 'Header colorati on Hover - sfondo primario'
};

export const IconaSinistra = () => {
  const [collapseOpen1, setCollapseOpen1] = useState(true);
  const [collapseOpen2, setCollapseOpen2] = useState(false);
  const [collapseOpen3, setCollapseOpen3] = useState(false);
  return (
    <Accordion iconLeft>
      <AccordionHeader
        active={collapseOpen1}
        onToggle={() => setCollapseOpen1(!collapseOpen1)}
      >
        Collapsible Group Item #1
      </AccordionHeader>
      <AccordionBody active={collapseOpen1}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
        skateboard dolor brunch.
      </AccordionBody>

      <AccordionHeader
        active={collapseOpen2}
        onToggle={() => setCollapseOpen2(!collapseOpen2)}
      >
        Collapsible Group Item #2
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
        Collapsible Group Item #3
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

HeaderHover.story = {
  name: 'Icona a sinistra'
};
