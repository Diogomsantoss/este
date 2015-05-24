import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {RaisedButton, Paper} from 'material-ui';
import immutable from 'immutable';
import Radium from 'radium'

require('../styles/style.less');

var styles = {
  normal: {
    backgroundColor: '#9D9694'
  },
  hover: {
    backgroundColor: 'white'
  }
};
class WikiSearch extends Component {


  render() {
    const results = this.props.app.get('list').map((result, index) => {
      return (
        <li key={index}>
          <Paper zDepth={1} style={style}>
            <p>{result}</p>
          </Paper>
        </li>
      )
    });


    return (
      <DocumentTitle title="WikiSearch 1.0">
        <div className="wiki-search">
          <ul>
            {results}
          </ul>
        </div>
      </DocumentTitle>
    );
  }
}

WikiSearch = Radium.Enhancer(WikiSearch);

export default WikiSearch

