// @flow

import React, { Component } from 'react';

import MuiTable from '@material-ui/core/Table';
import { withStyles } from '@material-ui/core/styles';

const styles = {};


type Props = {
    /** The content of the table, normally TableHead and TableBody. */
    children?: node,
    /** Override or extend the styles applied to the component. See CSS API below for more details. */
    classes?: object,
    /** The color of the component. It supports those theme colors that make sense for this component. */
    component?: componentPropType,
    /** Allows TableCells to inherit padding of the Table. */
    padding?: 'default' | 'checkbox' | 'dense' | 'none',
};

const defaultProps = {
    children: null,
    classes: null,
    component: 'table',
    padding: 'default',
};

/** A Dash material-ui Paper component */
class Table extends Component<Props> {
    props: Props;

    render() {
        const { children, classes, component, padding } = this.props;

        return (
            <MuiTable
                classes={classes}
                component={component}
                padding={padding}
            >
                {children}
            </MuiTable>
        );
    }
}

Table.defaultProps = defaultProps;
export default withStyles(styles)(Table);