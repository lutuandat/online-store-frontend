import * as React from 'react';
import './footer.scss';

export default class Footer extends React.Component {
  public render() {
    return (
      <div className='footer'>
          <div className="inner-line">
            <hr className='upper-line' />
          </div>
          <p className="message">
              Just sharing anythings you catch in your life.
          </p>
          <div className="inner-line">
             <hr className='bottom-line' />
          </div>
      </div>
    );
  }
}
