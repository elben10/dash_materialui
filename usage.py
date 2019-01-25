import dash
import dash_html_components as html
import dash_materialui

app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = dash_materialui.Card(children="hejsa",)



if __name__ == '__main__':
    app.run_server(debug=True)
