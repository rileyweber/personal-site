import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Page() {
    return (
        <div className='body'>
            <Name/>
            <div/>
            <Info/>
        </div>
    );
}

function Info () {
    return (
        <div className='section info'>
            Hey, my name is Riley.
            <br/><br/>
            I've been a writing code since high school, but more formally since my freshman year at the Naval Academy.
        </div>
    );
}

const Name = () => <div className='section name'>Riley Weber</div>;

ReactDOM.render(<Page/>, document.querySelector('#root'));