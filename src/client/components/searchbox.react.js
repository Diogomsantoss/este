import Component from '../components/component.react';
import React from 'react';
import {debounce} from 'lodash';
import * as actions from '../app/actions';
require('../styles/style.less');

const action = debounce(function (e) {
      console.log(e.target.value);
      if (e.target.value) {
        actions.executeSearch(e.target.value);
      }
    }, 1000);

class SearchBox extends Component {

  debounced(e) {
    action(e);
  }

  handleInput(e) {
    e.persist();
    if (e.target.value) {
      console.log(e.target.value);
      this.debounced(e);
    }
  }
  render() {
    return (
      <input type="text"
             className="searchBox"
             placeholder={this.props.defaultText}
             onChange={this.handleInput.bind(this)}
      />
    );
  }

}

export default SearchBox

SearchBox.propTypes = {
  defaultText: React.PropTypes.string.isRequired
};
