let scroll
class Sticky {
  config ({
    ele,
    top,
    animationDelay,
    isAutoHide,
    offset
  }) {
    this.ele = ele
    this.top = top || 0
    this.animationDelay = animationDelay || 0.6
    this.isAutoHide = isAutoHide || false
    this.offset = offset || 300
    this.currentTop = 0
    console.log(this)
    this.init()
  }
  init () {
    // this.ele.style.position = '-webkit-sticky'
    // this.ele.style.position = 'sticky'
    this.ele.style.zIndex = 1
    this.ele.style.top = `${this.top}px`
    window.addEventListener('load', e => {
      console.log(this.stickyTop = this.ele.offsetTop)
    })
    if (this.isAutoHide) {
      this.ele.style.transition = `transform ${this.animationDelay}s`
      this.bindEvent()
    } else {
      this.removeEvent()
    }
  }
  bindEvent () {
    console.log('bind')
    scroll = this.scrollHander.bind(this)
    window.addEventListener('scroll', scroll)
  }
  removeEvent () {
    console.log('remove')
    window.removeEventListener('scroll', scroll)
  }
  scrollHander (el) {
    let scrollTop = window.pageYOffset || // 用于FF
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
    console.log('el', scrollTop)
    if (scrollTop >= this.stickyTop) {
      this.ele.style.position = 'fixed'
      this.ele.style.width = '100%'
    } else {
      this.ele.style.position = ''
    }
    if (scrollTop < this.offset || Math.abs(scrollTop - this.currentTop) < 15) {
      return
    }
    let hide = scrollTop > this.currentTop
    if (hide) {
      this.ele.style.transform = 'translate3d(0, -100%, 0)'
    } else {
      this.ele.style.transform = 'translate3d(0, 0, 0)'
    }
    this.currentTop = scrollTop
  }
}
const sticky = new Sticky()
export default {
  install (Vue, options) {
    Vue.directive('sticky', {
      bind (ele, binding) {
        /* eslint-disable no-new */
        sticky.config({
          ele,
          ...binding.value
        })
      },
      update (ele, binding, vnode, oldVnode) {
        console.log(binding)
        sticky.config({
          ele,
          ...binding.value
        })
      }

    })
  }
}
