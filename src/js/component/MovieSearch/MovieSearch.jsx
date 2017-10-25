import React from "react";
import axios from "axios";
import { newCall, newInput } from "./action";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    input: state.search.input,
    searchData: state.search.searchData
  };
};



class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleApiCallTitle = this.handleApiCallTitle.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const { dispatch, input } = this.props;
    dispatch(newInput(event.target.value));
    console.log(this.props)
  }

  handleApiCallTitle() {
    const { dispatch } = this.props;
    const ApiCall = {
      type: 'CALL',
      payload: axios.get(`http://www.omdbapi.com/?apikey=8730e0e&s=${this.props.input}`)
    };

    dispatch(ApiCall);
  }

  renderSearch() {
    if (this.props.searchData.length) {
      console.log(this.props.searchData);
      return this.props.searchData.map(single => {
        return (
          <div className="searches">
            <div className="image-container">
              <img
                className="images"
                src={single.Poster}
                alt="Star Wars Poster"
              />
            </div>
            <div className="title">
              <h2>{single.Title}</h2>
              <div>
                <strong>Release Year: {single.Year}</strong>
              </div>
              <Link to={`/movie/${single.imdbID}`} className="info-button">More Information</Link>
            </div>
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div className="search-page">
        <h1 className="search-title-page">Imdb Searcher</h1>
        <div>
          <input
            value={this.props.input}
            onChange={event => this.handleInput(event)}
            type="text"
            className="search-input"
            placeholder="Search for a movie..."
          />
          <button className="go-button" onClick={this.handleApiCallTitle}>Go!</button>
        </div>
        {this.renderSearch()}
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps)(MovieSearchContainer));


// &apikey=8730e0e omdb origin key
