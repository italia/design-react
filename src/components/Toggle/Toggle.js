import React, { Component } from "react";
import PropTypes from "prop-types";

import { Label, Input } from "../../../src";

class Toggle extends Component {
    render() {
        const { label, ...rest } = this.props;

        return (
            <div className="toggles">
                <Label check>
                    {label}
                    <Input type="checkbox" {...rest} />
                    <span className="lever" />
                </Label>
            </div>
        );
    }
}

Toggle.propTypes = Object.assign(
    {},
    {
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    },
    Input.propTypes
);

export default Toggle;
