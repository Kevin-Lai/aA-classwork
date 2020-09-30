import React from 'react';

class Header extends React.Component{
    render(){
        const selected = this.props.selectedPane;
        const headers = this.props.panes.map(
            (pane,idx)=>{
                const title = pane.title;
                const class_name = (idx === selected) ? 'active':'';
                return(
                    <li
                        key = {idx}
                        className = {class_name}
                        onClick = {()=>{
                            this.props.selectedTab(idx)
                        }}
                    >
                        {title}
                    </li>
                )
            }
        )
        
        return(
            <ul className = "tabs-header">
                {headers}
            </ul>
        )
    }
}

export default Header;
