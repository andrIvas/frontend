import React, { PropTypes } from 'react';

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    style: PropTypes.string,
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    children: PropTypes.string,
    state: PropTypes.string.isRequired,
  };

  render() {
    const { title, description, style, scripts, children, state } = this.props;
    return (
      <html lang="ru">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="format-detection" content="telephone=no" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>{title || 'title'}</title>
          <meta name="description" content={description || 'description'} />
          <link rel="stylesheet" href="main_global.css" media="all" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&amp;amp;subset=cyrillic" rel="stylesheet" type="text/css" />
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          {style && <style id="css" dangerouslySetInnerHTML={{ __html: style }} />}
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
          {scripts && scripts.map(script => <script key={script} src={script} />)}
          <script src="/assets/vendor.js" />
          <script src="/assets/client.js" />
          <script dangerouslySetInnerHTML={{ __html: `window.$REDUX_STATE = ${state}` }} />
        </body>
      </html>
    );
  }
}

export default Html;
