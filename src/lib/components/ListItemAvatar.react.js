// @flow

import React, { Component } from 'react';

import MuiListItemAvatar from '@material-ui/core/ListItemAvatar';
import { withStyles } from '@material-ui/core/styles';

const styles = {};


type Props = {
    children?: node,
    classes?: object,
};

const defaultProps = {
    children: null,
    classes: null,
};

/** A Dash material-ui Paper component */
class ListItemAvatar extends Component<Props> {
    props: Props;

    render() {
        const { children, classes, } = this.props;

        return (
            <MuiListItemAvatar
                classes={classes}
            >
                {children}
            </MuiListItemAvatar>
        );
    }
}

ListItemAvatar.defaultProps = defaultProps;
export default withStyles(styles)(ListItemAvatar);