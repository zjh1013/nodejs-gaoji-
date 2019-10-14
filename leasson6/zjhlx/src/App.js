import React, { Component } from 'react'
import axios from 'axios'
import Swiper from 'swiper/js/swiper';
import 'swiper/css/swiper.css'
import './css/index.css'
export default class App extends Component {
  state = {
    bannerList: [],
    navList: []
  }
  render() {
    let { bannerList, navList } = this.state
    console.log(bannerList)

    return (
      <div>
        <div className='swiper-container'>
          <div className="swiper-wrapper">
            {
              bannerList.map((item, index) => {
                return <div key={index} className="swiper-slide">
                  <img src={item.imgUrl} alt="" />
                </div>
              })
            }
          </div>
        </div>

        <div className='icon'>
          {
            navList.map((item1, index1) => <div key={index1} className="icon-box">
              <img src={item1.iconImg} />
              <span>{item1.iconName}</span>
            </div>)
          }
        </div>
      </div>
    )
  }
  componentDidMount() {
    new Swiper('.swiper-container')

    axios.get('/home/bannerList').then((res) => {
      this.setState({
        bannerList: res.data.results
      })
    })
    axios.get('/home/navList').then((res) => {
      console.log(res.data.results)
      this.setState({
        navList: res.data.results
      })

    })
  }

}
