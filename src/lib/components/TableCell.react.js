// @flow

import React, { Component } from 'react';

import MuiTableCell from '@material-ui/core/TableCell';


type Props = {
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify',
    children?: node,
    classes?: object,
    component?: componentPropType,
    padding?: 'default' | 'checkbox' | 'dense' | 'none',
    scope?: string,
    sortDirection?: 'asc' | 'desc' | false,
    variant: 'head' | 'body' | 'footer',
};

const defaultProps = {
    align: 'inherit',
    children: null,
    classes: null,
    component: 'td',
    padding: null,
    scope: null,
    sortDirection: null,
    variant: null,
};

/** A Dash material-ui Paper component */
export default class TableCell extends Component<Props> {
    props: Props;

    render() {
        const { align, children, classes, component, padding, scope, sortDirection, variant,  } = this.props;

        return (
            <MuiTableCell
                align={align}
                classes={classes}
                component={component}
                padding={padding}
                scope={scope}
                sortDirection={sortDirection}
                variant={variant}
            >
                {children}
            </MuiTableCell>
        );
    }
}

TableCell.defaultProps = defaultProps;