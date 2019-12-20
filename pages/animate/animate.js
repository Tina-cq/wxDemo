import NumberAnimate from "../../utils/NumberAnimate";
var arr=[1,2]
Page({
  data: {

  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.animate()
  },
  onReady: function () {

  },
  onShow: function () {

    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },

  onUnload: function () {
    // 页面关闭

  },
  //调用NumberAnimate.js中NumberAnimate实例化对象，测试3种效果
  animate: function () {

    this.setData({
      num1: ''
    });

    // let num1 = 92.30;
    arr[0] = new NumberAnimate({
      from: 50,//开始时的数字
      speed: 5000,// 总时间
      refreshTime: 100,//  刷新一次的时间
      decimals: 2,//小数点后的位数
      onUpdate: () => {//更新回调函数
        var sss = arr[0].tempValue
        this.setData({
          num1: sss
        });
      },
      onComplete: () => {//完成回调函数
       
      }
    });

  }
})