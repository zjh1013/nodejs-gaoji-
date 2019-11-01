import React, { Component } from 'react'
import Hea from '../../components/header'
import Slide from '../../components/slide'
export default class home extends Component {
    render() {
        return (
            <div className="root">
                <Hea></Hea>
                <Slide></Slide>
            </div>
        )
    }
}
