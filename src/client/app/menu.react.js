import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import {Toolbar, ToolbarGroup, FontIcon, TextField} from 'material-ui';
import SearchBox from '../components/searchbox.react';
require('../styles/style.less');


class SearchResults extends Component {
  constructor(props) {
    super(props);
  }
}



class Menu extends Component {

  render() {
    return (
        <Toolbar>
          <ToolbarGroup key={0} float="left">
            <h3 className="h1-style">Wikipedia Search</h3>
          </ToolbarGroup>
          <ToolbarGroup key={1} float="right">
            <SearchBox defaultText="Search..."/>
          </ToolbarGroup>
        </Toolbar>
    );
  }

}

Menu.propTypes = {
  isLoggedIn: React.PropTypes.bool
};

export default Menu;
