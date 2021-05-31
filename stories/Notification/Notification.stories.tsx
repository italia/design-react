import React from 'react';
import { Notification } from '../../src';

// custom style
const OffsetStyle = {
  transform: 'translateX(100%)',
  left: 50,
  bottom: 50
};

const XOffsetStyle = {
  WebkitTransform: 'translateX(30%)',
  marginTop: '10px'
};

const YOffsetStyle = {
  marginTop: '50px'
};

const NotificationStyle = {
  right: 'auto',
  bottom: 'auto',
  top: 'auto',
  left: 'auto'
};

export default {
  title: 'Componenti/Notification'
};

export const _Example = () => (
  <div className='container test-docs'>
    <div className='row'>
      <div className='col-12 col-md-6 mb-4 mb-md-0'>
        <p className='mb-4'>
          <strong>Notification standard</strong>
        </p>
        <Notification
          id='notifica-base'
          title='Titolo Notifica'
          style={NotificationStyle}
        ></Notification>
      </div>
      <div className='col-12 col-md-6'>
        <p className='mb-4'>
          <strong>Notification with icon</strong>
        </p>
        <Notification
          id='notifica-base-con-icona'
          title='Titolo Notifica'
          withIcon
          style={NotificationStyle}
        ></Notification>
      </div>
    </div>
  </div>
);

export const _NotificationWithMessage = () => (
  <div className='container test-docs'>
    <div className='row'>
      <div className='col-12 col-md-6 mb-4 mb-md-0'>
        <p className='mb-4'>
          <strong>Notification standard</strong>
        </p>
        <Notification
          title='Titolo Notifica'
          style={NotificationStyle}
          id='notifica-con-messaggio'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor…
        </Notification>
      </div>
      <div className='col-12 col-md-6'>
        <p className='mb-4'>
          <strong>Notification with icon</strong>
        </p>
        <Notification
          withIcon
          title='Titolo Notifica'
          state='success'
          style={NotificationStyle}
          id='notifica-con-messaggio-e-icona'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor…
        </Notification>
      </div>
    </div>
  </div>
);

_NotificationWithMessage.story = {
  name: 'Notification with message'
};

export const Dismissable = () => (
  <div className='container test-docs'>
    <div className='row'>
      <div className='col-12 col-md-6 mb-4 mb-md-0'>
        <p className='mb-4'>
          <strong>Notification standard</strong>
        </p>
        <Notification
          title='Titolo Notifica'
          dismissable
          style={NotificationStyle}
          id='notifica-base'
        />
      </div>
      <div className='col-12 col-md-6'>
        <p className='mb-4'>
          <strong>Notification with icon</strong>
        </p>
        <Notification
          withIcon
          title='Titolo Notifica'
          state='success'
          dismissable
          style={NotificationStyle}
          id='notifica-avvenuto-con-successo'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor…
        </Notification>
      </div>
    </div>
  </div>
);

export const States = () => {
  return (
    <div className='container test-docs'>
      <div className='row mb-5'>
        <div className='col-12 col-md-6 mb-4 mb-md-0'>
          <p>
            <strong>Success</strong>
          </p>
          <Notification
            withIcon
            state='success'
            title='Titolo Notifica'
            style={NotificationStyle}
            id='notifica-con-success-state'
          />
        </div>
        <div className='col-12 col-md-6'>
          <p>
            <strong>Error</strong>
          </p>
          <Notification
            withIcon
            state='error'
            title='Titolo Notifica'
            style={NotificationStyle}
            id='notifica-con-error-state'
          />
        </div>
      </div>
      <div className='row mb-5'>
        <div className='col-12 col-md-6 mb-4 mb-md-0' style={{ top: 45 }}>
          <p>
            <strong>Info</strong>
          </p>
          <Notification
            withIcon
            state='info'
            title='Titolo Notifica'
            style={NotificationStyle}
            id='notifica-con-info-state'
          />
        </div>
        <div className='col-12 col-md-6' style={{ top: 45 }}>
          <p>
            <strong>Warning</strong>
          </p>
          <Notification
            withIcon
            state='warning'
            title='Titolo Notifica'
            style={NotificationStyle}
            id='notifica-con-warning-state'
          />
        </div>
      </div>
    </div>
  );
};

export const _RoundingOfCorners = () => {
  return (
    <div className='container test-docs'>
      <div className='row mb-5'>
        <div
          className='col-12 col-md-6 mb-4 mb-md-0'
          style={{ position: 'absolute' }}
        >
          <p>
            <strong>Basic (rounding at 4 corners)</strong>
          </p>
          <Notification
            withIcon
            header='Titolo Notifica'
            state='success'
            style={NotificationStyle}
            id='notifica-round-corners'
          />
        </div>
      </div>
      <div className='col-12 col-md-6' style={OffsetStyle}>
        <p>
          <strong>top</strong>
        </p>
        <div className='row mb-5' style={XOffsetStyle}>
          <Notification
            withIcon
            header='Titolo Notifica'
            state='success'
            fix='top'
            style={NotificationStyle}
            id='notifica-round-corners-top'
          />
        </div>
        <p style={{ marginTop: '90px' }}>
          <strong>bottom</strong>
        </p>
        <div className='row mb-5' style={XOffsetStyle}>
          <Notification
            withIcon
            header='Titolo Notifica'
            state='success'
            fix='bottom'
            style={NotificationStyle}
            id='notifica-round-corners-bottom'
          />
        </div>
        <p style={{ marginTop: '90px' }}>
          <strong>left</strong>
        </p>
        <div className='row mb-5' style={YOffsetStyle}>
          <Notification
            withIcon
            header='Titolo Notifica'
            state='success'
            fix='left'
            style={NotificationStyle}
            id='notifica-round-corners-left'
          />
        </div>
        <p>
          <strong>right</strong>
        </p>
        <div className='row mb-5' style={YOffsetStyle}>
          <Notification
            withIcon
            header='Titolo Notifica'
            state='success'
            fix='right'
            style={NotificationStyle}
            id='notifica-round-corners-right'
          />
        </div>
      </div>
    </div>
  );
};

_RoundingOfCorners.story = {
  name: 'Rounding of Corners'
};

export const DefaultLocation = () => {
  return (
    <div className='container test-desktop'>
      <div>
        <Notification
          withIcon
          state='success'
          title='Titolo Notifica'
          id='notifica'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor…
        </Notification>
      </div>
    </div>
  );
};

export const FixedPositions = () => {
  return (
    <div className='container test-desktop'>
      <div>
        <Notification
          withIcon
          title='Top Fix'
          fix='top'
          state='success'
          id='notifica-fixed-top'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor…
        </Notification>
      </div>
      <div>
        <Notification
          withIcon
          title='Left Fix'
          fix='left'
          state='success'
          id='notifica-fixed-left'
        />
      </div>
      <div>
        <Notification
          withIcon
          title='Right Fix'
          fix='right'
          state='success'
          id='notifica-fixed-right'
        />
      </div>
      <div>
        <Notification
          withIcon
          title='Bottom Fix'
          fix='bottom'
          state='success'
          id='notifica-fixed-bottom'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor…
        </Notification>
      </div>
    </div>
  );
};
