import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import {Toolbar, ToolbarGroup, DropDownMenu, FlatButton} from 'material-ui';
require('../styles/style.less');

var ThemeManager = require('material-ui/lib/styles/theme-manager')();
var Colors = require('material-ui/lib/styles/colors');




var styles = {
  navStyles: {
    marginRight: '0px',
    marginLeft: '0px',
    marginTop: '18px',
    paddingLeft: '0px',
    paddingRight: '0px',
    borderRadius: '0px',
    color: 'white',
    backgroundColor: '#4A2B0F',
  },
  dropStyles: {
    backgroundColor: '#4A2B0F',
    color: 'white'
  },
  toolbarStyles: {
    backgroundColor: '#4A2B0F',
    color: 'white'
  }
};

var filterOptions = [
  { payload: '1', text: 'Learn'},
  { payload: '2', text: 'Map'},
  { payload: '3', text: 'Chat'},
  { payload: '4', text: 'News'},
  { payload: '5', text: 'You'}
];

class Menu extends Component {

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  }
  render() {
    const menuItems = filterOptions.map((elem, index) => {
      return (
        <FlatButton key={index} style={styles.navStyles} className="nav-button" label={elem.text} hoverColor='white'/>
      );
    });
    return (
      <Toolbar
        className="navbar navbar-default navbar-fixed-top nav-height"
        style={styles.toolbarStyles}>
        <ToolbarGroup key={0} float="left">
          <div>
            <img src="https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg.gz" alt="freeCodeCamp" className="img-responsive nav-logo"/>
          </div>
        </ToolbarGroup>
        <ToolbarGroup key={1} float="right">
          <div className="hidden-sm hidden-md hidden-lg">
            <DropDownMenu className="nav-button"
                          selectedIndex={0}
                          menuItemStyle={styles.dropStyles}
                          style={styles.dropStyles}
                          menuItems={filterOptions}/>
          </div>
          <div className="hidden-xs">
            {menuItems}
          </div>
        </ToolbarGroup>
      </Toolbar>
    );
  }

}

Menu.childContextTypes = {
  muiTheme: React.PropTypes.object
};

Menu.propTypes = {
  isLoggedIn: React.PropTypes.bool
};

export default Menu;
