# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class CardHeader(Component):
    """A CardHeader component.
A Dash material-ui Paper component

Keyword arguments:
- action (optional): The action to display in the card header.
- avatar (optional): The Avatar for the Card Header.
- classes (optional): Override or extend the styles applied to the component. See CSS API below for more details.
- component (optional): The component used for the root node. Either a string to use a DOM element or a component.
- disableTypography (boolean; optional): If true, the children won't be wrapped by a Typography component. This can be useful to render an alternative Typography variant by wrapping the title text, and optional subheader text with the Typography component.
- subheader (optional): The content of the component.
- subheaderTypographyProps (optional): subheaderTypographyProps
- title (optional): The content of the Card Title.
- titleTypographyProps (optional): These props will be forwarded to the title (as long as disableTypography is not true).

Available events: """
    @_explicitize_args
    def __init__(self, action=Component.UNDEFINED, avatar=Component.UNDEFINED, classes=Component.UNDEFINED, component=Component.UNDEFINED, disableTypography=Component.UNDEFINED, subheader=Component.UNDEFINED, subheaderTypographyProps=Component.UNDEFINED, title=Component.UNDEFINED, titleTypographyProps=Component.UNDEFINED, **kwargs):
        self._prop_names = ['action', 'avatar', 'classes', 'component', 'disableTypography', 'subheader', 'subheaderTypographyProps', 'title', 'titleTypographyProps']
        self._type = 'CardHeader'
        self._namespace = 'dash_materialui'
        self._valid_wildcard_attributes =            []
        self.available_events = []
        self.available_properties = ['action', 'avatar', 'classes', 'component', 'disableTypography', 'subheader', 'subheaderTypographyProps', 'title', 'titleTypographyProps']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(CardHeader, self).__init__(**args)

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
            return ('CardHeader(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'CardHeader(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
