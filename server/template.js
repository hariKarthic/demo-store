const template = () => {
    let htmlStr = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <title>SSR React</title>
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"></div>
    <div data-component="Header"></div>
    <div data-component="App"></div>
    <div data-component="Footer"></div>
    <script>
      var cqJSON = {
          "primaryBtn":"ClickMe",
          "secondaryBtn" :"Cancel",
      }
    </script>
  </body>
</html>`;
    return htmlStr;
};

module.exports = template;

