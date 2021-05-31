import React from 'react';

import {
  Pager,
  PagerItem,
  PagerLink,
  Form,
  FormGroup,
  Icon,
  Input,
  Label
} from '../../src';
import PageChangerExample from './PageChangerExample';

const MoreComponent = () => (
  <Pager className='mb-3' aria-label='Esempio di paginazione'>
    <ul className='pagination'>
      <PagerItem>
        <PagerLink previous href='#'>
          <Icon icon='it-chevron-left' aria-hidden />
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>1</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>…</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>24</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>25</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink aria-current='page' href='#'>
          26
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>27</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>28</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>…</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>50</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href='#'>
          <Icon icon='it-chevron-right' aria-hidden />
        </PagerLink>
      </PagerItem>
    </ul>
  </Pager>
);

export const PageChanger = () => (
  <Pager className='mb-3' aria-label='Esempio di paginazione'>
    <ul className='pagination'>
      <PagerItem>
        <PagerLink previous href='#'>
          <Icon icon='it-chevron-left' aria-hidden />
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>1</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>…</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>24</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>25</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink aria-current='page' href='#'>
          26
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>27</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>28</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>…</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>50</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href='#'>
          <Icon icon='it-chevron-right' aria-hidden />
        </PagerLink>
      </PagerItem>
    </ul>
    <PageChangerExample />
  </Pager>
);

const PageJumper = () => (
  <Form>
    <FormGroup>
      <Input
        id='jumpToPage'
        type='text'
        className='form-control'
        maxLength={2}
      />
      <Label for='jumpToPage'>Vai a ...</Label>
    </FormGroup>
  </Form>
);

export const JumpToPage = () => (
  <Pager className='mb-3' aria-label='Esempio di paginazione'>
    <ul className='pagination'>
      <PagerItem>
        <PagerLink previous href='#'>
          <Icon icon='it-chevron-left' aria-hidden />
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>1</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>…</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>24</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>25</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink aria-current='page' href='#'>
          26
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>27</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>28</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>…</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>50</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href='#'>
          <Icon icon='it-chevron-right' aria-hidden />
        </PagerLink>
      </PagerItem>
    </ul>
    <PageJumper />
  </Pager>
);

export const SimpleMode = () => (
  <Pager className='mb-3' aria-label='Esempio di paginazione'>
    <ul className='pagination'>
      <PagerItem disabled>
        <PagerLink previous href='#'>
          <Icon icon='it-chevron-left' aria-hidden />
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>1</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>/</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>5</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href='#'>
          <Icon icon='it-chevron-right' aria-hidden />
        </PagerLink>
      </PagerItem>
    </ul>
  </Pager>
);

export const LinkTestuali = () => (
  <Pager className='mb-3' aria-label='Esempio di paginazione'>
    <ul className='pagination'>
      <PagerItem>
        <PagerLink previous href='#' className='text'>
          Precedente
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>1</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>…</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>24</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>25</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink aria-current='page' href='#'>
          26
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>27</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>28</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>…</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>50</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href='#' className='text'>
          Successiva
        </PagerLink>
      </PagerItem>
    </ul>
  </Pager>
);

export const TotalNumber = () => (
  <Pager
    total={{ ariaLabel: 'Pagina', label: ' 24 di 50' }}
    aria-label='Esempio di paginazione'
  >
    <ul className='pagination'>
      <PagerItem>
        <PagerLink previous href='#'>
          <Icon icon='it-chevron-left' aria-hidden />
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>1</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>…</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink aria-current='page' href='#'>
          24
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>25</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink href='#'>26</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>27</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>28</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>…</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>50</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href='#'>
          <Icon icon='it-chevron-right' aria-hidden />
        </PagerLink>
      </PagerItem>
    </ul>
  </Pager>
);

export default {
  title: 'Componenti/Pager/Funzioni aggiuntive'
};

export const _More = MoreComponent;

PageChanger.story = {
  name: 'Page changer'
};

JumpToPage.story = {
  name: 'Jump to page'
};

SimpleMode.story = {
  name: 'Simple mode'
};

LinkTestuali.story = {
  name: 'Link testuali'
};

TotalNumber.story = {
  name: 'Total number'
};
