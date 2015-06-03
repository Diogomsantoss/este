/**
 * Created by nathanleniz on 5/24/15.
 */
import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import {Paper} from 'material-ui';
import Radium from 'radium';
import SortableItem from 'react-sortable-item';
require('../styles/style.less');

var styles = {
  normal: {
    backgroundColor: '#DDD'
  },
  hover: {
    backgroundColor: '#CCC'
  },
  newsImage: {
    width: '50px',
    height: '50px'
  }
};

class ResultItem extends Component {
  constructor(props) {
    super(props);
  }

  setDefaultState() {
    this.setState({
      isHovered: false,
      zDepth: 1
    });
  }

  //handleHover() {
  //  this.setState({
  //    isHovered: !this.state.isHovered,
  //    zDepth: this.state.zDepth === 1 ? 2 : 1
  //  });
  //}

  render() {
    return (
      <li>
        <Paper zDepth={this.state.zDepth}
              style={[styles.normal, this.state.isHovered && styles.hover]}
              rounded={false}
        >
          <div className="media">
            <div className="media-left">
              <a href={this.props.authorLink}>
                <img className="media-object" style={styles.newsImage} src={this.props.authorImage} alt="mugshot"/>
              </a>
            </div>
              <div className="media-body">
                <a href={this.props.storyLink}>
                <h4 className="media-heading">{this.props.headline}</h4>
                </a>
              </div>
          </div>
        </Paper>
      </li>
    );
  }
}

ResultItem.propTypes =  {
  authorLink: React.PropTypes.string.isRequired,
  authorImage: React.PropTypes.string.isRequired,
  headline: React.PropTypes.string.isRequired,
  storyLink: React.PropTypes.string.isRequired
};

ResultItem = Radium.Enhancer(ResultItem);

export default ResultItem;
