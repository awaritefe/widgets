import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
    {
        title: 'I love React',
        content: 'React is a frontend framework'
    },
    {
        title: 'I love Ruby-on-Rails',
        content: 'Rails is a server-side web application framework'
    },
    {
        title: 'I love WordPress',
        content: 'WordPress is an open-source website creation platform'
    },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div>
      {/* <Accordion items={ items } /> */}
      <Search />
    </div>
  );
};
