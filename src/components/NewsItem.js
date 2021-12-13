import React from "react";

const NewsItem = (props)=> {
 
    let { title, description, imageUrl, newsUrl, author , date, source } = props;
    return (
      <div className="my-3">
        <span className="badge bg-danger">{source}</span>
        <div className="card">
          <img src={!imageUrl?"https://i0.wp.com/whatsupnewp.com/wp-content/uploads/2016/06/maxresdefault.jpg?fit=1920%2C1080&ssl=1":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {title}...</h5>
            <p className="card-text">{description}...</p>
          <p className="card-text"> <small className="text-muted">By {!author?"unknown": author} on {new Date(date).toUTCString()}</small></p> 
            <a href={newsUrl} className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
       
      </div>
    );
  }


export default NewsItem;
