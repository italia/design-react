// Customized components for https://github.com/JedWatson/react-select/tree/v2/src

import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { default as ReactSelect, SelectBase } from "react-select";

const SelectContainer = props => {
    const { children, innerProps, selectProps } = props;
    const { menuIsOpen, bsSize } = selectProps;

    const classNames = [
        "select-container select-wrapper custom-select",
        menuIsOpen ? "show" : "",
        bsSize ? `form-control-${bsSize}` : ""
    ].join(" ");

    return (
        <div className={classNames} {...innerProps}>
            {children}
        </div>
    );
};

SelectContainer.propTypes = {
    selectProps: PropTypes.shape(SelectPropTypes),
    children: PropTypes.node,
    innerProps: PropTypes.any
};

const Control = props => {
    const { children, innerProps } = props;
    const { innerRef, ...rest } = innerProps;
    return (
        <div className="select-control" {...rest}>
            <span className="caret it-expand" />
            {children}
        </div>
    );
};

Control.propTypes = {
    children: PropTypes.node,
    innerProps: PropTypes.any
};

class ValueContainer extends Component {
    shouldScrollBottom = false;
    node = null;

    UNSAFE_componentWillUpdate() {
        if (!this.props.isMulti) return;

        // scroll only if the user was already at the bottom
        const total = this.node.scrollTop + this.node.offsetHeight;
        this.shouldScrollBottom = total === this.node.scrollHeight;
    }

    componentDidUpdate() {
        const { isMulti } = this.props;

        if (!isMulti) return;

        // ensure we're showing items being added by forcing scroll to the bottom
        if (this.shouldScrollBottom && this.node) {
            this.node.scrollTop = this.node.scrollHeight;
        }
    }

    getScrollContainer = ref => {
        this.node = ref;
    };

    render() {
        const { isMulti, hasValue, selectProps } = this.props;
        const { placeholder, toggleMenuIsOpen } = selectProps;

        let selected = placeholder || "";
        if (hasValue) {
            const value = this.props.getValue();
            selected = value.map(option => option.label);
            selected = selected.length > 1 ? selected.join(", ") : selected;
        }

        return (
            <div
                ref={isMulti ? this.getScrollContainer : undefined}
                className="select-control-value-container"
            >
                <Placeholder
                    handleInputClick={toggleMenuIsOpen}
                    placeholder={selected}
                />
            </div>
        );
    }
}

ValueContainer.propTypes = {
    selectProps: PropTypes.shape(SelectPropTypes),
    isMulti: PropTypes.bool,
    hasValue: PropTypes.bool,
    getValue: PropTypes.func
};

function getMenuPlacement({
    maxHeight,
    menuEl,
    minHeight,
    placement,
    shouldScroll
}) {
    const optimisticState = { placement: "bottom", maxHeight };
    return optimisticState;
}

class Menu extends Component {
    state = {
        maxHeight: this.props.maxMenuHeight,
        placement: null
    };

    getPlacement = ref => {
        const {
            minMenuHeight,
            maxMenuHeight,
            menuPlacement,
            scrollMenuIntoView
        } = this.props;

        if (!ref) return;

        const state = getMenuPlacement({
            maxHeight: maxMenuHeight,
            menuEl: ref,
            minHeight: minMenuHeight,
            placement: menuPlacement,
            shouldScroll: scrollMenuIntoView
        });

        this.setState(state);
    };

    getState = () => {
        const { menuPlacement } = this.props;
        const placement =
            this.state.placement || coercePlacement(menuPlacement);

        return { ...this.props, placement, maxHeight: this.state.maxHeight };
    };

    render() {
        const { children, innerProps, selectProps } = this.props;

        return (
            <div
                className="select-menu dropdown-menu dropdown-menu-container d-block"
                ref={this.getPlacement}
                {...innerProps}
            >
                <Input selectProps={selectProps} />
                {children}
            </div>
        );
    }
}

Menu.propTypes = {
    selectProps: PropTypes.shape(SelectPropTypes),
    children: PropTypes.node,
    innerProps: PropTypes.any,
    /* Minimum height of the menu before flipping */
    maxMenuHeight: PropTypes.number,
    /* Maximum height of the menu before scrolling */
    minMenuHeight: PropTypes.number,
    /* Default placement of the menu in relation to the control. 'auto' will flip
       when there isn't enough space below the control. */
    menuPlacement: PropTypes.oneOf(["auto", "bottom", "top"]),
    scrollMenuIntoView: PropTypes.bool
};

class MenuList extends Component {
    state = { inputValue: "" };

    onInputChange = ({ target }) => {
        this.setState({
            inputValue: target.value
        });
    };

    render() {
        const { children, innerProps, selectProps } = this.props;
        const { isSearchable, placeholder } = selectProps;

        return (
            <div className="select-menu-list dropdown-menu-list">
                {(() => {
                    if (isSearchable) {
                        return <div />;
                    }
                })()}
                <li className="select-menu-list-placeholder disabled">
                    <span>{placeholder}</span>
                </li>
                {children}
            </div>
        );
    }
}

MenuList.propTypes = {
    selectProps: PropTypes.shape(SelectPropTypes),
    children: PropTypes.node,
    innerProps: PropTypes.any
};

const Option = props => {
    const { children, isSelected, innerProps } = props;
    const { innerRef, ...rest } = innerProps;
    const classNames = [
        "select-menu-option dropdown-menu-list-option",
        isSelected ? "active" : ""
    ].join(" ");

    return (
        <li className={classNames} {...rest}>
            <span>{children}</span>
        </li>
    );
};

Option.propTypes = {
    children: PropTypes.node,
    innerProps: PropTypes.any,
    isSelected: PropTypes.bool
};

const Placeholder = props => {
    const { placeholder, innerProps, handleInputClick } = props;
    return (
        <input
            onClick={() => handleInputClick()}
            type="text"
            className="select-placeholder dropdown select-dropdown"
            value={placeholder}
            aria-label={placeholder}
            readOnly
            {...innerProps}
        />
    );
};

Placeholder.propTypes = {
    innerProps: PropTypes.any,
    placeholder: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),
    handleInputClick: PropTypes.func
};

class Input extends Component {
    render() {
        const { selectProps, handleBlur, ...props } = this.props;
        const {
            searchPlaceholder,
            menuIsOpen,
            isSearchable,
            updateSearchInput,
            searchInput
        } = selectProps;

        const shouldShow = !isSearchable || !menuIsOpen ? "d-none" : "";
        const classNames = `select-input-container search-wrap ${shouldShow}`;

        return (
            <div className={classNames}>
                <input
                    type="text"
                    {...props}
                    autoFocus
                    className="select-input search"
                    placeholder={searchPlaceholder}
                    value={searchInput}
                    onChange={({ target }) => updateSearchInput(target.value)}
                />
            </div>
        );
    }
}

Input.propTypes = {
    selectProps: PropTypes.shape(SelectPropTypes),
    handleBlur: PropTypes.func
};

export const GroupHeading = (props: any) => {
    const { children } = props;

    return (
        <li className="select-menu-group-heading optgroup">
            <span>{children}</span>
        </li>
    );
};

class Select extends Component {
    state = {
        menuIsOpen: false,
        searchInput: ""
    };

    components = {
        SelectContainer,
        Control,
        DropdownIndicator: null,
        IndicatorsContainer: () => <div className="select-indicators" />,
        ValueContainer,
        Menu,
        MenuList,
        Option,
        MultiValue: () => <div className="multi-value-container" />,
        SingleValue: () => <div className="single-value-container" />,
        GroupHeading,
        ...this.props.components
    };

    componentDidMount() {
        document.addEventListener("touchend", this.handle, true);
        document.addEventListener("click", this.handle, true);
    }

    componentWillUnmount() {
        document.removeEventListener("touchend", this.handle, true);
        document.removeEventListener("click", this.handle, true);
    }

    handle = e => {
        if (e.type === "touchend") this.isTouch = true;
        if (e.type === "click" && this.isTouch) return;

        const el = ReactDOM.findDOMNode(this.container);
        if (el && !el.contains(e.target)) this.toggleMenuIsOpen(false);
    };

    toggleMenuIsOpen = status => {
        const { disabled } = this.props;
        if (disabled) return;

        const isDefined = status !== undefined;
        this.setState((prevState, props) => {
            return { menuIsOpen: isDefined ? status : !prevState.menuIsOpen };
        });
    };

    updateSearchInput = searchInput => {
        this.setState({ searchInput });
    };

    filterOptions = options => {
        if (this.state.searchInput) {
            const searchInput = this.state.searchInput.toLowerCase();
            return options.filter(option => {
                const label = option.label.toLowerCase();
                const matches = label.match(searchInput);
                return matches !== null;
            });
        }

        return options;
    };

    render() {
        const { menuIsOpen, searchInput } = this.state;
        const { options, isSearchable, disabled, placeholder } = this.props;

        return (
            <ReactSelect
                {...this.props}
                ref={el => {
                    this.container = el;
                }}
                isDisabled={disabled}
                menuIsOpen={menuIsOpen}
                hideSelectedOptions={false}
                backspaceRemovesValue={false}
                options={this.filterOptions(options)}
                searchInput={searchInput}
                isSearchable={!!isSearchable}
                toggleMenuIsOpen={this.toggleMenuIsOpen}
                updateSearchInput={this.updateSearchInput}
                components={this.components}
                aria-label={placeholder}
            />
        );
    }
}

export default Select;

export const SelectComponentsPropTypes = {
    ClearIndicator: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    Control: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    DropdownIndicator: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    DownChevron: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    CrossIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    Group: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    GroupHeading: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    IndicatorsContainer: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func
    ]),
    IndicatorSeparator: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func
    ]),
    Input: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    LoadingIndicator: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    Menu: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    MenuList: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    MenuPortal: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    LoadingMessage: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    NoOptionsMessage: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    MultiValue: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    MultiValueContainer: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func
    ]),
    MultiValueLabel: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    MultiValueRemove: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    Option: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    Placeholder: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    SelectContainer: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    SingleValue: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    ValueContainer: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
};

export const SelectPropTypes = {
    /* Bootstrap's input size */
    bsSize: PropTypes.string,
    /*
      This complex object includes all the compositional components that are used
      in `react-select`. If you wish to overwrite a component, pass in an object
      with the appropriate namespace.

      If you only wish to restyle a component, we recommend using the `styles` prop
      instead. For a list of the components that can be passed in, and the shape
      that will be passed to them
    */
    components: PropTypes.shape(SelectComponentsPropTypes),
    disabled: PropTypes.bool,
    /* The value of the search input */
    inputValue: PropTypes.string,
    /* Whether to enable search functionality */
    isSearchable: PropTypes.bool,
    /* Whether the menu is open */
    menuIsOpen: PropTypes.bool,
    /* Array of options that populate the select menu */
    options: PropTypes.arrayOf(PropTypes.any),
    onInputClear: PropTypes.func,
    /* Placeholder text for the select value */
    placeholder: PropTypes.string,
    searchInput: PropTypes.string,
    searchPlaceholder: PropTypes.string,
    toggleMenuIsOpen: PropTypes.func,
    updateSearchInput: PropTypes.func
};

Select.propTypes = SelectPropTypes;

Select.defaultProps = SelectBase.defaultProps;
