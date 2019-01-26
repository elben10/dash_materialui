// @flow

import React, { Component } from 'react';

import MuiCardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';

const styles = {};

type Props = {
    children?: node,
    classes?: object,
    component?: Component,
};

const defaultProps = {
    children: null,
    classes: null,
    component: 'div'
};

/** A Dash material-ui Paper component */
class CardContent extends Component<Props> {
    props: Props;

    render() {
        const { children, classes, component, } = this.props;

        return (
            <MuiCardContent
                classes={classes}
                component={component}
            >
                {children}
            </MuiCardContent>
        );
    }
}

CardContent.defaultProps = defaultProps;
export default withStyles(styles)(CardContent);