import { ModeContext } from './ModeContext';
import { useContext } from 'react';

function Title({ text }) {
  let mode = useContext(ModeContext)
  let isDarkMode = mode.state.isDarkMode;
  return (
    <h2
      className={`heading ${isDarkMode ? "sub-heading-dark" : "sub-heading-light"
        }`}
    >
      {text}
    </h2>
  );
}

export default Title;
