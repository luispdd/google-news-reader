import React from 'react';
import { connect } from 'react-redux';

import HeadlinesType from '../../types/Headline.types';
import AppState from '../../types/AppState.types';
import './ContentComponent.scss';

interface Props extends ReturnProps{

}

interface ReturnProps{
  articles: HeadlinesType[],
  feed: string,
  error: string
}

const ContentComponent = (props: Props): React.ReactElement => {

  const transformDate = (date: string): string => {
    const [year, month, day] = date.split('T')[0].split('-');
    return `${day}-${month}-${year}`;
  }

  return (
    <div className="content">
      <h2>{props.feed}</h2>
      {
        props.error &&
        (
          <div className="errorMessage">{props.error}</div>
        )
      }
      <div id="headlinesList">
      {
          props.articles && (
            props.articles.map((article, index: number) => {
              return(
                <div className="d-flex article" key={index}>
                  <div className="imageContainer">
                    <img src={article.urlToImage} alt={article.title} />
                  </div>
                  <div className="innerContent">
                    <h4>{article.title}</h4>
                    <p>{article.description}</p>
                    <div className="d-flex details">
                      <span className="date">{transformDate(article.publishedAt)}</span>
                      <span>{article.author}</span>
                      <a href={article.url} target="_blank">Read more</a>
                    </div>
                  </div>
                </div>
              )
            })
          )
        }
      </div>

    </div>
  );
}

const mapStateToProps = (state: AppState): ReturnProps => {
  return {
    feed: state.feed,
    articles: state.articles,
    error: state.error
  };
};

const ContentComponentConnected = connect(
  mapStateToProps, 
  null
)(ContentComponent);

export default ContentComponentConnected;

