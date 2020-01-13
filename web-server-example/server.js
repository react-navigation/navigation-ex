import App from './App';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { AppRegistry } from 'react-native';
import { handleServerRequest } from '@react-navigation/web/server';

AppRegistry.registerComponent('ReactNavApp', () => App.RootComponent);

const app = express();

app.get('/', (req, res) => {
  const { navigation, title } = handleServerRequest(App, req);
  const { element, getStyleElement } = AppRegistry.getApplication(
    'ReactNavApp',
    { navigation }
  );
  const html = ReactDOMServer.renderToString(element);
  const css = ReactDOMServer.renderToStaticMarkup(getStyleElement());
  res.send(
    `<!doctype html>
<html lang="">
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta charSet='utf-8' />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${title}</title>
    <style id="root-stylesheet">
    html, body, #root {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    input, textarea {
      -webkit-appearance: none;
      -webkit-border-radius: 0;
    }
    </style>
${css}
  </head>
  <body>
    <div id="root">${html}</div>
  </body>
</html>`
  );
});

app.listen(8080, () => {
  console.log('Server started at: http://localhost:8080/');
});
