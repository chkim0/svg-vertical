import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faSketch } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEvernote } from '@fortawesome/free-brands-svg-icons';
import { forwardRef } from 'react';

const icons = [faGitAlt, faSketch, faTwitter, faEvernote];

const Panels = forwardRef((_, ref) => {
  return (
    <ul className='panel' ref={ref}>
      <li className='on'>
        <div className="bg"></div>
      </li>
      <li>
        <div className="bg"></div>
      </li>
      <li>
        <div className="bg"></div>
      </li>
      <li>
        <div className="bg"></div>
      </li>
    </ul>
  );
})

export default Panels;