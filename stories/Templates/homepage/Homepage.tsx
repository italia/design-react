/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react';

import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  CardCategory,
  CardReadMore,
  Container,
  Icon,
  Row,
  Col,
  LinkListItem,
  LinkList
} from '../../../src';

import CompleteHeader from '../shared/Header';
import Footer from '../shared/Footer';

const Homepage = ({ theme, townName, townTagLine }) => {
  return (
    <>
      <CompleteHeader
        sticky
        theme={theme}
        townName={townName}
        townTagLine={townTagLine}
      />
      <section id='head-section'>
        <Container>
          <Row>
            <Col lg={{ size: 6, offset: 1, order: 2 }}>
              <img
                src='https://picsum.photos/800/600'
                title='img title'
                alt='imagealt'
                className='img-fluid'
              />
            </Col>
            <Col lg={{ size: 5, order: 1 }}>
              <Card>
                <CardBody className='pb-5'>
                  <CardCategory date='18 mag 2018' iconName='it-calendar'>
                    Notizie
                  </CardCategory>
                  <CardTitle tag='h4'>
                    Parte l&#39;estate con oltre 300 eventi in centro e nei
                    quartieri, tutti gli eventi previsti
                  </CardTitle>
                  <CardText>
                    Inaugurazione lunedì 2 luglio con il concerto gratuito in
                    piazza XX Settembre degli Sweet Soul Revue. Sul palco 20
                    musicisti da tutto il mondo.
                  </CardText>
                  <div className='chip chip-simple chip-primary'>
                    <a href='#' className='chip-label'>
                      Estate in città
                    </a>
                  </div>
                  <CardReadMore
                    text='Tutte le novità'
                    className='pb-3'
                    href='#'
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section id='calendario'>
        <div className='section section-muted pb-5 pt-0'>
          <Container>
            <Row>
              <div className='card-wrapper card-teaser-wrapper card-overlapping card-teaser-wrapper-equal card-teaser-block-3'>
                <Card
                  teaser
                  noWrapper
                  className='card-teaser-image card-flex no-after rounded shadow'
                >
                  <div className='card-image-wrapper with-read-more pb-5'>
                    <CardBody className='p-4'>
                      <CardCategory>
                        <Icon icon='it-pa' />
                        Giunta e consiglio
                      </CardCategory>
                      <CardTitle className='font-weight-semibold'>
                        Mario Rossi
                      </CardTitle>
                      <CardText className='card-text'>
                        Sindaco della città
                      </CardText>
                    </CardBody>
                    <div className='card-image card-image-rounded pb-5'>
                      <CardImg
                        src='https://picsum.photos/150/200'
                        alt='Immagine di esempio'
                      />
                    </div>
                  </div>
                  <CardReadMore
                    className='pl-4'
                    iconName='it-arrow-right'
                    text="Tutta l'amministrazione"
                    href='/design-comuni-prototipi/esempi/bootstrap-italia/template-amministrazione.html'
                  />
                </Card>
                <Card teaser noWrapper className='no-after rounded shadow'>
                  <CardBody className='pb-5'>
                    <CardCategory>
                      <Icon icon='it-pa' />
                      Pagamenti
                    </CardCategory>
                    <CardTitle className='font-weight-semibold'>
                      TARI - Tassa dei rifiuti
                    </CardTitle>
                    <CardText>
                      La TARI è in scadenza, controlla il tuo pagamento nella
                      tua area personale.
                    </CardText>
                  </CardBody>

                  <CardReadMore
                    iconName='it-arrow-right'
                    text='Tutti i servizi'
                    href='#'
                  />
                </Card>
                <Card noWrapper teaser className='no-after rounded shadow'>
                  <CardBody className='pb-5'>
                    <CardCategory>
                      <Icon icon='it-pa' />
                      Bandi
                    </CardCategory>
                    <CardTitle className='font-weight-semibold'>
                      Come partecipare ad un bando
                    </CardTitle>
                    <CardText>
                      Tutte le informazioni e i documenti necessari per
                      partecipare.
                    </CardText>
                  </CardBody>

                  <CardReadMore
                    iconName='it-arrow-right'
                    text='Tutti i documenti'
                    href='/design-comuni-prototipi/esempi/bootstrap-italia/template-documenti.html'
                  />
                </Card>
              </div>
            </Row>
            <Row className='row-title pt-5 pb-3'>
              <h2>Calendario</h2>
              <div>
                <Button
                  color='secondary'
                  size='sm'
                  className='mt-1'
                  type='button'
                >
                  Tutto
                </Button>
                <Button
                  color='secondary'
                  size='sm'
                  className='mt-1 btn-icon'
                  outline
                  type='button'
                >
                  <Icon icon='it-pa' />
                  <span>Consigli comunali</span>
                </Button>
                <Button
                  color='secondary'
                  size='sm'
                  className='mt-1 btn-icon'
                  outline
                  type='button'
                >
                  <Icon icon='it-calendar' />
                  <span>Eventi</span>
                </Button>
                <Button
                  color='secondary'
                  size='sm'
                  className='mt-1 btn-icon'
                  outline
                  type='button'
                >
                  <Icon icon='it-settings' />
                  <span>Scadenze</span>
                </Button>
              </div>
            </Row>
            <Row className='row-calendar'>
              <div className='it-carousel-wrapper it-carousel-landscape-abstract-three-cols it-calendar-wrapper'>
                <div className='it-header-block'>
                  <div className='it-header-block-title'>
                    <h4 className='mb-0 text-center'>Settembre 2019</h4>
                  </div>
                </div>
                <div className='it-carousel-all owl-carousel it-card-bg owl-loaded owl-drag'>
                  <div className='owl-stage-outer'>
                    <div
                      className='owl-stage'
                      style={{
                        transform: 'translate3d(0px, 0px, 0px)',
                        transition: 'all 0s ease 0s',
                        width: '2664px'
                      }}
                    >
                      <div
                        className='owl-item active'
                        style={{ width: '296px' }}
                      >
                        <div className='it-single-slide-wrapper'>
                          <Card className='card-bg'>
                            <CardBody>
                              <CardTitle tag='h5'>
                                15<span>lun</span>
                              </CardTitle>
                              <CardText>
                                <a href='#'>Saldo TASI</a>
                              </CardText>
                              <CardText>
                                <a href='#'>
                                  Concerto gratuito piazza XX Settembre
                                </a>
                              </CardText>
                              <CardText>
                                <a href='#'>
                                  Convocazione Consiglio Comunale - Prima seduta
                                </a>
                              </CardText>
                              <CardText>
                                <a href='#'>Seconda rata TARI</a>
                              </CardText>
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                      <div
                        className='owl-item active'
                        style={{ width: '296px' }}
                      >
                        <div className='it-single-slide-wrapper'>
                          <Card className='card-bg'>
                            <CardBody>
                              <CardTitle tag='h5'>
                                16<span>mar</span>
                              </CardTitle>
                              <CardText>
                                <a href='#'>Saldo TASI</a>
                              </CardText>
                              <CardText>
                                <a href='#'>
                                  Concerto gratuito piazza XX Settembre
                                </a>
                              </CardText>
                              <CardText>
                                <a href='#'>
                                  Convocazione Consiglio Comunale - Prima seduta
                                </a>
                              </CardText>
                              <CardText>
                                <a href='#'>Seconda rata TARI</a>
                              </CardText>
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                      <div
                        className='owl-item active'
                        style={{ width: '296px' }}
                      >
                        <div className='it-single-slide-wrapper'>
                          <Card className='card-bg'>
                            <CardBody>
                              <CardTitle tag='h5'>
                                17<span>mer</span>
                              </CardTitle>
                              <CardText>
                                <a href='#'>Saldo TASI</a>
                              </CardText>
                              <CardText>
                                <a href='#'>
                                  Concerto gratuito piazza XX Settembre
                                </a>
                              </CardText>
                              <CardText>
                                <a href='#'>
                                  Convocazione Consiglio Comunale - Prima seduta
                                </a>
                              </CardText>
                              <CardText>
                                <a href='#'>Seconda rata TARI</a>
                              </CardText>
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                      <div
                        className='owl-item active'
                        style={{ width: '296px' }}
                      >
                        <div className='it-single-slide-wrapper'>
                          <Card className='card-bg'>
                            <CardBody>
                              <CardTitle tag='h5'>
                                18<span>giov</span>
                              </CardTitle>
                              <CardText>
                                <a href='#'>Saldo TASI</a>
                              </CardText>
                              <CardText>
                                <a href='#'>
                                  Concerto gratuito piazza XX Settembre
                                </a>
                              </CardText>
                              <CardText>
                                <a href='#'>
                                  Convocazione Consiglio Comunale - Prima seduta
                                </a>
                              </CardText>
                              <CardText>
                                <a href='#'>Seconda rata TARI</a>
                              </CardText>
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                      <div className='owl-item' style={{ width: '296px' }}>
                        <div className='it-single-slide-wrapper'>
                          <Card className='card-bg'>
                            <CardBody>
                              <h3 className='card-title mb-0'>
                                19<span>ven</span>
                              </h3>
                              <CardText>
                                <a href='#'>Saldo TASI</a>
                              </CardText>
                              <CardText>
                                <a href='#'>
                                  Concerto gratuito piazza XX Settembre
                                </a>
                              </CardText>
                              <CardText>
                                <a href='#'>
                                  Convocazione Consiglio Comunale - Prima seduta
                                </a>
                              </CardText>
                              <CardText>
                                <a href='#'>Seconda rata TARI</a>
                              </CardText>
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                      <div className='owl-item' style={{ width: '296px' }}>
                        <div className='it-single-slide-wrapper'>
                          <Card className='card-bg'>
                            <CardBody>
                              <CardTitle tag='h5'>
                                20<span>sab</span>
                              </CardTitle>
                              <CardText>
                                <a href='#'>Saldo TASI</a>
                              </CardText>
                              <CardText>
                                <a href='#'>
                                  Concerto gratuito piazza XX Settembre
                                </a>
                              </CardText>
                              <CardText>
                                <a href='#'>
                                  Convocazione Consiglio Comunale - Prima seduta
                                </a>
                              </CardText>
                              <CardText>
                                <a href='#'>Seconda rata TARI</a>
                              </CardText>
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                      <div className='owl-item' style={{ width: '296px' }}>
                        <div className='it-single-slide-wrapper'>
                          <Card className='card-bg'>
                            <CardBody>
                              <CardTitle tag='h5'>
                                21<span>dom</span>
                              </CardTitle>
                              <CardText>
                                <a href='#'>Saldo TASI</a>
                              </CardText>
                              <CardText>
                                <a href='#'>
                                  Concerto gratuito piazza XX Settembre
                                </a>
                              </CardText>
                              <CardText>
                                <a href='#'>
                                  Convocazione Consiglio Comunale - Prima seduta
                                </a>
                              </CardText>
                              <CardText>
                                <a href='#'>Seconda rata TARI</a>
                              </CardText>
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                      <div className='owl-item' style={{ width: '296px' }}>
                        <div className='it-single-slide-wrapper'>
                          <Card className='card-bg'>
                            <CardBody>
                              <CardTitle tag='h5'>
                                22<span>lun</span>
                              </CardTitle>
                              <CardText>
                                <a href='#'>Saldo TASI</a>
                              </CardText>
                              <CardText>
                                <a href='#'>
                                  Concerto gratuito piazza XX Settembre
                                </a>
                              </CardText>
                              <CardText>
                                <a href='#'>
                                  Convocazione Consiglio Comunale - Prima seduta
                                </a>
                              </CardText>
                              <CardText>
                                <a href='#'>Seconda rata TARI</a>
                              </CardText>
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                      <div className='owl-item' style={{ width: '296px' }}>
                        <div className='it-single-slide-wrapper'>
                          <Card className='card-bg'>
                            <CardBody>
                              <CardTitle tag='h5'>
                                23<span>mar</span>
                              </CardTitle>
                              <CardText>
                                <a href='#'>Saldo TASI</a>
                              </CardText>
                              <CardText>
                                <a href='#'>
                                  Concerto gratuito piazza XX Settembre
                                </a>
                              </CardText>
                              <CardText>
                                <a href='#'>
                                  Convocazione Consiglio Comunale - Prima seduta
                                </a>
                              </CardText>
                              <CardText>
                                <a href='#'>Seconda rata TARI</a>
                              </CardText>
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='owl-nav disabled'>
                    <button className='owl-prev'></button>
                    <button className='owl-next'></button>
                  </div>
                  <div className='owl-dots'>
                    <button
                      className='owl-dot active'
                      aria-labelledby='owl-dot-0'
                    >
                      <span></span>
                    </button>
                    <button className='owl-dot' aria-labelledby='owl-dot-1'>
                      <span></span>
                    </button>
                    <button className='owl-dot' aria-labelledby='owl-dot-2'>
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </section>
      <section id='evidenza'>
        <div className='section section-background-header py-5'>
          <Container>
            <Row>
              <h2 className='text-white'>Argomenti in evidenza</h2>
            </Row>
            <div className='py-4'>
              <div className='card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-3'>
                <Card teaser noWrapper className='no-after rounded shadow'>
                  <CardBody className='pb-5'>
                    <CardCategory>
                      <Icon icon='it-info-circle' />
                    </CardCategory>
                    <CardTitle tag='h3'>Cantieri in città</CardTitle>
                    <CardText>
                      Informazioni sui principali cantieri stradali aperti o in
                      programmazione un città che comportano modifiche alla
                      circolazione stradale.
                    </CardText>
                    <CardText>Visita il sito:</CardText>
                    <a href='#'>
                      <Card
                        teaser
                        noWrapper
                        className='card-bg-primary no-after mt-0'
                      >
                        <div className='avatar size-lg mr-3'>
                          <img
                            src='https://picsum.photos/200/200'
                            alt='Immagine'
                          />
                        </div>
                        <CardBody>
                          <CardTitle tag='h5'>Mobilità in Comune</CardTitle>
                          <CardText className='text-sans-serif'>
                            Il sito del turismo del Comune e della Città
                            Metropolitana.
                          </CardText>
                        </CardBody>
                      </Card>
                    </a>
                  </CardBody>
                  <CardReadMore
                    iconName='it-arrow-right'
                    text='Esplora argomento'
                    href='#'
                  />
                </Card>
                <Card teaser noWrapper className='no-after rounded shadow'>
                  <CardBody className='pb-5'>
                    <CardCategory>
                      <Icon icon='it-clock' />
                    </CardCategory>
                    <CardTitle tag='h3'>Estate in città</CardTitle>
                    <CardText>
                      Un ricco programma di appuntamenti: eventi culturali,
                      ricreativi, concerti, mostre, cinema, ed altro ancora in
                      diversi luoghi della città.
                    </CardText>

                    <LinkList className='mt-4'>
                      <LinkListItem active className='icon-left'>
                        <Icon color='primary' icon='it-calendar' />
                        <span>Eventi questo weekend</span>
                      </LinkListItem>
                      <LinkListItem className='icon-left'>
                        <Icon color='primary' icon='it-calendar' />
                        <span>Cosa fare questa settimana</span>
                      </LinkListItem>
                      <LinkListItem className='icon-left'>
                        <Icon color='primary' icon='it-calendar' />
                        <span>Agosto metropolitano</span>
                      </LinkListItem>
                      <LinkListItem className='icon-left'>
                        <Icon color='primary' icon='it-calendar' />
                        <span>
                          Orari estivi metro e bus in vigore dal 9 giugno
                        </span>
                      </LinkListItem>
                    </LinkList>
                  </CardBody>
                  <CardReadMore
                    iconName='it-arrow-right'
                    text="Esplora l'argomento"
                    href='#'
                  />
                </Card>
                <Card teaser noWrapper className='no-after rounded shadow'>
                  <CardBody className='pb-5'>
                    <CardCategory>
                      <Icon icon='it-camera' />
                    </CardCategory>
                    <CardTitle>Sport</CardTitle>
                    <CardText>
                      Tutto quello che c&#39;è da sapere sulle strutture
                      sportive comunali a disposizione del pubblico e delle
                      Associazioni, le iniziative a sostegno dello sport e gli
                      eventi che coinvolgono la città.
                    </CardText>
                    <LinkList className='mt-4'>
                      <LinkListItem active className='icon-left'>
                        <Icon color='primary' icon='it-pa' />
                        <span>Tutte le strutture turistiche della città</span>
                      </LinkListItem>
                      <LinkListItem className='icon-left'>
                        <Icon color='primary' icon='it-calendar' />
                        <span>
                          Da lunedì 3 settembre chiudono le vasche della piscina
                          comunale
                        </span>
                      </LinkListItem>
                      <LinkListItem className='icon-left'>
                        <Icon color='primary' icon='it-calendar' />
                        <span>
                          Concessione contributi ad enti, associazioni, società
                          sportive
                        </span>
                      </LinkListItem>
                    </LinkList>
                  </CardBody>
                  <CardReadMore
                    iconName='it-arrow-right'
                    text="Esplora l'argomento"
                    href='#'
                  />
                </Card>
              </div>
            </div>
            <Row className='pt-5'>
              <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
                <Row className='d-lg-inline-flex'>
                  <Col lg={3}>
                    <h6 className='text-uppercase text-center'>
                      Altri argomenti
                    </h6>
                  </Col>
                  <Col lg={9}>
                    <div className='chip chip-simple chip-primary'>
                      <a href='#' className='chip-label'>
                        Agevolazioni per la casa
                      </a>
                    </div>
                    <div className='chip chip-simple chip-primary'>
                      <a href='#' className='chip-label'>
                        Ambiente
                      </a>
                    </div>
                    <div className='chip chip-simple chip-primary'>
                      <a href='#' className='chip-label'>
                        Assistenza sociale
                      </a>
                    </div>
                    <div className='chip chip-simple chip-primary'>
                      <a href='#' className='chip-label'>
                        Costruire e ristrutturare
                      </a>
                    </div>
                    <div className='chip chip-simple chip-primary'>
                      <a href='#' className='chip-label'>
                        Famiglia
                      </a>
                    </div>
                    <div className='chip chip-simple chip-primary'>
                      <a href='#' className='chip-label'>
                        Immigrazione
                      </a>
                    </div>
                    <div className='chip chip-simple chip-primary'>
                      <a href='#' className='chip-label'>
                        Investire
                      </a>
                    </div>
                    <div className='chip chip-simple chip-primary'>
                      <a href='#' className='chip-label'>
                        Lavori pubblici
                      </a>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className='text-center'>
                    <Button color='primary' className='mt-5'>
                      Vedi tutti
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className='pt-5'>
              <h3>Siti tematici</h3>
            </Row>
            <div className='py-4'>
              <div className='card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-3'>
                <Card teaser noWrapper className='card-bg-primary rounded'>
                  <div className='avatar size-lg mr-3'>
                    <img src='https://picsum.photos/200/200' alt='Immagine' />
                  </div>
                  <CardBody>
                    <CardTitle tag='h5'>Mobilità in Comune</CardTitle>
                    <CardText className='text-sans-serif'>
                      Il sito del turismo del Comune e della Città Metropolitana
                    </CardText>
                  </CardBody>
                </Card>
                <Card teaser noWrapper className='card-bg-warning rounded'>
                  <div className='avatar size-lg mr-3'>
                    <img src='https://picsum.photos/200/200' alt='Immagine' />
                  </div>
                  <CardBody>
                    <CardTitle tag='h5'>Turismo</CardTitle>
                    <CardText className='text-sans-serif'>
                      Il sito che offre informazioni sulle attività turistiche
                      attive in città
                    </CardText>
                  </CardBody>
                </Card>
                <Card teaser noWrapper className='card-bg-dark rounded'>
                  <div className='avatar size-lg mr-3'>
                    <img src='https://picsum.photos/200/200' alt='Immagine' />
                  </div>
                  <CardBody tag='h5'>
                    <CardTitle>Musei Civici</CardTitle>
                    <CardText className='text-sans-serif'>
                      Tutte le informazioni sui musei e gli eventi culturali
                      della città
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <section id='novita'>
        <div
          className='section section-background-header'
          style={{ backgroundImage: "url('https://picsum.photos/1200/400')" }}
        >
          <Container>
            <Row>
              <Col sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }}>
                <form>
                  <div className='form-group mb-1'>
                    <div className='input-group'>
                      <div className='input-group-prepend'>
                        <div className='input-group-text'>
                          <button type='submit' className='border-0 px-0'>
                            <Icon icon='it-search' size='sm' />
                          </button>
                        </div>
                      </div>
                      <input
                        type='text'
                        className='form-control'
                        id='exampleInputText'
                      />
                      <label
                        htmlFor='exampleInputText'
                        style={{ width: 'auto' }}
                      >
                        Cerca servizi, informazioni, persone
                      </label>
                    </div>
                  </div>
                </form>
                <Button color='primary' size='sm' href='#' className='mt-3'>
                  Uffici comunali
                </Button>
                <Button color='primary' size='sm' href='#' className='mt-3'>
                  Servizi demografici
                </Button>
                <Button color='primary' size='sm' href='#' className='mt-3'>
                  SUAP
                </Button>
                <Button color='primary' size='sm' href='#' className='mt-3'>
                  Sostegno alle famiglie
                </Button>
                <Button color='primary' size='sm' href='#' className='mt-3'>
                  Segnalazioni
                </Button>
                <Button color='primary' size='sm' href='#' className='mt-3'>
                  Dove lo butto?
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <Footer townName={townName} townTagLine={townTagLine} />
    </>
  );
};

Homepage.args = {
  theme: '',
  townName: 'Nome del Comune',
  townTagLine: 'Uno dei tanti Comuni d Italia'
};
Homepage.argTypes = {
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

export default Homepage;
