// @flow

import React, { Component } from 'react';

import MuiListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';

const styles = {};


type Props = {
    alignItems?: 'flex-start' | 'center',
    button?: bool,
    children?: node,
    classes?: object,
    component?: Component,
    ContainerComponent?: Component,
    ContainerProps?: object,
    dense?: bool,
    disabled?: bool,
    disableGutters?: bool,
    divider?: bool,
    selected?: bool,
};

const defaultProps = {
    alignItems: 'center',
    button: false,
    children: null,
    classes: null,
    component: null,
    ContainerComponent: 'li',
    ContainerProps: {},
    dense: false,
    disabled: false,
    disableGutters: false,
    divider: false,
    selected: false,
};

/** A Dash material-ui Paper component */
class ListItem extends Component<Props> {
    props: Props;

    render() {
        const { alignItems, button, children, classes, component, ContainerComponent, ContainerProps, dense, disabled, disableGutters, divider, selected } = this.props;

        return (
            <MuiListItem
                alignItems={alignItems}
                button={button}
                classes={classes}
                component={component}
                ContainerComponent={ContainerComponent}
                ContainerProps={ContainerProps}
                dense={dense}
                disabled={disabled}
                disableGutters={disableGutters}
                divider={divider}
                selected={selected}
            >
                {children}
            </MuiListItem>
        );
    }
}

ListItem.defaultProps = defaultProps;
export default withStyles(styles)(ListItem);