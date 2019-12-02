<template>
  <div class="m-form-config-container">
    <div class="m-form-config-item">
      <p class="m-form-config-label">表单布局</p>
      <a-radio-group v-model="data.layout" buttonStyle="solid">
        <a-radio-button value="horizontal">horizontal</a-radio-button>
        <a-radio-button value="vertical">vertical</a-radio-button>
        <a-radio-button value="inline">inline</a-radio-button>
      </a-radio-group>
    </div>
    <div class="m-form-config-item">
      <p class="m-form-config-label">组件尺寸</p>
      <a-radio-group v-model="data.size" buttonStyle="solid">
        <a-radio-button value="small">small</a-radio-button>
        <a-radio-button value="default">default</a-radio-button>
        <a-radio-button value="large">large</a-radio-button>
      </a-radio-group>
    </div>
    <div class="m-form-config-item">
      <p class="m-form-config-label">标签配置</p>
      宽度：<a-input-number style="width: 60px;" v-model="data.labelCol.span" :min="1" :max="24" :step="1"/>
      &nbsp;&nbsp;
      间隔：<a-input-number style="width: 60px;" v-model="data.labelCol.offset" :min="0" :max="24" :step="1"/>
    </div>
    <div class="m-form-config-item">
      <p class="m-form-config-label">控件配置</p>
      宽度：<a-input-number style="width: 60px;" v-model="data.wrapperCol.span" :min="1" :max="24" :step="1"/>
      &nbsp;&nbsp;
      间隔：<a-input-number style="width: 60px;" v-model="data.wrapperCol.offset" :min="0" :max="24" :step="1"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormAttrConfig',
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
  .m-form-config-container {
    height: 100%;
    width: 100%;
    overflow-y: auto;
    -ms-overflow-y: auto;
    padding-left: 10px;
    padding-right: 10px;

    .m-form-config-item {
      text-align: center;
      margin: 10px 0px 30px 0px;

      .m-form-config-label {
        text-align: left;
      }
    }
  }
</style>