import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './components/icon';
import './index.css';

function Page() {
    return (
        <div className='body'>
            <Name/>
            <div/>
            <Info/>

            <Links/>
        </div>
    );
}

function Info() {
    return (
        <div className='section info'>
            I've been writing code since high school.<br/><br/>
            I started a tech company with a friend while we were at the Naval Academy.<br/>
            I dropped out of college to be a software engineer in Florida.<br/>
            I'm now a web application developer in Philadelpha.
        </div>
    );
}

function Links() {
    const linkedin = <LinkIcon prefix='fab' name='fa-linkedin' link='https://www.linkedin.com/in/riley-weber-b65072b7'/>;
    const email    = <LinkIcon prefix='far' name='fa-envelope' link='mailto:rileypweber@gmail.com'/>;

    return (
        <div className='connect-links'>
            {linkedin} {email}
        </div>
    );
}


const LinkIcon = ({ prefix, name, link }) => (
    <a href={link} className='rw-icon' target='_blank'>
        <Icon prefix={prefix} name={name}/>
    </a>
);
const Name = () => <div className='section name'>Riley Weber</div>;

ReactDOM.render(<Page/>, document.querySelector('#root'));