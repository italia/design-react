/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardReadMore,
  Container,
  Icon,
  Input,
  Row,
  Col,
  LinkListItem,
  LinkList,
  UncontrolledCollapse
} from '../../../src';

import CompleteHeader from '../shared/Header';
import Footer from '../shared/Footer';

const Servizi = ({ theme, townName, townTagLine }) => {
  // TODO find a better way to handle this
  // Storyshot does not use the dom so can't render refs
  // to fix the problem we append the elements manually
  // this fixes tests without touching the rendered components
  // nor storybook
  // https://github.com/storybookjs/storybook/issues/886
  // https://github.com/infinitered/addon-storyshots#using-createnodemock-to-mock-refs
  const div = document.createElement('div');
  div.setAttribute('id', 'altri-servizi');
  document.body.appendChild(div);

  return (
    <>
      <CompleteHeader
        sticky
        theme={theme}
        townName={townName}
        townTagLine={townTagLine}
      />
      <main>
        <Container tag='section' id='briciole' className='px-4 my-4'>
          <Row>
            <Col className='px-lg-4'>
              <nav aria-label='breadcrumb' className='breadcrumb-container'>
                <Breadcrumb>
                  <BreadcrumbItem>
                    <a href='/design-comuni-prototipi/esempi/bootstrap-italia/template-homepage.html'>
                      Home
                    </a>
                    <span className='separator'>/</span>
                  </BreadcrumbItem>
                  <BreadcrumbItem aria-current='page' active>
                    Servizi
                  </BreadcrumbItem>
                </Breadcrumb>
              </nav>
            </Col>
          </Row>
        </Container>
        <Container tag='section' id='intro' className='px-4 my-4'>
          <Row>
            <Col lg={7} className='px-lg-4 py-lg-2'>
              <h1>Servizi</h1>
              <p>
                Donec in consequat nunc. Duis semper fermentum lacus, ac
                condimentum justo auctor a. Nam erat erat, porta vel pharetra
                in, ullamcorper vel turpis.
              </p>
              <div className='form-group mt-5'>
                <form>
                  <Input
                    id='ricerca-servizi'
                    type='search'
                    label='Cerca contenuti in "Servizi"'
                  />
                  <span aria-hidden='true' className='autocomplete-icon'>
                    <Icon icon='it-search' size='sm' />
                  </span>
                </form>
              </div>
              <div id='filtri-ricerca-amministrazione'>
                <h6 className='small'>Filtri</h6>
                <div className='chip chip-lg'>
                  <span className='chip-label'>Tutto</span>
                  <button>
                    <Icon icon='it-close' />
                    <span className='sr-only'>Elimina label</span>
                  </button>
                </div>
                <div className='ml-2 d-inline'>
                  <button className='btn btn-icon btn-outline-primary btn-sm align-top'>
                    <Icon icon='it-plus' color='primary' />
                    <span>Aggiungi filtro</span>
                  </button>
                </div>
              </div>
            </Col>
            <Col lg={{ size: 4, offset: 1 }} className='pt-5 pt-lg-2'>
              <LinkList className='footer-list clearfix'>
                {[
                  'Tutti i Servizi',
                  'Anagrafe e stato civile',
                  'Cultura e tempo libero',
                  'Vita lavorativa',
                  'Attività produttiva e commercio',
                  'Appalti pubblici',
                  'Catasto e urbanistica'
                ].map((label, i) => {
                  if (i === 0) {
                    return (
                      <LinkListItem key={label} tag='h3' header>
                        {label}
                      </LinkListItem>
                    );
                  }
                  return (
                    <LinkListItem key={label} href='#'>
                      <span>{label}</span>
                    </LinkListItem>
                  );
                })}
                <LinkListItem
                  className='large medium left-icon'
                  aria-expanded='true'
                  aria-controls='altri-servizi'
                  id='altri-servizi'
                >
                  <Icon
                    icon='it-more-items'
                    color='primary'
                    className='right'
                  />
                </LinkListItem>
                <UncontrolledCollapse
                  toggler='#altri-servizi'
                  className='link-sublist px-0'
                  tag='ul'
                >
                  {[
                    'Turismo',
                    'Mobilità e trasporti',
                    'Educazione e formazione',
                    'Giustizia e sicurezza pubblica',
                    'Tributi e finanze',
                    'Ambiente',
                    'Salute, benessere e assistenza',
                    'Autorizzazioni',
                    'Agricoltura'
                  ].map((label) => (
                    <LinkListItem key={label}>{label}</LinkListItem>
                  ))}
                </UncontrolledCollapse>
                <LinkListItem className='medium' href='#'>
                  <span>Tutti i servizi</span>
                </LinkListItem>
              </LinkList>
            </Col>
          </Row>
        </Container>
        <section id='in-evidenza'>
          <div className='bg-light py-5'>
            <Container className='px-4'>
              <Row>
                <Col>
                  <h3 className='mb-4'>In evidenza</h3>
                </Col>
              </Row>
              <Row>
                {[
                  { title: 'Luoghi', icon: 'it-pa', flagIcon: true },
                  { title: 'Funzionari amministrativi', icon: 'it-user' },
                  { title: 'Uffici', icon: 'it-pa' },
                  { title: 'Luoghi', icon: 'it-pa' },
                  { title: 'Politici', icon: 'it-user' },
                  { title: 'Luoghi', icon: 'it-pa' }
                ].map(({ title, icon, flagIcon }, i) => (
                  <Col size='12' sm={6} lg={4} key={`${title}-${i}`}>
                    <article className='card-wrapper card-space'>
                      <Card
                        noWrapper
                        className='card-bg card-big rounded shadow'
                      >
                        <div
                          className={`flag-icon ${flagIcon ? '' : 'invisible'}`}
                        ></div>
                        <div className='etichetta'>
                          <Icon icon={icon} />
                          <span>{title}</span>
                        </div>
                        <CardBody>
                          <CardTitle tag='h5'>
                            {i % 2
                              ? 'Lorem ipsum dolor sit amet '
                              : `Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor…`}
                          </CardTitle>
                          <CardText>
                            {i % 2
                              ? `Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore et
                              dolore magna aliqua.`
                              : `Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed.`}
                          </CardText>
                          <CardReadMore
                            iconName='it-arrow-right'
                            text='Leggi di più'
                            href='#'
                          />
                        </CardBody>
                      </Card>
                    </article>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </section>
        <section>
          <div className='py-5'>
            <Container className='px-4'>
              <Row>
                <Col>
                  <h3 className='mb-4'>Tutti i Servizi</h3>
                </Col>
              </Row>
              <Row>
                {[
                  'Anagrafe e stato civile',
                  'Cultura e tempo libero',
                  'Vita lavorativa',
                  'Attività produttiva e commercio',
                  'Appalti pubblici',
                  'Catasto e urbanistica',
                  'Turismo',
                  'Mobilità e trasporti',
                  'Educazione e formazione',
                  'Giustizia e sicurezza pubblica',
                  'Tributi e finanze',
                  'Ambiente',
                  'Salute, benessere e assistenza',
                  'Autorizzazioni',
                  'Agricoltura'
                ].map((label) => {
                  return (
                    <Col size='12' sm={6} lg={4} key={label}>
                      <Card>
                        <CardBody>
                          <CardTitle tag='h5' className='big-heading'>
                            {label}
                          </CardTitle>
                          <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </CardText>
                          <CardReadMore
                            iconName='it-arrow-right'
                            text='Leggi di più'
                            href='#'
                          />
                        </CardBody>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </div>
          <div className='py-5'>
            <Container className='px-4'>
              <Row>
                <Col>
                  <h3 className='mb-4'>Argomenti</h3>
                </Col>
              </Row>
              <Row>
                <div className='col text-center'>
                  {['Cultura', 'Muoversi', 'Argomento di esempio'].map(
                    (label) => (
                      <a href='#' key={label}>
                        <span className='chip chip-simple chip-primary'>
                          <span className='chip-label'>{label}</span>
                        </span>
                      </a>
                    )
                  )}
                </div>
              </Row>
            </Container>
          </div>
        </section>
      </main>
      <Footer townName={townName} townTagLine={townTagLine} />
    </>
  );
};

Servizi.args = {
  theme: '',
  townName: 'Nome del Comune',
  townTagLine: 'Uno dei tanti Comuni d Italia'
};
Servizi.argTypes = {
  townName: {
    control: {
      name: 'Comune'
    }
  },
  townTagLine: {
    control: {
      name: 'Motto Comune'
    }
  },
  theme: {
    control: {
      name: 'Tema',
      type: 'select',
      options: ['', 'light', 'dark']
    }
  }
};

export default Servizi;
