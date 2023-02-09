<!--
 * @Author: Mx
 * @Date: 2023-02-09 21:06:50
 * @Description: 
-->
<template>
  <view style="width: 100%; padding: 0 25rpx; box-sizing: border-box">
    <nut-cell-group title="基础组件">
      <nut-cell
        to="/components/packages/__VUE/button/demo"
        title="Button 按钮"
        is-link
      ></nut-cell>
    </nut-cell-group>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
