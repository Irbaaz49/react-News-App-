import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types"

export class News extends Component {

  articles = [
    {
      source: {
        id: "independent",
        name: "Independent",
      },
      author: "Shweta Sharma",
      title:
        "Ashes score LIVE: England vs Australia cricket updates from first Test, day two",
      description:
        "England take on Australia in the first Ashes Test in Brisbane",
      url: "http://www.independent.co.uk/sport/cricket/ashes-live-stream-score-england-australia-b1972129.html",
      urlToImage:
        "https://static.independent.co.uk/2021/12/08/14/PRI214059616.jpg?width=1200&auto=webp&quality=75",
      publishedAt: "2021-12-09T04:18:46Z",
      content:
        "Follow live coverage as England look to battle back against Australia in the first Ashes Test.\r\nJoe Roots side began their tour in disarray on day one at The Gabba, collapsing to 147 all out after op… [+2363 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
static defaultProps ={
country : "in",
pageSize : 8,
category:"general"
}
static propTypes ={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
}


  constructor() {
    super();
    console.log("Am");
    this.state = {
      articles: this.articles,
      totalResults: this.totalResults,
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b0c86827d8bf427abeb5379c1fcbfbc3&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
      let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles, 
      totalResults: parsedData.totalResults,
    loading:false
    });
  }
  prePage = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b0c86827d8bf427abeb5379c1fcbfbc3&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });

    this.setState({
      page: this.state.page - 1,
      articles:parsedData.articles,
      loading:false
    });
  };
  nextPage = async () => {
    console.log("next ");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) ){
   
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b0c86827d8bf427abeb5379c1fcbfbc3&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
     this.setState({loading:true})
     
     
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({ articles: parsedData.articles });

      this.setState({
        page: this.state.page + 1,
        articles:parsedData.articles,
        loading:false
      });
    
  };
  }
  render() {
    return (
      <div className="container my-3  ">
        <h1 className="text-center ">News-App Top Headlines</h1>
     {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  newsUrl={element.url}
                  imageUrl={element.urlToImage}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                  description={
                    element.description ? element.description.slice(0, 45) : ""
                  }
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between py-2">
          <button
            type="button"
            disabled={this.state.page <= 1}
            onClick={this.prePage}
            className="btn btn-sm btn-primary"
          >
            &larr; Previous
          </button>
          <button
            type="button"
            onClick={this.nextPage}
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
          
            className="btn btn-sm btn-primary"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
