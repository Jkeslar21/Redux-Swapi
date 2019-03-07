import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getStarChar } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getStarChar()
  }

  render() {
    if (this.props.isFetching) {
      <p>LOADING...</p>
    }
    console.log(this.props)
    return (
      <div className="CharactersList_wrapper">
        <h1>{this.props.error}</h1>
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isFetching: state.charsReducer.isFetching,
  error: state.charsReducer.error
})

export default connect(mapStateToProps, { getStarChar })(CharacterListView);
