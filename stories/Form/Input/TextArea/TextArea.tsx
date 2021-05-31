import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  rows: PropTypes.number,
  cols: PropTypes.number,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool
};

class TextArea extends React.Component {
  constructor() {
    super();
    this.state = {
      isFocused: false
    };
  }

  toggleFocusLabel = () => {
    this.setState({
      isFocused: true
    });
  };

  toggleBlurLabel = (e) => {
    if (e.target.value === '') {
      this.setState({
        isFocused: !this.state.isFocused
      });
    }
  };

  render() {
    const { label, placeholder, ...attributes } = this.props;

    if (placeholder) {
      return (
        <div className='form-group'>
          <textarea
            {...attributes}
            className={this.state.isFocused ? 'focus--mouse' : ''}
            onFocus={this.toggleFocusLabel}
            onBlur={(e) => this.toggleBlurLabel(e)}
            id='exampleFormControlTextarea1'
            rows={this.props.rows}
            cols={this.props.cols}
            placeholder={this.props.placeholder}
          />
          <label htmlFor='exampleFormControlTextarea1' className='active'>
            {this.props.label}
          </label>
        </div>
      );
    }

    return (
      <div className='form-group'>
        <textarea
          {...attributes}
          className={this.state.isFocused ? 'focus--mouse' : ''}
          onFocus={this.toggleFocusLabel}
          onBlur={(e) => this.toggleBlurLabel(e)}
          id='exampleFormControlTextarea1'
          rows={this.props.rows}
          cols={this.props.cols}
          placeholder={this.props.placeholder}
        />
        <label
          htmlFor='exampleFormControlTextarea1'
          className={this.state.isFocused ? 'active' : ''}
        >
          {this.props.label}
        </label>
      </div>
    );
  }
}
export default TextArea;

TextArea.propTypes = propTypes;
