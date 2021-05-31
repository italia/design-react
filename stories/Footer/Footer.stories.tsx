/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
  Icon,
  LinkList,
  LinkListItem
} from '../../src';

export const Footer = ({ townName, townTagLine }) => {
  return (
    <footer className='it-footer'>
      <div className='it-footer-main'>
        <Container>
          <section>
            <Row className='clearfix'>
              <Col sm={12}>
                <div className='it-brand-wrapper'>
                  <a href='#' className=''>
                    <Icon icon='it-pa' />
                    <div className='it-brand-text'>
                      <h2 className='no_toc'>{townName}</h2>
                      <h3 className='no_toc d-none d-md-block'>
                        {townTagLine}
                      </h3>
                    </div>
                  </a>
                </div>
              </Col>
            </Row>
          </section>
          <section>
            <Row>
              <Col lg={3} md={3} sm={6} className='pb-2'>
                <h4>
                  <a href='#' title='Vai alla pagina: Amministrazione'>
                    Amministrazione
                  </a>
                </h4>
                <LinkList className='footer-list clearfix'>
                  {[
                    'Giunta e consiglio',
                    'Aree di competenza',
                    'Dipendenti',
                    'Luoghi',
                    'Associazioni e società partecipate'
                  ].map((label) => (
                    <LinkListItem
                      key={label}
                      href='#'
                      title={`Vai alla pagina: ${label}`}
                    >
                      {label}
                    </LinkListItem>
                  ))}
                </LinkList>
              </Col>
              <Col lg={3} md={3} sm={6} className='pb-2'>
                <h4>
                  <a href='#' title='Vai alla pagina: Servizi'>
                    Servizi
                  </a>
                </h4>
                <LinkList className='footer-list clearfix'>
                  {[
                    'Pagamenti',
                    'Sostegno',
                    'Domande e iscrizioni',
                    'Segnalazioni',
                    'Autorizzazioni e concessioni',
                    'Certificati e dichiarazioni'
                  ].map((label) => (
                    <LinkListItem
                      key={label}
                      href='#'
                      title={`Vai alla pagina: ${label}`}
                    >
                      {label}
                    </LinkListItem>
                  ))}
                </LinkList>
              </Col>
              <Col lg={3} md={3} sm={6} className='pb-2'>
                <h4>
                  <a href='#' title='Vai alla pagina: Novità'>
                    Novità
                  </a>
                </h4>
                <LinkList className='footer-list clearfix'>
                  {['Notizie', 'Eventi', 'Comunicati Stampa'].map((label) => (
                    <LinkListItem
                      key={label}
                      href='#'
                      title={`Vai alla pagina: ${label}`}
                    >
                      {label}
                    </LinkListItem>
                  ))}
                </LinkList>
              </Col>
              <Col lg={3} md={3} sm={6}>
                <h4>
                  <a href='#' title='Vai alla pagina: Documenti'>
                    Documenti
                  </a>
                </h4>
                <LinkList className='footer-list clearfix'>
                  {[
                    'Progetti e attività',
                    'Delibere, determine e ordinanze',
                    'Bandi',
                    'Concorsi',
                    'Albo pretorio'
                  ].map((label) => (
                    <LinkListItem
                      key={label}
                      href='#'
                      title={`Vai alla pagina: ${label}`}
                    >
                      {label}
                    </LinkListItem>
                  ))}
                </LinkList>
              </Col>
            </Row>
          </section>
          <section className='py-4 border-white border-top'>
            <Row>
              <Col lg={3} md={3} className='pb-2'>
                <h4>
                  <a href='#' title='Vai alla pagina: Amministrazione'>
                    Amministrazione trasparente
                  </a>
                </h4>
                <p>
                  I dati personali pubblicati sono riutilizzabili solo alle
                  condizioni previste dalla direttiva comunitaria 2003/98/CE e
                  dal d.lgs. 36/2006
                </p>
              </Col>
              <Col lg={3} md={3} className='pb-2'>
                <h4>
                  <a href='#' title='Vai alla pagina: Contatti'>
                    Contatti
                  </a>
                </h4>
                <p>
                  <strong>Nome del Comune</strong>
                  <br />
                  Via Roma 0 - 00000 Lorem Ipsum Codice fiscale / P. IVA:
                  000000000
                </p>
                <LinkList className='footer-list clearfix'>
                  {[
                    'Posta Elettronica Certificata',
                    'URP - Ufficio Relazioni con il Pubblico'
                  ].map((label) => (
                    <LinkListItem
                      key={label}
                      href='#'
                      title={`Vai alla pagina: ${label}`}
                    >
                      {label}
                    </LinkListItem>
                  ))}
                </LinkList>
              </Col>
              <Col lg={3} md={3} className='pb-2'>
                <h4>
                  <a href='#' title='Vai alla pagina: Newsletter'>
                    Newsletter
                  </a>
                </h4>
                <Form action='#' className='form-newsletter' method='post'>
                  <Label
                    className='text-white font-weight-semibold active'
                    htmlFor='input-newsletter'
                    style={{ transition: 'none 0s ease 0s' }}
                  >
                    Iscriviti per riceverla
                  </Label>
                  <Input
                    id='input-newsletter'
                    name='input-newsletter'
                    placeholder='mail@example.com'
                    type='email'
                  />
                  <Button color='primary' className='btn-icon' type='submit'>
                    <Icon icon='it-mail' color='white' />
                    <span>Iscriviti</span>
                  </Button>
                </Form>
              </Col>
              <Col lg={3} md={3} className='pb-2'>
                <h4>
                  <a href='#' title='Vai alla pagina: Seguici su'>
                    Seguici su
                  </a>
                </h4>
                <ul className='list-inline text-left social'>
                  <li className='list-inline-item'>
                    <a className='p-2 text-white' href='#' target='_blank'>
                      <Icon
                        icon='it-designers-italia'
                        color='white'
                        size='sm'
                        className='align-top'
                      />
                      <span className='sr-only'>Designers Italia</span>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a className='p-2 text-white' href='#' target='_blank'>
                      <Icon
                        icon='it-twitter'
                        color='white'
                        size='sm'
                        className='align-top'
                      />
                      <span className='sr-only'>Twitter</span>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a className='p-2 text-white' href='#' target='_blank'>
                      <Icon
                        icon='it-medium'
                        color='white'
                        size='sm'
                        className='align-top'
                      />
                      <span className='sr-only'>Medium</span>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a className='p-2 text-white' href='#' target='_blank'>
                      <Icon
                        icon='it-behance'
                        color='white'
                        size='sm'
                        className='align-top'
                      />
                      <span className='sr-only'>Behance</span>
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
      <div className='it-footer-small-prints clearfix'>
        <Container>
          <h3 className='sr-only'>Sezione Link Utili</h3>
          <ul className='it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row'>
            <li className='list-inline-item'>
              <a href='#' title='Note Legali'>
                Media policy
              </a>
            </li>
            <li className='list-inline-item'>
              <a href='#' title='Note Legali'>
                Note legali
              </a>
            </li>
            <li className='list-inline-item'>
              <a href='#' title='Privacy-Cookies'>
                Privacy policy
              </a>
            </li>
            <li className='list-inline-item'>
              <a href='#' title='Mappa del sito'>
                Mappa del sito
              </a>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
};

export default {
  title: 'Componenti/Footer',
  args: {
    townName: 'Nome del Comune',
    townTagLine: 'Uno dei tanti Comuni d Italia'
  }
};
