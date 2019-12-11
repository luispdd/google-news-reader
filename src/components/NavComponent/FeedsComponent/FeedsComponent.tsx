import React, { useEffect, useState } from 'react';
import arrow from '../../../assets/img/arrow.svg';

import SourcesType from '../../../types/Sources.types'
import './FeedsComponent.scss';

interface Props {
  feeds: SourcesType[],
  handleFeedClick: any
}

const FeedsComponent = (props: Props): React.ReactElement => {

  const handleClick = (id: string): void => {
    props.handleFeedClick(id);
  }  

  return (
    <div id="feeds">
      {
        props.feeds && (
            <h2>Feeds</h2>
        )
      }
      <ul>
        {
          props.feeds && (
            props.feeds.map(feed => {
              return(
                <li key={feed.id} onClick={e => props.handleFeedClick(feed.id)}>{ feed.name }<span><img src={arrow} /></span></li>
                )
              })
          )
        }
      </ul>
    </div>
  );
}

export default FeedsComponent;
