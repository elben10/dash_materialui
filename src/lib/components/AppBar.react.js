// @flow

import React, { Component } from 'react';

import MuiAppBar from '@material-ui/core/AppBar';

type Props = {
    /** The content of the component. */
    children?: node,
    /** Override or extend the styles applied to the component. See CSS API below for more details. */
    classes?: object,
    /** The color of the component. It supports those theme colors that make sense for this component. */
    color?: 'inherit' | 'primary' | 'secondary' | 'default',
    /** The positioning type. The behavior of the different options is described in the MDN web docs. Note: sticky is not universally supported and will fall back to static when unavailable. */
    position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative',
};

const defaultProps = {
    children: [],
    classes: {},
    color: 'primary',
    position: 'fixed',
};

/** A Dash material-ui Paper component */
export default class AppBar extends Component<Props> {
    props: Props;

    render() {
        const { children, classes, component, elevation, square, } = this.props;

        return (
            <MuiAppBar
                classes={classes}
                component={component}
                elevation={elevation}
                square={square}
            >
                {children}
            </MuiAppBar>
        );
    }
}

AppBar.defaultProps = defaultProps;