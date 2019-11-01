import axios from 'axios';
import React, { Component } from 'react';
import 'swiper/css/swiper.css';
import Swiper from 'swiper/js/swiper';
import './css/index.css';
export default class App extends Component {
  state = {
    bannerList: [],
    navList: [],
    tabNav: [],
    tabList: [],
    ind: 0,
    val:""
  }
  changval(e){
    let {val} = this.state;
    val= e.target.value;
    this.setState({
      val
    })
  }
  clickAdd(){
    let {val} = this.state;
    axios.post('/home/val',{
      val
    }).then((res)=>{
      
    })

  }
  render() {
    let { bannerList, navList, tabNav, ind, tabList ,val} = this.state
    return (
      <div>
        <div className='ipt'>
            <input value={val} onChange={this.changval.bind(this)} />
            <button onClick={this.clickAdd.bind(this)}>添加</button>
        </div>
        <div className='swiper-container'>
          <div className="swiper-wrapper">
            {
              bannerList.map((item, index) => <div key={index} className="swiper-slide">
                <img src={item.imgUrl} alt="" />
              </div>
              )
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

        <div className='tab'>
          {
            tabNav.map((item, index) => <span className={ind === index ? 'ac' : ''} onClick={this.clickNav.bind(this, item.typeid, index)} key={index}>{item.typename}</span>)
          }
        </div>

        <div>
          {
            tabList.map((item, index) => <div className='navlist' key={index}>
              <img src={item.pimage} alt="" />
              <span>{item.pname}</span>
              <span>价格:{item.price}</span>
            </div>)
          }
        </div>
      </div>
    )
  }
  clickNav(id, index) {
    axios.get('/home/tabs?type=' + id).then((res) => {
      this.setState({
        tabList: res.data.result
      })
    })
    this.setState({
      ind: index
    })
  }
  componentDidMount() {
    new Swiper('.swiper-container')
    axios.get('/home/bannerList').then((res) => {
      
      this.setState({
        bannerList: res.data.results
      })
    })
    axios.get('/home/navList').then((res) => {
      console.log(res)
      this.setState({
        navList: res.data.results
      })
    })
    axios.get('/home/tabList').then((res) => {
      
      this.setState({
        tabNav: res.data.result
      })
    })
  }

}
