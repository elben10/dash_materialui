# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class IconButton(Component):
    """A IconButton component.
A Dash material-ui Paper component

Keyword arguments:
- children (optional)
- classes (optional)
- color (optional)
- disabled (boolean; optional)
- disabledRipple (boolean; optional)"""
    @_explicitize_args
    def __init__(self, children=None, classes=Component.UNDEFINED, color=Component.UNDEFINED, disabled=Component.UNDEFINED, disabledRipple=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'classes', 'color', 'disabled', 'disabledRipple']
        self._type = 'IconButton'
        self._namespace = 'dash_materialui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'classes', 'color', 'disabled', 'disabledRipple']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(IconButton, self).__init__(children=children, **args)

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
            return ('IconButton(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'IconButton(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
