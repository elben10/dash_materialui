// @flow

import React, { Component } from 'react';

import MuiTableFooter from '@material-ui/core/TableFooter';


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
export default class TableFooter extends Component<Props> {
    props: Props;

    render() {
        const { children, classes, component } = this.props;

        return (
            <MuiTableFooter
                classes={classes}
                component={component}
            >
                {children}
            </MuiTableFooter>
        );
    }
}

TableFooter.defaultProps = defaultProps;