// @flow

import React, { Component } from 'react';

import MuiCollapse from '@material-ui/core/Collapse';
import { withStyles } from '@material-ui/core/styles';

const styles = {};


type Props = {
    children?: node,
    classes?: object,
    collapsedHeight?: string,
    component?: componentPropType,
    in_?: bool,
    timeout?: number | { enter?: number, exit?: number } | 'auto',
};

const defaultProps = {
    children: null,
    classes: null,
    collapsedHeight: '0px',
    component: 'div',
    in_: null,
    timeout: 'auto',
};

/** A Dash material-ui Paper component */
class Collapse extends Component<Props> {
    props: Props;

    render() {
        const { children, classes, collapsedHeight, component, in_, timeout, } = this.props;

        return (
            <MuiCollapse
                classes={classes}
                collapsedHeight={collapsedHeight}
                component={component}
                in={in_}
                timeout={timeout}
            >
                {children}
            </MuiCollapse>
        );
    }
}

Collapse.defaultProps = defaultProps;
export default withStyles(styles)(Collapse);