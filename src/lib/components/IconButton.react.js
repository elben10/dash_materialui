// @flow

import React, { Component } from 'react';

import MuiIconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

const styles = {};


type Props = {
    children?: node,
    classes?: object,
    color?: 'default' | 'inherit' | 'primary' | 'secondary',
    disabled?: bool,
    disabledRipple?: bool,
};

const defaultProps = {
    children: null,
    classes: null,
    color: 'default',
    disabled: false,
    disabledRipple: null,
};

/** A Dash material-ui Paper component */
class IconButton extends Component<Props> {
    props: Props;

    render() {
        const { children, classes, color, disabled, disabledRipple } = this.props;

        return (
            <MuiIconButton
                classes={classes}
                color={color}
                disabled={disabled}
                disableRipple={disabledRipple}
            >
                {children}
            </MuiIconButton>
        );
    }
}

IconButton.defaultProps = defaultProps;
export default withStyles(styles)(IconButton);