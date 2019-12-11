import React from 'react';
import { connect } from 'react-redux';
import bsLogo from '../../assets/img/bsLogo.svg';
import menu from '../../assets/img/menu.svg';
import { toggleMenuAction } from '../../redux/reducers';

import MobileMenu from './MobileMenu/MobileMenu';

import AppState from '../../types/AppState.types';
import './MobileNav.scss';

interface Props extends ReturnProps{
  toggleMenuAction: any
}

interface ReturnProps{
  menuOpen: boolean,
}

const MobileNav = (props: Props): React.ReactElement => {

  const toggleMenu = () => {
    props.toggleMenuAction();
  }

  return (
    <div>
      <div className="navContent">
        <img className="icon menu" onClick={toggleMenu} src={menu} />
        <img className="icon" src={bsLogo} />
      </div>
      {
        props.menuOpen && (
          <MobileMenu menuOpen={true} toggleMenu={toggleMenu} />
        )
      }
    </div>
  );
}

const mapStateToProps = (state: AppState): ReturnProps => {
  return {
    menuOpen: state.menuOpen
  };
};

const mapDispatchToProps = {
  toggleMenuAction
}

const MobileNavConnected = connect(
  mapStateToProps, 
  mapDispatchToProps
)(MobileNav);

export default MobileNavConnected;

