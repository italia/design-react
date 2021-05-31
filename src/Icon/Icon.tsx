import React, { FC, SVGProps } from 'react';
import classNames from 'classnames';
import * as Svgs from './assets';
import { EmptyIcon } from './EmptyIcon';

const kebabCase = (string: string): string =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase()
    // remove svg- prefix to all icons
    .substring(4);

// Icons are stored with names in PascalCase, but icon names are in kebab-case
// Here's the remap of the icons from PascalCase to kebab-case
const icons = Object.keys(Svgs).reduce((memo, pascalName) => {
  // @ts-ignore
  memo[kebabCase(pascalName)] = Svgs[pascalName];
  return memo;
}, {} as Record<string, FC<SVGProps<SVGSVGElement>>>);

export const iconsList = Object.keys(icons);

export interface IconProps extends SVGProps<SVGSVGElement> {
  /** Classi aggiuntive da usare per il componente Badge */
  className?: string;
  /** Le varianti di colore definite in Bootstrap Italia */
  color?: 'success' | 'warning' | 'danger' | 'note' | 'important' | string;
  /** Le dimensioni dell'icona. In ordine dalla più grande alla più piccola: "xl", "lg", '' (stringa vuota), "sm", "xs". */
  size?: 'xl' | 'lg' | '' | 'sm' | 'xs';
  /** Il nome dell'icona da mostrare. Per una lista completa vedi: @TODO-URL */
  icon: string;
  /** Quando abilitato riduce la dimensione dell'icona all'interno del contenitore.  */
  padding?: boolean;
}

export const Icon: FC<IconProps> = ({
  color = '',
  size = '',
  icon = '',
  className,
  padding = false,
  ...attributes
}) => {
  const classes = classNames('icon', className, {
    [`icon-${color}`]: color,
    [`icon-${size}`]: size,
    'icon-padded': padding
  });
  if (!icons[icon]) {
    console.error(
      `Icon "${icon}" not found. Check on https://rb.gy/lcdkyi for the full icon list.`
    );
    return <EmptyIcon className={classes} {...attributes} />;
  }

  const IconComponent = icons[icon];
  return <IconComponent className={classes} role='img' {...attributes} />;
};
