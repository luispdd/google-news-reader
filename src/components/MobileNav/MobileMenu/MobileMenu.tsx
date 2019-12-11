import React from 'react';
import close from '../../../assets/img/close.svg';

import NavComponent from '../../NavComponent/NavComponent'

import './MobileMenu.scss';

interface Props{
  toggleMenu: any
  menuOpen: boolean,
}

const MobileMenu = (props: Props): React.ReactElement => {

  return (
    <div className="menuContent">
      {
        props.menuOpen && (
          <div className="floatMenu">
            <div className="menuContainer">
            <img className="icon close" src={close} alt="close" onClick={props.toggleMenu} />
              <NavComponent />
            </div>
          </div>
        )
      }
    </div>
  );
}

export default MobileMenu;

