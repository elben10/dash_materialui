// @flow

import React, { Component } from 'react';

import MuiList from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';

const styles = {};


type Props = {
    children?: node,
    classes?: object,
    component?: Component,
    dense?: bool,
    disablePadding?: bool,
    subheader?: node,
};

const defaultProps = {
    children: null,
    classes: null,
    component: 'ul',
    dense: false,
    disablePadding: false,
    subheader: null,
};

/** A Dash material-ui Paper component */
class List extends Component<Props> {
    props: Props;

    render() {
        const { children, classes, component, dense, disablePadding, subheader } = this.props;

        return (
            <MuiList
                classes={classes}
                component={component}
                dense={dense}
                disablePadding={disablePadding}
                subheader={subheader}
            >
                {children}
            </MuiList>
        );
    }
}

List.defaultProps = defaultProps;
export default withStyles(styles)(List);