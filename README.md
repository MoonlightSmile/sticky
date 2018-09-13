# sticky

### 你可以在dom上直接v-sticky让这个元素变为sticky你可以设置不同的option修改一些状态
  - `<header v-sticky="options">Moonlight</header>`
  - `top` 设置sticky的top位置，默认是0

- 可选
  - `isAutoHide`设置sticky的元素是否可以自动隐藏（下滑隐藏，上滑显示）默认是false
  - `animationDelay`自动隐藏的时间默认0.6
  - `offset`scrollTop是多少的时候开始自动隐藏默认300px