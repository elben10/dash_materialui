// @flow

import React, { Component } from 'react';

import MuiTypography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {};


type Props = {
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify',
    children?: node,
    classes?: object,
    color?: 'default' | 'error' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary',
    component?: componentPropType,
    gutterBottom?: bool,
    headlineMapping?: object,
    inline?: bool,
    internalDeprecatedVariant?: bool,
    noWrap?: bool,
    paragraph?: bool,
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline' | 'srOnly' | 'inherit' | "display4" | 'display3' | 'display2' | 'display1' | 'headline' | 'title' | 'subheading'
};

const defaultProps = {
    align: 'inherit',
    children: null,
    classes: null,
    color: 'inherit',
    component: null,
    gutterBottom: false,
    headlineMapping: { h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6', subtitle1: 'h6', subtitle2: 'h6', body1: 'p', body2: 'p'},
    inline: false,
    internalDeprecatedVariant: false,
    noWrap: false,
    paragraph: false,
    variant: null,
};

/** A Dash material-ui Paper component */
class Typography extends Component<Props> {
    props: Props;

    render() {
        const { align, children, classes, color, component, gutterBottom, headlineMapping, inline, internalDeprecatedVariant, noWrap, paragraph, variant } = this.props;

        return (
            <MuiTypography
                align={align}
                classes={classes}
                color={color}
                component={component}
                gutterBottom={gutterBottom}
                headlineMapping={headlineMapping}
                inline={inline}
                internalDeprecatedVariant={internalDeprecatedVariant}
                noWrap={noWrap}
                paragraph={paragraph}
                variant={variant}
            >
                {children}
            </MuiTypography>
        );
    }
}

Typography.defaultProps = defaultProps;
export default withStyles(styles)(Typography);