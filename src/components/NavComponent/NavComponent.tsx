import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import logoTextLanding from '../../assets/img/logoTextLanding.svg';
import bsLogo from '../../assets/img/bsLogo.svg';

import { getSources, getHeadlines, setLanguageAction, setCategoryAction, toggleMenuAction } from '../../redux/reducers'

import SourcesType from '../../types/Sources.types'
import AppState from '../../types/AppState.types';
import ComboComponent from './ComboComponent/ComboComponent';
import FeedsComponent from './FeedsComponent/FeedsComponent';
import './NavComponent.scss';

interface Props extends ReturnProps{
  getSources: any,
  getHeadlines: any,
  setLanguageAction: any,
  setCategoryAction: any,
  toggleMenuAction: any
}

interface ReturnProps{
  language: string,
  category: string,
  sources: SourcesType[],
  menuOpen: boolean,
  fetching: boolean
}
const NavComponent = function(props: Props): React.ReactElement {

  const [languages, setLanguages] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [sources, setSources] = useState<SourcesType[]>([]);
  const [feeds, setFeeds] = useState<SourcesType[]>([]);

  const setUniqueCategories = (): void => {
    if(sources && sources.length > 0){
      setCategories([...new Set(sources.map(source => source.category))].sort())
    }
  }

  const setUniqueLanguages = (): void => {
    if(sources && sources.length > 0){
      setLanguages([...new Set(sources.map(source => source.language))].sort());
    }
  }

  useEffect(() => {
    props.getSources().then((s: any) => {
      if(s){
        setSources(s.sources)
      }
    })
  }, [] );

  useEffect(() => {
    setUniqueCategories();
    setUniqueLanguages();
    getFeeds();
  }, [sources] );

  useEffect(() => {
    console.log('languages', languages);
  }, [languages] );

  useEffect(() => {
    console.log('categories', categories);
  }, [categories] );

  useEffect(() => {
    console.log('feeds', feeds);
  }, [feeds] );

  const handleChangeLanguage = (newLanguage: string) => {
    props.setLanguageAction(newLanguage);
  }

  const handleChangeCategory = (newCategory: string) => {
    props.setCategoryAction(newCategory);
  }

  const getFeeds = () => {
    const filteredSources = sources.filter(source => {
      return (props.category === source.category || props.category === '-1')  && (props.language === source.language || props.language === '-1')
    })
    setFeeds(filteredSources);
  }

  const handleFeedClick = (selectedFeedId: string) => {
    console.log('selectedFeed', selectedFeedId);
    const feed = feeds.find(feed => feed.id === selectedFeedId);
    console.log('feed', feed);
    if(feed){
      props.getHeadlines(feed);
      if(props.menuOpen){
        props.toggleMenuAction();
      }
    }
    
  }

  return (
    <div id="nav-header">
      <img src={bsLogo} className="img-logo" alt="logo" />
      <img src={logoTextLanding} className="text-logo" alt="logo" />
      <div className="container">
        <h2>News reader</h2>
        <ComboComponent 
          data={languages} 
          handleChange={handleChangeLanguage} 
          value={props.language}
          icon="language"
        />
        <ComboComponent 
          data={categories} 
          handleChange={handleChangeCategory} 
          value={props.category}
          icon="category"
        />
        <FeedsComponent 
          feeds={feeds}
          handleFeedClick={handleFeedClick}
        />
        <div id="btnSources">
          <button onClick={getFeeds} >Get Sources</button>
        </div>
      </div>
      {
        props.fetching &&
        (
          <div id="fetching">Loading...</div>
        )
      }
    </div>
  );
}

const mapDispatchToProps = {
  getSources,
  getHeadlines,
  setLanguageAction,
  setCategoryAction,
  toggleMenuAction
}

const mapStateToProps = (state: AppState): ReturnProps => {
  return {
    language: state.language,
    category: state.category,
    sources: state.sources,
    menuOpen: state.menuOpen,
    fetching: state.fetching
  };
};

const NavComponentConnected = connect(
  mapStateToProps, 
  mapDispatchToProps
)(NavComponent);

export default NavComponentConnected;
