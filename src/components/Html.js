import React, { PropTypes } from 'react';
import { analytics } from '../config';

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    style: PropTypes.string,
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    children: PropTypes.string,
  };

  render() {
    const { title, description, style, scripts, children, state} = this.props;
    return (
      <html className="no-js" lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
