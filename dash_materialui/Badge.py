# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Badge(Component):
    """A Badge component.
A Dash material-ui Badge component

Keyword arguments:
- children (optional): The badge will be added relative to this node.
- badgeContent (optional): The content rendered within the badge.
- classes (optional): Override or extend the styles applied to the component. See CSS API below for more details.
- color (optional): The color of the component. It supports those theme colors that make sense for this component.
- component (optional): The component used for the root node. Either a string to use a DOM element or a component.
- invisible (boolean; optional): If true, the badge will be invisible.
- max (number; optional): Max count to show.
- showZero (boolean; optional): Controls whether the badge is hidden when badgeContent is zero.
- variant (optional): The variant to use.

Available events: """
    @_explicitize_args
    def __init__(self, children=None, badgeContent=Component.UNDEFINED, classes=Component.UNDEFINED, color=Component.UNDEFINED, component=Component.UNDEFINED, invisible=Component.UNDEFINED, max=Component.UNDEFINED, showZero=Component.UNDEFINED, variant=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'badgeContent', 'classes', 'color', 'component', 'invisible', 'max', 'showZero', 'variant']
        self._type = 'Badge'
        self._namespace = 'dash_materialui'
        self._valid_wildcard_attributes =            []
        self.available_events = []
        self.available_properties = ['children', 'badgeContent', 'classes', 'color', 'component', 'invisible', 'max', 'showZero', 'variant']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Badge, self).__init__(children=children, **args)

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
            return ('Badge(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'Badge(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
