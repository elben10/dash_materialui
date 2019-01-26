// @flow

import React, { Component } from 'react';

import MuiTableHead from '@material-ui/core/TableHead';


type Props = {
    /** The content of the component, normally TableRow. */
    children?: node,
    /** Override or extend the styles applied to the component. See CSS API below for more details. */
    classes?: object,
    /** The color of the component. It supports those theme colors that make sense for this component. */
    component?: componentPropType,
};

const defaultProps = {
    children: null,
    classes: null,
    component: 'thead',
};

/** A Dash material-ui Paper component */
export default class TableHead extends Component<Props> {
    props: Props;

    render() {
        const { children, classes, component } = this.props;

        return (
            <MuiTableHead
                classes={classes}
                component={component}
            >
                {children}
            </MuiTableHead>
        );
    }
}

TableHead.defaultProps = defaultProps;