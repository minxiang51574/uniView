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
      <nut-cell
        to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/cell/demo"
        title="Cell 单元格"
        is-link
      ></nut-cell>
      <nut-cell
        to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/configprovider/demo"
        title="ConfigProvider 全局配置"
        is-link
      ></nut-cell>
      <nut-cell
        to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/icon/demo"
        title="Icon 图标"
        is-link
      ></nut-cell>
      <nut-cell
        to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/image/demo"
        title="Image 图片"
        is-link
      ></nut-cell>
      <nut-cell
        to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/overlay/demo"
        title="OverLay 遮罩层"
        is-link
      ></nut-cell>
      <nut-cell
        to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/popup/demo"
        title="Popup 弹出层"
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
page {
  background-color: #f7f8fa;
  height: 100%;
  padding-bottom: 25rpx;
}
</style>
