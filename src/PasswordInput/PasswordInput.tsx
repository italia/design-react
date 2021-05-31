import React, { Component, Fragment, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { Input } from '../Input/Input';

export interface PasswordInputProps extends HTMLAttributes<HTMLInputElement> {
  type: 'password' | HTMLInputElement['type'];
}

interface PasswordInputState {
  showPassword: boolean;
}

export class PasswordInput extends Component<
  PasswordInputProps,
  PasswordInputState
> {
  state = {
    showPassword: false
  };

  onPasswordToggle = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword
    }));
  };

  render() {
    const { showPassword } = this.state;
    const { type = 'password', ...rest } = this.props;

    const className = classNames('btn-eye', {
      'eye-off': showPassword,
      'eye-on': !showPassword
    });

    return (
      <Fragment>
        <span className={className} onClick={this.onPasswordToggle} />
        <Input {...rest} type={showPassword ? 'text' : (type as 'password')} />
      </Fragment>
    );
  }
}
