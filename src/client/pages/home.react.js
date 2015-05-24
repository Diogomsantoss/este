import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {RaisedButton} from 'material-ui';
require('../styles/style.less');


export default class Home extends Component {

  render() {

    return (
      <DocumentTitle title={msg('home.title')}>
        <div className="home-page">
          <RaisedButton label="Ink" secondary={true}/>
          <p>
            App starter kit for <a href="https://github.com/steida/este">
            Este.js</a>. Check <Link to="todos">todos</Link>.
          </p>
        </div>
      </DocumentTitle>
    );
  }

}
