import dash_materialui
import dash
import dash_html_components as html

app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div([
    dash_materialui.Grid(container=True, children=[
        dash_materialui.Grid(item=True, xs=6, children="hejsa"),
        dash_materialui.Grid(item=True, xs=6, children=dash_materialui.Paper(children=["Hejsa"])),
        dash_materialui.AppBar(children=[dash_materialui.Avatar(alt="hejsa")], position='fixed'),
    ]
    ),
    html.Div(dash_materialui.Badge(html.Button('Button')), style={'margin-top': '5cm'})
])



if __name__ == '__main__':
    app.run_server(debug=True)
