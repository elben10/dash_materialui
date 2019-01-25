// @flow

import React, { Component, Children } from 'react';

import MuiBadge from '@material-ui/core/Badge';

type Props = {
    /** The content rendered within the badge. */
    badgeContent?: node,
    /** The badge will be added relative to this node. */
    children?: node,
    /** Override or extend the styles applied to the component. See CSS API below for more details. */
    classes?: object,
    /** The color of the component. It supports those theme colors that make sense for this component. */
    color?: 'default' | 'primary' | 'secondary' | 'error',
    /** The component used for the root node. Either a string to use a DOM element or a component. */
    component?: componentPropType,
    /** If true, the badge will be invisible. */
    invisible?: bool,
    /** Max count to show. */
    max?: number,
    /** Controls whether the badge is hidden when badgeContent is zero. */
    showZero?: bool,
    /** The variant to use. */
    variant?: 'standard' |'dot',
};

const defaultProps = {
    badgeContent: [],
    children: [],
    classes: {},
    color: 'default',
    component: 'span',
    invisible: false,
    max: 99,
    showZero: false,
    variant: 'standard',
};

/** A Dash material-ui Badge component */
export default class Badge extends Component<Props> {
    props: Props;

    render() {
        const { badgeContent, children, classes, color, component, invisible, max, showZero, variant } = this.props;

        return (
            <MuiBadge
            badgeContent={badgeContent}
            classes={classes}
            color={color}
            component={component}
            invisible={invisible}
            max={max}
            showZero={showZero}
            variant={variant}
            >
            {children}
            </MuiBadge>
        );
    }
}

Badge.defaultProps = defaultProps;