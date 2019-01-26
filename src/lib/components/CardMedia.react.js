// @flow

import React, { Component } from 'react';

import MuiCardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
  };

type Props = {
    classes?: object,
    component?: Component,
    image?: string,
    src?: string,
};

const defaultProps = {
    classes: null,
    component: 'div',
    image: null,
    src: null,
};

/** A Dash material-ui Paper component */
class CardMedia extends Component<Props> {
    props: Props;

    render() {
        const {  classes, component, image, src } = this.props;

        return (
            <MuiCardMedia
                classes={classes}
                component={component}
                image={image}
                src={src}
            >
            </MuiCardMedia>
        );
    }
}

CardMedia.defaultProps = defaultProps;

export default withStyles(styles)(CardMedia);