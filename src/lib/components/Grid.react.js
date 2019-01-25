// @flow

import React, { Component } from 'react';

import MuiGrid from '@material-ui/core/Grid';

type Props = {
    /** Defines the align-content style property. It's applied for all screen sizes. */
    alignContent?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around',
    /** Defines the align-items style property. It's applied for all screen sizes. */
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline',
    /** The content of the component. */
    children?: node,
    /** Override or extend the styles applied to the component.  */
    classes?: object,
    /** The component used for the root node. Either a string to use a DOM element or a component. */
    component?: 'div',
    /** If true, the component will have the flex container behavior. You should be wrapping items with a container. */
    container?: boolean,
    /** Defines the flex-direction style property. It is applied for all screen sizes. */
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse',
    /** If true, the component will have the flex item behavior. You should be wrapping items with a container. */
    item?: boolean,
    /** Defines the justify-content style property. It is applied for all screen sizes. */
    justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly',
    /** Defines the number of grids the component is going to use. It's applied for the lg breakpoint and wider screens if not overridden. */
    lg?: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
    /** Defines the number of grids the component is going to use. It's applied for the lg breakpoint and wider screens if not overridden. */
    md?: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
    /** Defines the number of grids the component is going to use. It's applied for the sm breakpoint and wider screens if not overridden. */
    sm?: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
    /** Defines the space between the type item component. It can only be used on a type container component. */
    spacing?: 0 | 8 | 16 | 24 | 32 | 40,
    /** Defines the flex-wrap style property. It's applied for all screen sizes. */
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse',
    /** Defines the number of grids the component is going to use. It's applied for the xl breakpoint and wider screens. */
    xl?: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
    /** Defines the number of grids the component is going to use. It's applied for all the screen sizes with the lowest priority. */
    xs?: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
    /** If true, it sets min-width: 0 on the item. Refer to the limitations section of the documentation to better understand the use case. */
    zeroMinWidth?: boolean,
};

const defaultProps = {
    alignContent: 'stretch',
    alignItems: 'stretch',
    children: [],
    classes: {},
    component: 'div',
    container: false,
    direction: 'row',
    item: false,
    justify: 'flex-start',
    lg: false,
    md: false,
    sm: false,
    spacing: 0,
    wrap: 'wrap',
    xl: false,
    xs: false,
    zeroMinWidth: false,
};


/** A Dash material-ui Grid component */
class Grid extends Component<Props> {
    props: Props;

    render() {
        const { alignContent, alignItems, classes, children, component, container, direction, item, justify, lg, md, sm, spacing, wrap, xl, xs, zeroMinWidth } = this.props;

        return (
            <MuiGrid
                alignContent={alignContent}
                alignItems={alignItems}
                classes={classes}
                component={component}
                container={container}
                direction={direction}
                item={item}
                justify={justify}
                lg={lg}
                md={md}
                sm={sm}
                spacing={spacing}
                wrap={wrap}
                xl={xl}
                xs={xs}
                zeroMinWidth={zeroMinWidth}
            >
                {children}
            </MuiGrid>
        );
    }
}

Grid.defaultProps = defaultProps;

export default Grid;