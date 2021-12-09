import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imageUrl?"https://i0.wp.com/whatsupnewp.com/wp-content/uploads/2016/06/maxresdefault.jpg?fit=1920%2C1080&ssl=1":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
       
      </div>
    );
  }
}

export default NewsItem;
