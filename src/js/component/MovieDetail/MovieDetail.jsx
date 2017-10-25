import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    detailData: state.detail.detailData
  };
};

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detailData: {}
    };
  }

  apiCall() {
    const { dispatch } = this.props;
    const ApiCall = {
      type: "DETAIL_CALL",
      payload: axios.get(
        `https://www.omdbapi.com/?apikey=8730e0e&i=${this.props.match.params.id}`
      )
    };

    if(Object.keys(this.props.detailData).length === 0 || this.props.detailData.imdbID != this.props.match.params.id) {
        dispatch(ApiCall);
    }
  }

  render() {
    return (
      <div className="detail-whole">
        <h1>Detail Screen</h1>
        <Link className="link-back" to="/">Go Back</Link>
        {this.apiCall()}
        <div className="detail-flex">
            <div className="left-pic">
                <img className="detail-picture" src={this.props.detailData.Poster} alt={`Poster for the movie ${this.props.detailData.Title}`}/>
            </div>
            <div className="movie-details">
                <h2 className="detail-text detail-header">Movie Details</h2>
                <h3 className="detail-text detail-movie-title">{this.props.detailData.Title}</h3>
                <div className="movie-info detail-text">
                    <strong className="year-run-genre released">{`Released ${this.props.detailData.Year}`}</strong>
                    <strong className="year-run-genre">{this.props.detailData.Runtime}</strong>
                    <strong className="year-run-genre">{this.props.detailData.Genre}</strong>
                </div>
                <h4 className="detail-plot detail-text">{this.props.detailData.Plot}</h4>
                <h4 className="detail-text">{this.props.detailData.Awards}</h4>
                <h4 className="detail-text"><strong>Metascore: </strong>{this.props.detailData.Metascore}/100</h4>
                <h4 className="detail-text"><strong>IMDB: </strong>{this.props.detailData.imdbRating}</h4>
            </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(MovieDetailContainer));
