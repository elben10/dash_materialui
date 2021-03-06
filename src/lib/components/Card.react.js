// @flow

import React, { Component } from 'react';

import MuiCard from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {
        maxWidth: 400,
    },
  };

type Props = {
    /** The content of the component. */
    children?: node,
    /** Override or extend the styles applied to the component. See CSS API below for more details. */
    classes?: object,
    /** If true, the card will use raised styling. */
    raised?: bool,

};

const defaultProps = {
    children: [],
    classes: {},
    raised: false,
};

/** A Dash material-ui Paper component */
class Card extends Component<Props> {
    props: Props;

    render() {
        const { children, classes, raised, } = this.props;

        return (
            <MuiCard
                classes={classes}
                raised={raised}
            >
                {children}
            </MuiCard>
        );
    }
}

Card.defaultProps = defaultProps;

export default withStyles(styles)(Card);