/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { useState } from 'react';
import { Icon } from '../../src';

const ComponenteMenuInline = () => {
  const [isOpenOne, toggleNavScrollOne] = useState(false);
  const [isOpenTwo, toggleNavScrollTwo] = useState(false);
  const [isOpenThree, toggleNavScrollThree] = useState(false);
  return (
    <nav className='inline-menu'>
      <div className='link-list-wrapper'>
        <ul className='link-list'>
          <li>
            <a
              className={
                isOpenOne
                  ? 'list-item large medium right-icon'
                  : 'list-item large medium right-icon collapsed'
              }
              href={`#collapseOne`}
              data-toggle='collapse'
              aria-expanded='false'
              aria-controls='collapseOne'
              onClick={(e) => {
                e.preventDefault();
                toggleNavScrollOne(!isOpenOne);
              }}
            >
              <span>Link list 1</span>
              <Icon color='primary' icon='it-expand' aria-hidden size='sm' />
            </a>
            <ul
              className={
                isOpenOne
                  ? 'link-sublist collapse show'
                  : 'link-sublist collapse'
              }
              id='collapseOne'
            >
              <li>
                <a className='list-item' href='#'>
                  <span>Link list 1</span>
                </a>
              </li>
              <li>
                <a className='list-item' href='#'>
                  <span>Link list 1</span>
                </a>
              </li>
              <li>
                <a className='list-item' href='#'>
                  <span>Link list 1</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className={
                isOpenTwo
                  ? 'list-item large medium right-icon'
                  : 'list-item large medium right-icon collapsed'
              }
              href={`#collapseTwo`}
              data-toggle='collapse'
              aria-expanded='false'
              aria-controls='collapseTwo'
              onClick={(e) => {
                e.preventDefault();
                toggleNavScrollTwo(!isOpenTwo);
              }}
            >
              <span>Link list 2</span>
              <Icon color='primary' icon='it-expand' aria-hidden size='sm' />
            </a>
            <ul
              className={
                isOpenTwo
                  ? 'link-sublist collapse show'
                  : 'link-sublist collapse'
              }
              id='collapseTwo'
            >
              <li>
                <a className='list-item' href='#'>
                  <span>Link list 2</span>
                </a>
              </li>
              <li>
                <a className='list-item' href='#'>
                  <span>Link list 2</span>
                </a>
              </li>
              <li>
                <a className='list-item' href='#'>
                  <span>Link list 2</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className={
                isOpenThree
                  ? 'list-item large medium right-icon'
                  : 'list-item large medium right-icon collapsed'
              }
              href={`#collapseThree`}
              data-toggle='collapse'
              aria-expanded='false'
              aria-controls='collapseThree'
              onClick={(e) => {
                e.preventDefault();
                toggleNavScrollThree(!isOpenThree);
              }}
            >
              <span>Link list 3</span>
              <Icon color='primary' icon='it-expand' aria-hidden size='sm' />
            </a>
            <ul
              className={
                isOpenThree
                  ? 'link-sublist collapse show'
                  : 'link-sublist collapse'
              }
              id='collapseThree'
            >
              <li>
                <a className='list-item' href='#'>
                  <span>Link list 3</span>
                </a>
              </li>
              <li>
                <a className='list-item' href='#'>
                  <span>Link list 3</span>
                </a>
              </li>
              <li>
                <a className='list-item' href='#'>
                  <span>Link list 3</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ComponenteMenuInline;
