// @flow

import React, { Component } from 'react';

import MuiButton from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {};


type Props = {
    children?: node,
    classes?: object,
    color?: 'default' | 'inherit' | 'primary' | 'secondary',
    component?: Component,
    disabled?: bool,
    disableFocusRipple?: bool,
    disableRipple?: bool,
    fullWidth?: bool,
    href?: string,
    mini?: bool,
    size?: 'small' | 'medium' | 'large',
    variant?: 'text' | 'outlined' | 'contained' | 'fab' | 'extendedFab' | 'flat' | 'raised',
};

const defaultProps = {
    children: null,
    classes: null,
    color: 'default',
    component: 'button',
    disabled: false,
    disableFocusRipple: false,
    disableRipple: null,
    fullWidth: false,
    href: null,
    mini: false,
    size: 'medium',
    variant: 'text',
};

/** A Dash material-ui Paper component */
class Button extends Component<Props> {
    props: Props;

    render() {
        const { children, classes, color, component, disabled, disableFocusRipple, disableRipple, fullWidth, href, mini, size, variant, } = this.props;

        return (
            <MuiButton
                classes={classes}
                color={color}
                component={component}
                disabled={disabled}
                disableFocusRipple={disableFocusRipple}
                disableRipple={disableRipple}
                fullWidth={fullWidth}
                href={href}
                mini={mini}
                size={size}
                variant={variant}
            >
                {children}
            </MuiButton>
        );
    }
}

Button.defaultProps = defaultProps;
export default withStyles(styles)(Button);