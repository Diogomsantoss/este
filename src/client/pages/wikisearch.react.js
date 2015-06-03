import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';
import injectTapEventPlugin from 'react-tap-event-plugin';
import immutable from 'immutable';
import Radium from 'radium';
import ResultItem from '../components/ResultItem';

require('../styles/style.less');

class WikiSearch extends Component {

  handleDrop(dropPath, position, event) {}

  handleAcceptTest(even) {}


  render() {
    const results = this.props.app.get('list').map((result, index) => {
      return (
        <ResultItem
          key={index}
          authorLink={`http://www.freecodecamp.com/${result.author.username}`}
          authorImage={result.author.picture}
          headline={result.headline}
          storyLink={`http://www.freecodecamp.com/news/${result.storyLink.replace(/\s/g, '-')}`}
        />
      );
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

export default WikiSearch;

