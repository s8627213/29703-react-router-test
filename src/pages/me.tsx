import React, { Component } from 'react'
import MyPicture from '../components/MyPicture';
import MyResume from '../components/MyResume';
import MyVideo from '../components/MyVidio';

import { Link, Route, Switch} from 'react-router-dom';
import './me.css'
class Me extends Component {
    constructor(props:any) {
        super(props);
        this.state = {
            path: '/my/video'
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="side">
                        <h2>关于我</h2>
                        <ul>
                            <li><Link to="/me/video">我的视频</Link></li>
                            <li><Link to="/me/picture">我的照片</Link></li>
                            <li><Link to="/me/resume">我的简历</Link></li>
                        </ul>
                    </div>
                    <div className="main">
                        <Switch>
                            <Route path="/me/video" component={MyVideo} />
                            <Route path="/me/picture" component={MyPicture} />
                            <Route path="/me/resume" component={MyResume} />
                            <Route component={MyResume} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
export default Me;