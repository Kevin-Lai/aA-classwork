import React from 'react';
import Header from './header';

class Tabs extends React.Component{
    constructor(props){
        super(props);
        this.state = {component: 0};
        this.selectTab = this.selectTab.bind(this);
    }
    render(){
        const pane = this.props.panes[this.state.component];
        return(
            <div className="tabs-wrapper">
                <Header
                    selectedPane={this.state.component}
                    panes={this.props.panes}
                    selectedTab={this.selectTab}>
                </Header>
                <article className="tabs-content">{pane.content}</article>
            </div>
        )
    }
    // ---------------------------------
    selectTab(idx){
        // debugger
        this.setState({component: idx});
    }
}

export default Tabs;
