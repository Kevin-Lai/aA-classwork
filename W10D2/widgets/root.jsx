import React from 'react';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Weather from './frontend/weather';

// const Congrats = () => <h1>Congratulations, you did it!</h1>;

// export default Congrats;
const panes = [
    {title: "Tab 1", content: "Item 1"},
    {title: "Tab 2", content: "Item 2"},
    {title: "Tab 3", content: "Item 3"}
]

const Root = () => (
    <div className="root-wrapper">
        {/* <h1>Root functional component</h1> */}
        <Clock />
        <Tabs panes={panes}/>
        <Weather />
    </div>
)

export default Root;
