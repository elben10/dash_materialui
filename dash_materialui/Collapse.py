# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Collapse(Component):
    """A Collapse component.
A Dash material-ui Paper component

Keyword arguments:
- children (optional)
- classes (optional)
- collapsedHeight (string; optional)
- component (optional)
- in_ (boolean; optional)
- timeout (number; optional)"""
    @_explicitize_args
    def __init__(self, children=None, classes=Component.UNDEFINED, collapsedHeight=Component.UNDEFINED, component=Component.UNDEFINED, in_=Component.UNDEFINED, timeout=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'classes', 'collapsedHeight', 'component', 'in_', 'timeout']
        self._type = 'Collapse'
        self._namespace = 'dash_materialui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'classes', 'collapsedHeight', 'component', 'in_', 'timeout']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Collapse, self).__init__(children=children, **args)

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
            return ('Collapse(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'Collapse(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
