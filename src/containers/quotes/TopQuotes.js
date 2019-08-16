import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Quotes from '../../components/Quotes/Quotes';
import { getQuotes } from '../../services/futuramaApi';

class TopQuotes extends Component {
  static propTypes = {
    count: PropTypes.number
  }

  static defaultProps = {
    count: 10
  }

  state = {
    quotes: [],
    //Loading will go here
  }

  fetchQuotes = () => {
    //loading set state adjust goes here
    getQuotes(this.props.count)
      .then(quotes => this.setState({ quotes }));
  }

  componentDidMount() {
    this.fetchQuotes();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.count !== this.props.count) {
      this.fetchQuotes();
    }
  }

  render() {
    const { quotes } = this.state;

    return <Quotes quotes={quotes} />;
  }
}

export default TopQuotes;
