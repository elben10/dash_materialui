// @flow

import React, { Component } from 'react';

import MuiCardHeader from '@material-ui/core/CardHeader';
import { withStyles } from '@material-ui/core/styles';

const styles = {};

type Props = {
    /** The action to display in the card header. */
    action?: node,
    /** The Avatar for the Card Header. */
    avatar?: node,
    /** Override or extend the styles applied to the component. See CSS API below for more details. */
    classes?: object,
    /** The component used for the root node. Either a string to use a DOM element or a component. */
    component?: componentPropType,
    /** If true, the children won't be wrapped by a Typography component. This can be useful to render an alternative Typography variant by wrapping the title text, and optional subheader text with the Typography component. */
    disableTypography?: bool,
    /** The content of the component. */
    subheader?: node,
    /** subheaderTypographyProps */
    subheaderTypographyProps?: object,
    /** The content of the Card Title. */
    title?: node,
    /** These props will be forwarded to the title (as long as disableTypography is not true). */
    titleTypographyProps?: object,
};

const defaultProps = {
    action: null,
    avatar: null,
    classes: null,
    component: 'div',
    disableTypography: false,
    subheader: null,
    subheaderTypographyProps: null,
    title: null,
    titleTypographyProps: null,
};

/** A Dash material-ui Paper component */
class CardHeader extends Component<Props> {
    props: Props;

    render() {
        const { action, avatar, classes, component, disableTypography, subheader, subheaderTypographyProps, title, titleTypographyProps } = this.props;

        return (
            <MuiCardHeader
                action={action}
                avatar={avatar}
                classes={classes}
                component={component}
                disableTypography={disableTypography}
                subheader={subheader}
                subheaderTypographyProps={subheaderTypographyProps}
                title={title}
                titleTypographyProps={titleTypographyProps}
            >
            </MuiCardHeader>
        );
    }
}

CardHeader.defaultProps = defaultProps;
export default withStyles(styles)(CardHeader);