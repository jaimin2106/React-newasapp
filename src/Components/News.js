import React, { Component } from "react";
import Newsitem from "./Newsitem";


export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      showToast: false,
      toastMessage: "",
      searchQuery: ""
    };
  }

  async componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = async (query = "scam") => {
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=5b5d2e68377e4ee5b715226c7d177eb8&page=${this.state.page}&pageSize=12`;
    try {
      const response = await fetch(url);
      const parsedData = await response.json();

      if (parsedData && parsedData.articles) {
        const filteredArticles = parsedData.articles.filter(article => article.urlToImage);
        
        this.setState({
          articles: filteredArticles,
          totalResults: parsedData.totalResults,
          loading: false
        });
      } else {
        this.setState({
          articles: [],
          totalResults: 0,
          loading: false,
          showToast: true,
          toastMessage: "No articles found."
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ loading: false, showToast: true, toastMessage: "Error fetching articles." });
    }
  };

  handleSearch = async () => {
    if (!this.state.searchQuery) return;
    this.setState({ loading: true, page: 1 });
    this.fetchArticles(this.state.searchQuery);
  };

  handlePrev = async () => {
    if (this.state.page <= 1) return;
    this.setState({ page: this.state.page - 1 }, () => this.fetchArticles(this.state.searchQuery));
  };

  handleNext = async () => {
    const totalPages = Math.ceil(this.state.totalResults / 12);
    if (this.state.page >= totalPages) return;
    this.setState({ page: this.state.page + 1 }, () => this.fetchArticles(this.state.searchQuery));
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">Our top heading</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={this.state.searchQuery}
            onChange={(e) => this.setState({ searchQuery: e.target.value })}
            className="search-input"
          />
          <button onClick={this.handleSearch} className="btn btn-primary">Search</button>
        </div>
        
        {this.state.loading ? (
          <div className="loader">
            <div className="spinner-grow text-primary" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow text-secondary" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow text-success" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow text-danger" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow text-warning" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow text-info" role="status">
  <span className="sr-only">Loading...</span>
</div>

<div className="spinner-grow text-dark" role="status">
  <span className="sr-only">Loading...</span>
</div>
          </div> // Add a loader animation here
        ) : (
          <div className="card-grid parent">
            {this.state.articles.length > 0 ? (
              this.state.articles.map((article, index) => (
                <Newsitem
                  key={index}
                  title={article.title}
                  description={article.description}
                  Imgurl={article.urlToImage}
                  Newsurl={article.url}
                />
              ))
            ) : (
              <img className="no-article" src="/rb_2566.png" alt="No articles found" /> // Update the src to the correct path of your image
            )}
          </div>
        )}
        
        <div className="pagination">
          <button onClick={this.handlePrev} disabled={this.state.page <= 1} className="btn btn-secondary">Previous</button>
          <button onClick={this.handleNext} disabled={this.state.page >= Math.ceil(this.state.totalResults / 12)} className="btn btn-secondary">Next</button>
        </div>

        {this.state.showToast && (
          <div className="toast">
            {this.state.toastMessage}
          </div>
        )}
      </div>
    );
  }
}