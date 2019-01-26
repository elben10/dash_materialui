// @flow

import React, { Component } from 'react';

import MuiCircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';


const styles = {};

type Props = {
    classes?: object,
    color?: 'primary' | 'secondary' | 'inherit',
    disableShrink?: bool,
    size?: number | string,
    thickness?: number,
    value?: number,
    variant?: 'determinate' | 'indeterminate' | 'static',
};

const defaultProps = {
    classes: null,
    color: 'primary',
    disableShrink: false,
    size: 40,
    thickness: 3.6,
    value: 0,
    variant: 'indeterminate',
};

/** A Dash material-ui Paper component */
class CircularProgress extends Component<Props> {
    props: Props;

    render() {
        const {  classes, color, disableShrink, size, thickness, value, variant, } = this.props;

        return (
            <MuiCircularProgress
                classes={classes}
                color={color}
                disableShrink={disableShrink}
                size={size}
                thickness={thickness}
                value={value}
                variant={variant}
            >
            </MuiCircularProgress>
        );
    }
}

CircularProgress.defaultProps = defaultProps;

export default withStyles(styles)(CircularProgress);