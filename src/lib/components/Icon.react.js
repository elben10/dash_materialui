// @flow

import React, { Component } from 'react';

import MuiIcon from '@material-ui/core/Icon';


type Props = {
    /** The name of the icon font ligature. */
    children?: Node,
    /** Override or extend the styles applied to the component. See CSS API below for more details. */
    classes?: object,
    /** The color of the component. It supports those theme colors that make sense for this component. */
    color?: 'inherit' | 'primary' | 'secondary' | 'action' | 'error' | 'disabled',
    /** The component used for the root node. Either a string to use a DOM element or a component. */
    component?: componentPropType,
    /** The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size. */
    fontSize?: 'inherit' | 'default' | 'small' | 'large',
};

const defaultProps = {
    children: null,
    classes: null,
    color: 'inherit',
    component: 'span',
    fontSize: 'default',
};

/** A Dash material-ui Paper component */
export default class Icon extends Component<Props> {
    props: Props;

    render() {
        const { children, classes, color, component, fontSize } = this.props;

        return (
            <MuiIcon
                classes={classes}
                color={color}
                component={component}
                fontSize={fontSize}
            >
                {children}
            </MuiIcon>
        );
    }
}

Icon.defaultProps = defaultProps;