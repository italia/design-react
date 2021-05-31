/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react';

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardCategory,
  CardSignature,
  CardReadMore,
  CardTag,
  CardTagsHeader,
  CardFooterCTA,
  Button,
  Icon,
  Row,
  Col
} from '../../src';

export default {
  title: 'Componenti/Cards'
};

export const SimpleCard = () => (
  <Row>
    <Col xs='12' lg='4'>
      {/* start card */}
      <Card>
        <CardBody>
          <CardTitle tag='h5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor…
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardText>
        </CardBody>
      </Card>
      {/* end card */}
    </Col>
  </Row>
);

SimpleCard.story = {
  name: 'Card semplice'
};

export const SimpleCardMultipleColumns = () => (
  <Row>
    {[1, 2, 3].map((i) => (
      <Col xs='12' lg='4' key={i}>
        <Card>
          <CardBody>
            <CardTitle tag='h5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor…
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardText>
          </CardBody>
        </Card>
      </Col>
    ))}
  </Row>
);

SimpleCardMultipleColumns.story = {
  name: 'Card semplice su più colonne'
};

export const SimpleArticle = () => (
  <Row>
    <Col xs='12' lg='6'>
      {/* start card */}
      <Card>
        <CardBody>
          <CardCategory date='10/12/2018'>Category</CardCategory>
          <CardTitle tag='h5' className='big-heading'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit…
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardText>
          <CardSignature>di Federico De Paolis</CardSignature>
          <CardReadMore text='Leggi di più' iconName='it-arrow-right' />
        </CardBody>
      </Card>
      {/* end card */}
    </Col>
  </Row>
);

SimpleArticle.story = {
  name: 'Articolo semplice'
};

export const SimpleArticleWithIcon = () => (
  <Row>
    <Col xs='12' lg='6'>
      {/* start card */}
      <Card>
        <CardBody>
          <CardCategory date='10/12/2018' iconName='it-calendar'>
            Category
          </CardCategory>
          <CardTitle tag='h5' className='big-heading'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit…
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardText>
          <CardSignature>di Federico De Paolis</CardSignature>
          <CardReadMore text='Leggi di più' iconName='it-arrow-right' />
        </CardBody>
      </Card>
      {/* end card */}
    </Col>
  </Row>
);
SimpleArticleWithIcon.story = {
  name: 'Articolo con Icona'
};

export const CardIcon = () => (
  <Row>
    <Col xs='12' lg='6'>
      {/* Start card */}
      <Card>
        <CardBody>
          <CardCategory iconName='it-file'>
            <span className='text'>
              Category
              <br />
              Name
            </span>
          </CardCategory>
          <a href='#'>
            <CardTitle tag='h5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor…
            </CardTitle>
          </a>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardText>
        </CardBody>
      </Card>

      {/* end card */}
    </Col>
  </Row>
);
CardIcon.story = {
  name: 'Card con Icona'
};

export const CardIconAdvanced = () => (
  <Row>
    <Col xs='12' lg='6'>
      {/* Start card */}
      <Card>
        <CardBody>
          <CardCategory iconName='it-file'>
            <span className='text'>(2) Files</span>
          </CardCategory>
          <a href='#'>
            <CardTitle tag='h5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor…
            </CardTitle>
          </a>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardText>
          <a className='simple-link' href='#'>
            Link
          </a>
        </CardBody>
      </Card>

      {/* end card */}
    </Col>
  </Row>
);
CardIconAdvanced.story = {
  name: 'Card con Icona alternativa'
};

export const CardWithShading = () => (
  <Row>
    <Col xs='12' lg='6'>
      {/* Start card */}
      <Card spacing className='card-bg'>
        <CardBody>
          <CardTitle tag='h5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor…
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardText>
          <CardReadMore iconName='it-arrow-right' text='Leggi di più' />
        </CardBody>
      </Card>
      {/* end card */}
    </Col>
  </Row>
);

CardWithShading.story = {
  name: 'Card con ombreggiatura'
};

export const BigCard = () => (
  <Row>
    <Col xs='12' lg='6'>
      {/* Start card */}
      <Card spacing className='card-bg card-big'>
        <CardBody>
          <div className='top-icon'>
            <Icon icon='it-card' />
          </div>
          <CardTitle tag='h5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor…
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardText>
          <CardReadMore iconName='it-arrow-right' text='Leggi di più' />
        </CardBody>
      </Card>
      {/* end card */}
    </Col>
  </Row>
);

BigCard.story = {
  name: 'Card grande'
};

export const BigCardExampleTwo = () => (
  <Row>
    <Col xs='12' lg='6'>
      {/* Start card */}
      <Card spacing className='card-bg card-big border-bottom-card'>
        <div className='flag-icon'></div>
        <div className='etichetta'>
          <Icon icon='it-settings' />
          <span>Sviluppo</span>
        </div>
        <CardBody>
          <div className='top-icon'>
            <Icon icon='it-card' />
          </div>
          <CardTitle tag='h5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor…
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardText>
          <CardReadMore iconName='it-arrow-right' text='Leggi di più' />
        </CardBody>
      </Card>
      {/* end card */}
    </Col>
  </Row>
);

BigCardExampleTwo.story = {
  name: 'Card grande: esempio alternativo'
};

export const BigCardWithTag = () => (
  <Row>
    <Col xs='12' lg='6'>
      {/* Start card */}
      <Card spacing className='card-bg card-big no-after'>
        <CardBody>
          <CardTagsHeader date='10/10/2018'>
            <CardTag href='#'>Tag</CardTag>
          </CardTagsHeader>
          <CardTitle tag='h5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor…
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardText>
          <div className='it-card-footer'>
            <CardSignature>di Federico De Paolis</CardSignature>
            <Button outline color='primary' size='sm'>
              Action
            </Button>
          </div>
        </CardBody>
      </Card>
      {/* end card */}
    </Col>
  </Row>
);

BigCardWithTag.story = {
  name: 'Card grande con tag, data e call to action'
};

export const CardWithImageAndDate = () => (
  <Row>
    <Col xs='12' lg='6'>
      {/* Start card */}
      <Card className='card-bg card-img no-after'>
        <div className='img-responsive-wrapper'>
          <div className='img-responsive img-responsive-panoramic'>
            <figure className='img-wrapper'>
              <img
                src='https://via.placeholder.com/310x94/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO'
                title='img title'
                alt='imagealt'
              />
            </figure>
            <div className='card-calendar d-flex flex-column justify-content-center'>
              <span className='card-date'>31</span>
              <span className='card-day'>novembre</span>
            </div>
          </div>
        </div>
        <CardBody>
          <CardTitle tag='h5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor…
          </CardTitle>
          <CardReadMore iconName='it-arrow-right' text='Leggi di più' />
        </CardBody>
      </Card>
      {/* end card */}
    </Col>
  </Row>
);
CardWithImageAndDate.story = {
  name: 'Card con immagine e data calendario'
};

export const CardsWithImages = () => (
  <Row>
    <Col xs='12' lg='6'>
      {/* Start card */}
      <Card className='card-img no-after'>
        <div className='img-responsive-wrapper'>
          <div className='img-responsive'>
            <figure className='img-wrapper'>
              <img
                src='https://via.placeholder.com/310x190/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO'
                title='img title'
                alt='imagealt'
              />
            </figure>
          </div>
        </div>
        <CardBody>
          <CardTitle tag='h5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor…
          </CardTitle>
          <CardReadMore iconName='it-arrow-right' text='Leggi di più' />
        </CardBody>
      </Card>
      {/* end card */}
    </Col>
    <Col xs='12' lg='6'>
      {/* Start card */}
      <Card className='card-img no-after'>
        <div className='img-responsive-wrapper'>
          <div className='img-responsive img-responsive-panoramic'>
            <figure className='img-wrapper'>
              <img
                src='https://via.placeholder.com/310x94/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO'
                title='img title'
                alt='imagealt'
              />
            </figure>
          </div>
        </div>
        <CardBody>
          <CardTitle tag='h5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor…
          </CardTitle>
          <CardReadMore iconName='it-arrow-right' text='Leggi di più' />
        </CardBody>
      </Card>
      {/* end card */}
    </Col>
    <Col xs='12' lg='6'>
      {/* Start card */}
      <Card className='card-img no-after'>
        <div className='img-responsive-wrapper'>
          <div className='img-responsive'>
            <figure className='img-wrapper'>
              <img
                src='https://via.placeholder.com/310x190/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO'
                title='img title'
                alt='imagealt'
              />
            </figure>
            <div className='card-calendar d-flex flex-column justify-content-center'>
              <span className='card-date'>31</span>
              <span className='card-day'>novembre</span>
            </div>
          </div>
        </div>
        <CardBody>
          <CardTitle tag='h5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor…
          </CardTitle>
          <CardReadMore iconName='it-arrow-right' text='Leggi di più' />
        </CardBody>
      </Card>
      {/* end card */}
    </Col>
    <Col xs='12' lg='6'>
      {/* Start card */}
      <Card className='card-img no-after'>
        <div className='img-responsive-wrapper'>
          <div className='img-responsive img-responsive-panoramic'>
            <figure className='img-wrapper'>
              <img
                src='https://via.placeholder.com/310x94/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO'
                title='img title'
                alt='imagealt'
              />
            </figure>
            <div className='card-calendar d-flex flex-column justify-content-center'>
              <span className='card-date'>31</span>
              <span className='card-day'>novembre</span>
            </div>
          </div>
        </div>
        <CardBody>
          <CardTitle tag='h5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor…
          </CardTitle>
          <CardReadMore iconName='it-arrow-right' text='Leggi di più' />
        </CardBody>
      </Card>
      {/* end card */}
    </Col>
  </Row>
);

export const SpecialCard = () => (
  <Row>
    <Col xs='12' lg='6'>
      {/* Start card */}
      <Card className='card-img no-after special-card' tag='a'>
        <div className='img-responsive-wrapper'>
          <div className='img-responsive'>
            <figure className='img-wrapper'>
              <img
                src='https://via.placeholder.com/174x214/F9F9FE/0066CC/?text=IMMAGINE%20DI%20ESEMPIO'
                title='img title'
                alt='imagealt'
              />
            </figure>
          </div>
        </div>
        <CardBody>
          <CardTagsHeader date='10/10/2018' />
          <CardTitle tag='h5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor…
          </CardTitle>
        </CardBody>
      </Card>
      {/* end card */}
    </Col>
  </Row>
);
SpecialCard.story = {
  name: 'Card speciali'
};

export const SimpleCardTeaser = () => (
  <Card teaser>
    <CardBody>
      <CardTitle tag='h5'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor…
      </CardTitle>
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </CardText>
    </CardBody>
  </Card>
);

SimpleCardTeaser.story = {
  name: 'Card teaser'
};

export const CardTeaserMultiple = () => (
  <div className='card-wrapper card-teaser-wrapper'>
    <Card teaser noWrapper>
      <CardBody>
        <CardTitle tag='h5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor…
        </CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardText>
      </CardBody>
    </Card>
    <Card teaser noWrapper className='rounded shadow'>
      <CardBody>
        <CardTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor…
        </CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardText>
      </CardBody>
    </Card>
    <Card teaser noWrapper className='rounded shadow'>
      <CardBody>
        <CardCategory iconName='it-clip'></CardCategory>
        <a href='#'>
          <CardTitle tag='h5'>Lorem ipsum dolor sit amet</CardTitle>
        </a>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardText>
      </CardBody>
    </Card>
  </div>
);

CardTeaserMultiple.story = {
  name: 'Card teaser multiple'
};

export const CardWithFooterComponent = () => (
  <div className='row'>
    <div className='col-12 col-lg-6'>
      {/* Start card */}
      <Card spacing className='card-bg card-big no-after'>
        <CardBody>
          <div className='head-tags'>
            <a className='card-tag' href='#'>
              Tag
            </a>
            <span className='data'>10/10/2018</span>
          </div>
          <CardTitle tag='h5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor…
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardText>
          <CardFooterCTA>
            <CardSignature>di Federico De Paolis</CardSignature>
            <Button outline color='primary'>
              Action
            </Button>
          </CardFooterCTA>
        </CardBody>
      </Card>
      {/* end card */}
    </div>
  </div>
);

// eslint-disable-next-line react/prop-types
export const _EsempiInterattivi = ({ spacing, teaser, link, title, text }) => {
  return (
    <Row>
      <Col size={12} lg={6}>
        {/* Start card */}
        <Card spacing={spacing} teaser={teaser}>
          <CardBody>
            <CardTitle tag='h5'>{title}</CardTitle>
            <CardText>{text}</CardText>
            <CardReadMore
              iconName='it-arrow-right'
              text='Leggi di più'
              tag={'a'}
              href={link}
            />
          </CardBody>
        </Card>
        {/* end card */}
      </Col>
    </Row>
  );
};

_EsempiInterattivi.story = {
  name: 'Esempi interattivi'
};
_EsempiInterattivi.args = {
  spacing: false,
  teaser: false,
  link: '#',
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit…',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
};
