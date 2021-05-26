import React from 'react';
import Accordion from './components/Accordion';

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
]

export default () => {
    return (
        <div>
            <Accordion items={ items } />
        </div>
    )
};
