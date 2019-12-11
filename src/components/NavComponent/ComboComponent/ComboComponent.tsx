import React from 'react';

import category from '../../../assets/img/category.svg';
import language from '../../../assets/img/language.svg';

import './ComboComponent.scss';

interface Props {
  handleChange: any,
  value: string,
  data: string[],
  icon: string
}

const ComboComponent = (props: Props): React.ReactElement => {

  const icon = (name: string) => {
    if(name === 'language'){
      return language;
    }else{
      return category;
    }
  }

  return (
    <div className="combo">
      <img src={icon(props.icon)} />
      <select className="select-css" onChange={e => props.handleChange(e.target.value)} value={props.value}>
        <option value="-1">(Select)</option>
        {
          props.data.map(item => {
            return(
              <option key={item} value={item}>{item}</option>
            )
          })
        }
      </select>
    </div>
  );
}

export default ComboComponent;
