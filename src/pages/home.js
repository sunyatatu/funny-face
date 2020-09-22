import React from 'react';
import './home.scss';
import {Link} from 'react-router-dom'

export default function Home(){

    
    return (
       <div className="home-container">
           
            <div className="home-header">
                <h1>这是首页啊，菜鸟</h1>
            </div>
            <div className="link-body">
                <Link to="/funny">链接至笑话页面</Link>
            </div>

        </div>
        
        
    );
}