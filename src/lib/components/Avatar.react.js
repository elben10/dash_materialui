// @flow

import React, { Component } from 'react';

import MuiAvatar from '@material-ui/core/Avatar';

type Props = {
    /** Used in combination with src or srcSet to provide an alt attribute for the rendered img element. */
    alt?: string,
    /** The content of the component. */
    children?: node,
    /** Override or extend the styles applied to the component. See CSS API below for more details. */
    classes?: object,
    /** The component used for the root node. Either a string to use a DOM element or a component. */
    component?: componentPropType,
    /** Attributes applied to the img element if the component is used to display an image. */
    imgProps?: object,
    /** The sizes attribute for the img element. */
    sizes?: string,
    /** The src attribute for the img element. */
    src?: string,
    /** The srcSet attribute for the img element. */
    srcSet?: string,
};

const defaultProps = {
    alt: '',
    children: [],
    classes: {},
    component: 'div',
    imgProps: {},
    sizes: '',
    src: '',
    srcSet: '',
};

/** A Dash material-ui Avatar component */
export default class Avatar extends Component<Props> {
    props: Props;

    render() {
        const { alt, children, classes, component, imgProps, sizes, src, srcSet } = this.props;

        return (
            <MuiAvatar
                alt={alt}
                classes={classes}
                component={component}
                imgProps={imgProps}
                sizes={sizes}
                src={src}
                srcSet={srcSet}
            >
                {children}
            </MuiAvatar>
        );
    }
}

Avatar.defaultProps = defaultProps;