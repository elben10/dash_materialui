// @flow

import React, { Component } from 'react';

import MuiPaper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = {};

type Props = {
    /** The content of the component. */
    children?: node,
    /** Override or extend the styles applied to the component. See CSS API below for more details. */
    classes?: object,
    /** The component used for the root node. Either a string to use a DOM element or a component. */
    component?: componentPropType,
    /** Shadow depth, corresponds to dp in the spec. It's accepting values between 0 and 24 inclusive. */
    elevation?: number,
    /** If true, rounded corners are disabled. */
    square?: bool,
};

const defaultProps = {
    children: [],
    classes: {},
    component: 'div',
    elevation: 2,
    square: false,
};

/** A Dash material-ui Paper component */
class Paper extends Component<Props> {
    props: Props;

    render() {
        const { children, classes, component, elevation, square, } = this.props;

        return (
            <MuiPaper
                classes={classes}
                component={component}
                elevation={elevation}
                square={square}
            >
                {children}
            </MuiPaper>
        );
    }
}

Paper.defaultProps = defaultProps;
export default withStyles(styles)(Paper);