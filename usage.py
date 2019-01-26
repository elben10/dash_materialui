import dash
import dash_html_components as html
import dash_materialui

app = dash.Dash(__name__, external_stylesheets=['https://fonts.googleapis.com/icon?family=Material+Icons'])

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div(children=[
    # dash_materialui.AppBar(children=dash_materialui.Avatar(children="hejsa")),
    # dash_materialui.Avatar(children="TEST"),
    # dash_materialui.Badge(children="TEST"),
    # dash_materialui.Card(children="TEST"),
    dash_materialui.Card(children=[dash_materialui.CardHeader(title="TEST", subheader="TEST2", subheaderTypographyProps={'color': 'red'}, classes={'title': "TESTCLASS"})]),
    # dash_materialui.Grid(container=True, children=[
    #     dash_materialui.Grid(item=True, xs=6, children='TEST'),
    #     dash_materialui.Grid(item=True, xs=6, children='TEST')
    # ]),
    # dash_materialui.Paper(children="TEST")
    dash_materialui.Icon(children='accessibility_new')
])



if __name__ == '__main__':
    app.run_server(debug=True)
