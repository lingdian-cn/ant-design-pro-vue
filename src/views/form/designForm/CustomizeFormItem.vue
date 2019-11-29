<template>
  <a-form-item
    class="widget-view"
    :class="{active: selectItem.key == element.key, 'is_req': element.options.required}"
    v-if="element && element.key"
    :label="element.options.label"
    :label-col="{ span: element.options.labelColSpan ? element.options.labelColSpan : 5 }"
    :wrapper-col="{ span: element.options.wrapperColSpan ? element.options.wrapperColSpan : 12 }"
  >
    <template v-if="element && element.type === 'input'">
      <a-input
        v-decorator="[ element.options.name, element.options.required ? { rules: [{ required: true, message: element.options.message?element.options.message:'required' }] } : {} ]"
      />
    </template>
    <template v-if="element && element.type === 'textarea'">

    </template>

    <div class="widget-view-action" v-if="selectItem.key == element.key">
      <i class="iconfont icon-icon_clone" @click.stop="itemClone(index)"></i>
      <i class="iconfont icon-trash" @click.stop="itemDelete(index)"></i>
    </div>

    <div class="widget-view-drag" v-if="selectItem.key == element.key">
      <i class="iconfont icon-drag drag-widget"></i>
    </div>
  </a-form-item>
</template>

<script>
export default {
  name: 'CustomizeFormItem',
  components: {},
  props: ['data', 'element', 'index', 'select'],
  data () {
    return {
      selectItem: this.select
    }
  },
  mounted () {
  },
  watch: {
    select (val) {
      this.selectItem = val
    },
    selectItem: {
      handler (val) {
        this.$emit('update:select', val)
      },
      deep: true
    }
  },
  methods: {
    itemClone (index) {
      console.log('itemClone', index)
    },
    itemDelete (index) {
      console.log('itemDelete', index)
    }
  }
}
</script>

<style scoped lang="less">

</style>