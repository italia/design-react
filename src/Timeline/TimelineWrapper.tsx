import React, { FC, HTMLAttributes } from 'react';
import classnames from 'classnames';

export interface TimelineProps extends HTMLAttributes<HTMLElement> {
  /** Classi aggiuntive da usare per il componente TimelineProps */
  className?: string;
}

export const Timeline: FC<TimelineProps> = (props) => {
  const { className, ...attributes } = props;
  const { children, ...rest } = attributes;
  const timelineWrapper = classnames(className, 'it-timeline-wrapper');

  return (
    <div className={timelineWrapper} {...rest}>
      {children}
    </div>
  );
};
