import React, { Component, ElementType } from 'react';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';

import { Util } from 'reactstrap';
import type { TransitionProps } from 'react-transition-group/Transition';

const {
  // @ts-ignore
  TransitionTimeouts,
  // @ts-ignore
  TransitionPropTypeKeys,
  // @ts-ignore
  TransitionStatuses,
  // @ts-ignore
  pick,
  // @ts-ignore
  omit
} = Util;

export type AccordionBodyProps = Partial<TransitionProps> & {
  tag?: ElementType;
  className?: string;
  active?: boolean;
  onToggle?: () => void;
};

const transitionStatusToClassHash = {
  [TransitionStatuses.ENTERING]: 'collapsing',
  [TransitionStatuses.ENTERED]: 'collapse show',
  [TransitionStatuses.EXITING]: 'collapsing',
  [TransitionStatuses.EXITED]: 'collapse'
};

type TransitionStates = keyof typeof transitionStatusToClassHash;

function getTransitionClass(status: TransitionStates) {
  return transitionStatusToClassHash[status] || 'collapse';
}

function getHeight(node: HTMLElement) {
  return node.scrollHeight;
}

export class AccordionBody extends Component<
  AccordionBodyProps,
  { height: null | number }
> {
  state = {
    height: null
  };

  onEntering = (node: HTMLElement, isAppearing: boolean) => {
    this.setState({ height: getHeight(node) });
    this.props.onEntering?.(node, isAppearing);
  };

  onEntered = (node: HTMLElement, isAppearing: boolean) => {
    this.setState({ height: null });
    this.props.onEntered?.(node, isAppearing);
  };

  onExit = (node: HTMLElement) => {
    this.setState({ height: getHeight(node) });
    this.props.onExit?.(node);
  };

  onExiting = (node: HTMLElement) => {
    // getting this variable triggers a reflow
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _unused = node.offsetHeight;
    this.setState({ height: 0 });
    this.props.onExiting?.(node);
  };

  onExited = (node: HTMLElement) => {
    this.setState({ height: null });
    this.props.onExited?.(node);
  };

  render() {
    const {
      className,
      tag = 'div',
      active = false,
      children,
      timeout = TransitionTimeouts.Collapse,
      ...attributes
    } = this.props;
    const Tag = tag;
    const { height } = this.state;

    const transitionProps = pick(attributes, TransitionPropTypeKeys);
    const childProps = omit(attributes, TransitionPropTypeKeys);

    return (
      <Transition
        {...transitionProps}
        timeout={timeout}
        in={active}
        onEntering={this.onEntering}
        onEntered={this.onEntered}
        onExit={this.onExit}
        onExiting={this.onExiting}
        onExited={this.onExited}
      >
        {(status: TransitionStates) => {
          const transitionClass = getTransitionClass(status);
          const classes = classNames(className, transitionClass);

          const style = height == null ? null : { height };

          return (
            <Tag
              className={classes}
              style={{ ...childProps.style, ...style }}
              {...childProps}
            >
              <div className='collapse-body'>{children}</div>
            </Tag>
          );
        }}
      </Transition>
    );
  }
}
