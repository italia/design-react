/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { useState } from 'react';
import { Icon } from '../../src';

const PosizionamentoTestaAlta = () => {
  const [isOpen, toggleNavScroll] = useState(false);
  return (
    <nav className='navbar it-navscroll-wrapper navbar-expand-lg it-top-navscroll it-right-side'>
      <button
        className={
          isOpen
            ? 'custom-navbar-toggler focus--mouse'
            : 'custom-navbar-toggler'
        }
        type='button'
        aria-controls='navbarNavB'
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-label='Toggle navigation'
        data-target='#navbarNavB'
        onClick={() => toggleNavScroll(!isOpen)}
      >
        <span className='it-list'></span>1. Introduzione
      </button>
      <div
        className={
          isOpen ? 'navbar-collapsable expanded' : 'navbar-collapsable'
        }
        id='navbarNavB'
        style={isOpen ? { display: 'block' } : { display: 'none' }}
      >
        <div
          className='overlay'
          style={isOpen ? { display: 'block' } : { display: 'none' }}
        ></div>
        <div className='close-div sr-only'>
          <button className='btn close-menu' type='button'>
            <span className='it-close'></span>close
          </button>
        </div>
        <a
          className='it-back-button'
          href='#'
          style={isOpen ? { display: 'block' } : { display: 'none' }}
          onClick={() => toggleNavScroll(!isOpen)}
        >
          <Icon
            className='align-top'
            color='primary'
            icon='it-chevron-left'
            aria-hidden
            size='sm'
          />
          <span>Back </span>
        </a>
        <div className='menu-wrapper'>
          <div className='link-list-wrapper'>
            <h3 className='no_toc'>header</h3>
            <ul className='link-list'>
              <li className='nav-item active'>
                <a className='nav-link active' href='#'>
                  <span>1. Introduzione </span>
                </a>
                <ul className='link-list'>
                  <li className='nav-link active'>
                    <a className='nav-link active' href='#'>
                      <span>1.1 Nested Item (active) </span>
                    </a>
                    <ul className='tertiary link-list'>
                      <li className='nav-link'>
                        <a className='nav-link' href='#'>
                          <span>1.1.1 Nested Item </span>
                        </a>
                      </li>
                      <li className='nav-link'>
                        <a className='nav-link' href='#'>
                          <span>1.1.2 Nested Item </span>
                        </a>
                      </li>
                      <li className='nav-link'>
                        <a className='nav-link' href='#'>
                          <span>1.1.3 Nested Item </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='nav-link'>
                    <a className='nav-link' href='#'>
                      <span>1.2 Nested Item </span>
                    </a>
                  </li>
                  <li className='nav-link'>
                    <a className='nav-link' href='#'>
                      <span>1.3 Nested Item </span>
                    </a>
                  </li>
                </ul>
                <a className='nav-link' href='#'>
                  <span>2. List item </span>
                </a>
                <ul className='link-list'>
                  <li className='nav-link'>
                    <a className='nav-link' href='#'>
                      <span>2.1 Nested Item </span>
                    </a>
                    <ul className='tertiary link-list'>
                      <li className='nav-link'>
                        <a className='nav-link' href='#'>
                          <span>2.1.1 Nested Item </span>
                        </a>
                      </li>
                      <li className='nav-link'>
                        <a className='nav-link' href='#'>
                          <span>2.1.2 Nested Item </span>
                        </a>
                      </li>
                      <li className='nav-link'>
                        <a className='nav-link' href='#'>
                          <span>2.1.3 Nested Item </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='nav-link'>
                    <a className='nav-link' href='#'>
                      <span>2.2 Nested Item </span>
                    </a>
                  </li>
                  <li className='nav-link'>
                    <a className='nav-link' href='#'>
                      <span>2.3 Nested Item </span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PosizionamentoTestaAlta;
