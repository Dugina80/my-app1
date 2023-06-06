import "../../assets/styles/elements/News.scss"
import NewsItem from "../../elements/NewsItem"


function News() {
    return (
      <div className="news">
        <p className="text">News</p>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
      </div>
    )

}

export default News;