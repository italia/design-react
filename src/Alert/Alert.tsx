import React, {
  FC,
  HTMLAttributes,
  MouseEventHandler,
  ElementType,
  Ref
} from 'react';
import { Alert as InnerAlert, FadeProps, CSSModule } from 'reactstrap';

// Copy over from reactstrap and add new ones
export interface AlertProps extends HTMLAttributes<HTMLElement> {
  closeClassName?: string;
  closeAriaLabel?: string;
  /** Oggetto contenente la nuova mappatura per le classi CSS. */
  cssModule?: CSSModule;
  /** Le varianti di colore definite in Bootstrap Italia */
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | string;
  fade?: boolean;
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  transition?: FadeProps;
  /** Da utilizzare per impostare un riferimento all'elemento DOM */
  innerRef?: Ref<HTMLElement>;
  isOpen?: boolean;
  toggle?: MouseEventHandler<any>;
}

const defaultProps = {
  color: 'success',
  isOpen: true,
  fade: true
};

export const Alert: FC<AlertProps> = (props) => {
  return <InnerAlert {...props} />;
};

Alert.defaultProps = defaultProps;
