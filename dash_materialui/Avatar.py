# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Avatar(Component):
    """A Avatar component.
A Dash material-ui Avatar component

Keyword arguments:
- children (optional): The content of the component.
- alt (string; optional): Used in combination with src or srcSet to provide an alt attribute for the rendered img element.
- classes (optional): Override or extend the styles applied to the component. See CSS API below for more details.
- component (optional): The component used for the root node. Either a string to use a DOM element or a component.
- imgProps (optional): Attributes applied to the img element if the component is used to display an image.
- sizes (string; optional): The sizes attribute for the img element.
- src (string; optional): The src attribute for the img element.
- srcSet (string; optional): The srcSet attribute for the img element.

Available events: """
    @_explicitize_args
    def __init__(self, children=None, alt=Component.UNDEFINED, classes=Component.UNDEFINED, component=Component.UNDEFINED, imgProps=Component.UNDEFINED, sizes=Component.UNDEFINED, src=Component.UNDEFINED, srcSet=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'alt', 'classes', 'component', 'imgProps', 'sizes', 'src', 'srcSet']
        self._type = 'Avatar'
        self._namespace = 'dash_materialui'
        self._valid_wildcard_attributes =            []
        self.available_events = []
        self.available_properties = ['children', 'alt', 'classes', 'component', 'imgProps', 'sizes', 'src', 'srcSet']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Avatar, self).__init__(children=children, **args)

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
            return ('Avatar(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'Avatar(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
