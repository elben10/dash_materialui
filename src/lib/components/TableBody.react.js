// @flow

import React, { Component } from 'react';

import MuiTableBody from '@material-ui/core/TableBody';
import { withStyles } from '@material-ui/core/styles';

const styles = {};


type Props = {
    children?: node,
    classes?: object,
    component?: componentPropType,
};

const defaultProps = {
    children: null,
    classes: null,
    component: 'thead',
};

/** A Dash material-ui Paper component */
class TableBody extends Component<Props> {
    props: Props;

    render() {
        const { children, classes, component } = this.props;

        return (
            <MuiTableBody
                classes={classes}
                component={component}
            >
                {children}
            </MuiTableBody>
        );
    }
}

TableBody.defaultProps = defaultProps;
export default withStyles(styles)(TableBody);