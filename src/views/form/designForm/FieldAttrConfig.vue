<template>
  <div class="m-field-config-container">
    <div class="m-field-config-item">
      <p class="m-field-config-label">标签名称</p>
      <a-input v-model="data.options.label"/>
    </div>
    <div class="m-field-config-item">
      <p class="m-field-config-label">字段名称</p>
      <a-input v-model="data.options.name"/>
    </div>
    <div class="m-field-config-item">
      <p class="m-field-config-label">占位内容</p>
      <a-input v-model="data.options.placeholder"/>
    </div>
    <div class="m-field-config-item">
      <p class="m-field-config-label">组件尺寸</p>
      <a-radio-group v-model="data.options.size" buttonStyle="solid">
        <a-radio-button value="small">small</a-radio-button>
        <a-radio-button value="default">default</a-radio-button>
        <a-radio-button value="large">large</a-radio-button>
      </a-radio-group>
    </div>
    <div class="m-field-config-item">
      <p class="m-field-config-label">标签配置</p>
      宽度：<a-input-number style="width: 60px;" v-model="data.options.labelCol.span" :min="1" :max="24" :step="1"/>
      &nbsp;&nbsp;
      间隔：<a-input-number style="width: 60px;" v-model="data.options.labelCol.offset" :min="0" :max="24" :step="1"/>
    </div>
    <div class="m-field-config-item">
      <p class="m-field-config-label">控件配置</p>
      宽度：<a-input-number style="width: 60px;" v-model="data.options.wrapperCol.span" :min="1" :max="24" :step="1"/>
      &nbsp;&nbsp;
      间隔：<a-input-number style="width: 60px;" v-model="data.options.wrapperCol.offset" :min="0" :max="24" :step="1"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FieldAttrConfig',
  props: ['data'],
  mounted () {

  },
  watch: {

  },
  methods: {
    setLayout (layout) {

    },
  }
}
</script>

<style scoped lang="less">
  .m-field-config-container {
    height: 100%;
    width: 100%;
    overflow-y: auto;
    -ms-overflow-y: auto;
    padding-left: 10px;
    padding-right: 10px;

    .m-field-config-item {
      text-align: center;
      margin: 10px 0px 30px 0px;

      .m-field-config-label {
        text-align: left;
      }
    }
  }
</style>