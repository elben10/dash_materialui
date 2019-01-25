# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Grid(Component):
    """A Grid component.
A Dash material-ui Grid component

Keyword arguments:
- children (optional): The content of the component.
- alignContent (optional): Defines the align-content style property. It's applied for all screen sizes.
- alignItems (optional): Defines the align-items style property. It's applied for all screen sizes.
- classes (optional): Override or extend the styles applied to the component.
- component (optional): The component used for the root node. Either a string to use a DOM element or a component.
- container (boolean; optional): If true, the component will have the flex container behavior. You should be wrapping items with a container.
- direction (optional): Defines the flex-direction style property. It is applied for all screen sizes.
- item (boolean; optional): If true, the component will have the flex item behavior. You should be wrapping items with a container.
- justify (optional): Defines the justify-content style property. It is applied for all screen sizes.
- lg (optional): Defines the number of grids the component is going to use. It's applied for the lg breakpoint and wider screens if not overridden.
- md (optional): Defines the number of grids the component is going to use. It's applied for the lg breakpoint and wider screens if not overridden.
- sm (optional): Defines the number of grids the component is going to use. It's applied for the sm breakpoint and wider screens if not overridden.
- spacing (optional): Defines the space between the type item component. It can only be used on a type container component.
- wrap (optional): Defines the flex-wrap style property. It's applied for all screen sizes.
- xl (optional): Defines the number of grids the component is going to use. It's applied for the xl breakpoint and wider screens.
- xs (optional): Defines the number of grids the component is going to use. It's applied for all the screen sizes with the lowest priority.
- zeroMinWidth (boolean; optional): If true, it sets min-width: 0 on the item. Refer to the limitations section of the documentation to better understand the use case.

Available events: """
    @_explicitize_args
    def __init__(self, children=None, alignContent=Component.UNDEFINED, alignItems=Component.UNDEFINED, classes=Component.UNDEFINED, component=Component.UNDEFINED, container=Component.UNDEFINED, direction=Component.UNDEFINED, item=Component.UNDEFINED, justify=Component.UNDEFINED, lg=Component.UNDEFINED, md=Component.UNDEFINED, sm=Component.UNDEFINED, spacing=Component.UNDEFINED, wrap=Component.UNDEFINED, xl=Component.UNDEFINED, xs=Component.UNDEFINED, zeroMinWidth=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'alignContent', 'alignItems', 'classes', 'component', 'container', 'direction', 'item', 'justify', 'lg', 'md', 'sm', 'spacing', 'wrap', 'xl', 'xs', 'zeroMinWidth']
        self._type = 'Grid'
        self._namespace = 'dash_materialui'
        self._valid_wildcard_attributes =            []
        self.available_events = []
        self.available_properties = ['children', 'alignContent', 'alignItems', 'classes', 'component', 'container', 'direction', 'item', 'justify', 'lg', 'md', 'sm', 'spacing', 'wrap', 'xl', 'xs', 'zeroMinWidth']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Grid, self).__init__(children=children, **args)

    def __repr__(self):
        if(any(getattr(self, c, None) is not None
               for c in self._prop_names
               if c is not self._prop_names[0])
           or any(getattr(self, c, None) is not None
                  for c in self.__dict__.keys()
                  if any(c.startswith(wc_attr)
                  for wc_attr in self._valid_wildcard_attributes))):
            props_string = ', '.join([c+'='+repr(getattr(self, c, None))
                                      for c in self._prop_names
                                      if getattr(self, c, None) is not None])
            wilds_string = ', '.join([c+'='+repr(getattr(self, c, None))
                                      for c in self.__dict__.keys()
                                      if any([c.startswith(wc_attr)
                                      for wc_attr in
                                      self._valid_wildcard_attributes])])
            return ('Grid(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'Grid(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
