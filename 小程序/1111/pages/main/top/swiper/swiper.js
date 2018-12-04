Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3', 'demo-text-4'],
    indicatorDots: true,
    vertical: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    passwordInputHidden: true,//hidden是true 默认隐藏
  },
  passwordInputHidden() {
    this.setData({
      passwordInputHidden: !this.data.passwordInputHidden  //取反 打开关闭小键盘
    });
    this.setData({
      inputPassword: ''
    });
  },
  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
