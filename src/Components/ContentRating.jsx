
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,
      handleLike: () => {
        this.setState((prevState) => (
            {likes: prevState.likes + 1, totalRatings: prevState.totalRatings + 1}
          )
        )
      },
      handleDislke: () => {
        this.setState((prevState) => (
            {dislikes: prevState.dislikes + 1, totalRatings: prevState.totalRatings + 1}
          )
        )
      }
    }
  }
  render() {
    return (
      <>
        <div class='content-rating'>
          <p>
            In React class components, this.setState is used to update the component's state
            and trigger a re-render. There are two primary syntaxes for this.setState.
          </p>
          <div class='rating-buttons'>
            <button class='like-button' onClick={this.state.handleLike}>Like({this.state.likes})</button>
            <button class='dislike-button' onClick={this.state.handleDislke}>Dislike({this.state.dislikes})</button>
            <label for='totalRating'>Total Ratings: </label>
            <input type='number' id='totalRatings' name='totalRatings' value={this.state.totalRatings}/>
          </div>
        </div>
     </>
    );
  }
}

export default ContentRating;
