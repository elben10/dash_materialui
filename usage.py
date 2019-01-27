import dash
import dash_html_components as html
import dash_materialui

import lorem

app = dash.Dash(
    __name__,
    external_stylesheets=[
        "https://fonts.googleapis.com/icon?family=Material+Icons",
        "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
    ],
)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True


def table_writer(*rows):
    header = rows[0]
    return dash_materialui.Table(
        [
            dash_materialui.TableHead(
                dash_materialui.TableRow(
                    [
                        dash_materialui.TableCell(header[0]),
                        *[
                            dash_materialui.TableCell(i, align="right")
                            for i in header[1:]
                        ],
                    ]
                )
            ),
            dash_materialui.TableBody(
                [
                    *[
                        dash_materialui.TableRow(
                            [
                                dash_materialui.TableCell(i[0]),
                                *[
                                    dash_materialui.TableCell(j, align="right")
                                    for j in i[1:]
                                ],
                            ]
                        )
                        for i in rows[1:]
                    ]
                ]
            ),
        ]
    )


app.layout = html.Div(
    children=[
        # dash_materialui.AppBar(children=dash_materialui.Avatar(children="hejsa")),
        # dash_materialui.Avatar(children="TEST"),
        # dash_materialui.Badge(children="TEST"),
        # dash_materialui.Card(children="TEST"),
        # dash_materialui.Card(children=[dash_materialui.CardHeader(title="TEST", subheader="TEST2", subheaderTypographyProps={'color': 'red'}, classes={'title': "TESTCLASS"})]),
        # dash_materialui.Grid(container=True, children=[
        #     dash_materialui.Grid(item=True, xs=6, children='TEST'),
        #     dash_materialui.Grid(item=True, xs=6, children='TEST')
        # ]),
        # dash_materialui.Paper(children="TEST")
        dash_materialui.Grid(
            container=True,
            xs=8,
            children=dash_materialui.Grid(
                xs=12,
                item=True,
                children=[
                    dash_materialui.Paper(
                        children=html.Div(
                            table_writer(
                                [
                                    "Dessert (100g serving)",
                                    "Calories",
                                    "Fat (g)",
                                    "Carbs (g)",
                                    "Protein (g)",
                                    "Dessert (100g serving)",
                                    "Calories",
                                    "Fat (g)",
                                    "Carbs (g)",
                                    "Protein (g)",
                                ],
                                [
                                    "Frozen yoghurt",
                                    159,
                                    6.0,
                                    24,
                                    4.0,
                                    "Frozen yoghurt",
                                    159,
                                    6.0,
                                    24,
                                    4.0,
                                ],
                                ["Ice cream sandwich", 237, 9.0, 37, 4.3],
                                ["Eclair", 262, 16.0, 24, 6.0],
                                ["Cupcake", 305, 3.7, 67, 4.3],
                                ["Gingerbread", 356, 16.0, 49, 3.9],
                            ),
                            style={"overflow": "auto"},
                        ),
                        elevation=3,
                    ),
                    dash_materialui.Table(
                        [
                            dash_materialui.TableHead(
                                dash_materialui.TableRow(
                                    dash_materialui.TableCell("Header")
                                )
                            ),
                            dash_materialui.TableBody(
                                dash_materialui.TableRow(
                                    dash_materialui.TableCell("Body")
                                )
                            ),
                            dash_materialui.TableFooter(
                                dash_materialui.TableRow(
                                    dash_materialui.TableCell("Footer")
                                )
                            ),
                        ]
                    ),
                ],
            ),
        ),
        dash_materialui.Grid(
            container=True,
            direction="row",
            spacing=40,
            children=[
                dash_materialui.Grid(
                    dash_materialui.Card(
                        children=[
                            dash_materialui.CardHeader(
                                title="Shrimp and Chorizo Paella",
                                subheader="September 14, 2016",
                            ),
                            dash_materialui.CardMedia(
                                image="https://material-ui.com/static/images/cards/paella.jpg"
                            ),
                            dash_materialui.CardContent("hejsa"),
                        ]
                    ),
                    item=True,
                ),
                dash_materialui.Grid(
                    dash_materialui.Card(
                        children=[
                            dash_materialui.CardHeader(
                                title="Shrimp and Chorizo Paella",
                                subheader="September 14, 2016",
                            ),
                            dash_materialui.CardMedia(
                                image="https://material-ui.com/static/images/cards/paella.jpg"
                            ),
                            dash_materialui.CardContent(
                                [
                                    dash_materialui.Typography(
                                        variant="subtitle2", children="LOREM IPSUM"
                                    ),
                                    dash_materialui.Typography(
                                        variant="body1", children=lorem.paragraph()
                                    ),
                                ]
                            ),
                        ]
                    ),
                    item=True,
                ),
            ],
        ),
        dash_materialui.CircularProgress(),
        dash_materialui.Typography(
            component="h1", variant="h1", gutterBottom=True, children="h1. Heading"
        ),
        dash_materialui.Avatar("R"),
        dash_materialui.Button("hejsa", variant="contained"),
        dash_materialui.Button(
            "hejsa", variant="contained", color="secondary", href="/"
        ),
        dash_materialui.Collapse(dash_materialui.Typography("hejsa")),
        dash_materialui.IconButton(dash_materialui.Icon("star")),
        dash_materialui.Link("hejsa", variant="body1", href="/"),
        dash_materialui.List(
            [
                dash_materialui.ListItem(
                    dash_materialui.ListItemAvatar(
                        dash_materialui.Avatar(dash_materialui.Icon("star"))
                    ),
                    divider=True,
                ),
                dash_materialui.ListItem(dash_materialui.Avatar(dash_materialui.Icon('star')), divider=True),
            ]
        ),
    ]
)


if __name__ == "__main__":
    app.run_server(debug=True, port=8888)
