import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
    {
        title: "I love React",
        content: "React is a frontend framework"
    },
    {
        title: "I love Ruby-on-Rails",
        content: "Rails is a server-side web application framework"
    },
    {
        title: "I love WordPress",
        content: "WordPress is an open-source website creation platform"
    },
];

const options = [
  {
    label: "See no Evil",
    value: "See",
  },
  {
    label: "Hear no Evil",
    value: "Hear",
  },
  {
    label: "Speak no Evil",
    value: "Speak",
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Dropdown 
        selected={ selected } 
        onSelectedChange={ setSelected } 
        options={ options }
      />
    </div>
  );
};

export default App;