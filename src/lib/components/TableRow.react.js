// @flow

import React, { Component } from 'react';

import MuiTableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

const styles = {};


type Props = {
    children?: node,
    classes?: object,
    component?: componentPropType,
    hover?: bool,
    selected?: bool, 
};

const defaultProps = {
    children: null,
    classes: null,
    component: 'tr',
    hover: false,
    selected: false,
};

/** A Dash material-ui Paper component */
class TableRow extends Component<Props> {
    props: Props;

    render() {
        const { children, classes, component, hover, selected,  } = this.props;

        return (
            <MuiTableRow
                classes={classes}
                component={component}
                hover={hover}
                selected={selected}
            >
                {children}
            </MuiTableRow>
        );
    }
}

TableRow.defaultProps = defaultProps;
export default withStyles(styles)(TableRow);