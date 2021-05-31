import React, { FC, ReactElement } from 'react';
import SelectBase, { components } from 'react-select';
import { Icon } from '../Icon/Icon';
import type {
  Props as SelectBaseProps,
  IndicatorProps,
  OptionTypeBase,
  GroupTypeBase,
  OptionProps
} from 'react-select';
import { styles } from './shared';

export interface SelectProps<
  OptionType extends OptionTypeBase,
  IsMulti extends boolean,
  GroupType extends GroupTypeBase<OptionType>
> extends SelectBaseProps<OptionType, IsMulti, GroupType> {
  icon?: boolean;
  clearText?: string;
}

const DropdownIndicator = <
  OptionType extends OptionTypeBase,
  IsMulti extends boolean,
  GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>(
  props: IndicatorProps<OptionType, IsMulti, GroupType>
) => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon icon='it-arrow-down-triangle' aria-hidden />
    </components.DropdownIndicator>
  );
};

const Option = <
  OptionType extends OptionTypeBase,
  IsMulti extends boolean,
  GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>(
  props: OptionProps<OptionType, IsMulti, GroupType>
) => {
  return (
    <div className='select-pill text-primary'>
      <components.Option {...props} />
    </div>
  );
};

const CustomClearText: FC<{ clearText: string }> = ({ clearText }) => (
  <>{clearText}</>
);

export const Select = <
  OptionType extends OptionTypeBase = { label: string; value: string },
  IsMulti extends boolean = false,
  GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>({
  clearText = 'Annulla',
  icon = false,
  ...props
}: SelectProps<OptionType, IsMulti, GroupType>): ReactElement<
  SelectProps<OptionType, IsMulti, GroupType>
> => {
  // @TODO: move it outside when migrating to hooks
  const ClearIndicator = <
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
  >(
    clearIndicatorProps: IndicatorProps<OptionType, IsMulti, GroupType>
  ) => {
    const {
      children = <CustomClearText clearText={clearText} />,
      innerProps: { ref, ...restInnerProps }
    } = clearIndicatorProps;
    return (
      <div className='select-pill text-primary' {...restInnerProps} ref={ref}>
        <div style={{ padding: '0px 5px' }}>{children}</div>
      </div>
    );
  };

  const selectComponents = {
    ...props.components,
    Option,
    DropdownIndicator,
    IndicatorSeparator: null
  };

  if (props.isClearable) {
    selectComponents.ClearIndicator = ClearIndicator;
  }
  return (
    <SelectBase {...props} components={selectComponents} styles={styles} />
  );
};
