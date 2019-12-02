<template>
  <my-icon :type="type" style="" />
</template>

<script>
import { Icon } from 'ant-design-vue'
import AppConfig from '../../config/app.config.js'
const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: AppConfig.iconUrl, // 在 iconfont.cn 上生成
  extraCommonProps: { class: 'iconClass' },
})
export default {
  name: 'MIcon',
  components: {MyIcon},
  props: ['type'],
}
</script>

<style scoped>
.iconClass {
  font-size: 14px;
}
</style>