// @flow

import React, { Component } from 'react';

import MuiLink from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';

const styles = {};


type Props = {
    block?: bool,
    children?: node,
    classes?: object,
    color?: 'default' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary',
    component?: Component,
    href?: string,
    style?: object,
    TypographyClasses?: object,
    underline?: 'none' | 'hover' | 'always',
    variant?: string,
};

const defaultProps = {
    block: false,
    children: null,
    classes: null,
    color: 'primary',
    component: 'a',
    href: null,
    style: null,
    TypographyClasses: null,
    underline: 'hover',
    variant: 'inherit',
};

/** A Dash material-ui Paper component */
class Link extends Component<Props> {
    props: Props;

    render() {
        const { block, children, classes, color, component, href, style, TypographyClasses, underline, variant, } = this.props;

        return (
            <MuiLink
                block={block}
                classes={classes}
                color={color}
                component={component}
                href={href}
                style={style}
                TypographyClasses={TypographyClasses}
                underline={underline}
                variant={variant}
            >
                {children}
            </MuiLink>
        );
    }
}

Link.defaultProps = defaultProps;
export default withStyles(styles)(Link);