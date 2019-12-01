<template>
  <div class="m-customize-form-container">
    <div v-if="data.list.length == 0" class="m-form-empty">从左侧拖拽来添加字段</div>
    <a-form :layout="data.config.layout" class="m-form-container">
      <draggable
        class="m-customize-form-draggable"
        v-model="data.list"
        v-bind="{group:'people', ghostClass: 'ghost',animation: 200, handle: '.drag-widget'}"
        @end="dragMoveEnd"
        @add="handleAddFormItem"
      >
        <transition-group name="fade" tag="div" class="m-customize-form-list">
          <template v-for="(element, index) in data.list">
            <!--栅格-->
            <template v-if="element.type && element.type === 'grid'">
              <a-row
                :class="{active: selectItem.key == element.key}"
                v-if="element && element.key"
                :key="element.key"
                :align="element.options.align"
                :gutter="element.options.gutter"
                :justify="element.options.justify"
                type="flex"
                @click.native="handleSelectWidget(index)"
              >
                <a-col v-for="(col, colIndex) in element.columns" :key="colIndex" :span="col.span?col.span:0">
                  <draggable
                    v-model="col.list"
                    :no-transition-on-drag="true"
                    v-bind="{group:'people', ghostClass: 'ghost',animation: 200, handle: '.drag-widget'}"
                    @end="dragMoveEnd"
                    @add="handleAddCol($event, element, colIndex)"
                  >
                    <transition-group name="fade" tag="div" class="widget-col-list">
                      <CustomizeFormItem
                        v-for="(el, i) in col.list"
                        :key="el.key"
                        v-if="el.key"
                        :data="data"
                        :element="el"
                        :index="i"
                        :select.sync="selectItem"
                      />
                    </transition-group>
                  </draggable>
                </a-col>
              </a-row>
            </template>
            <!--其他组件-->
            <template v-else>
              <CustomizeFormItem
                v-if="element && element.key"
                :key="element.key"
                :data="data"
                :element="element"
                :index="index"
                :select.sync="selectItem"
              />
            </template>
          </template>
        </transition-group>
      </draggable>
    </a-form>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
import CustomizeFormItem from './CustomizeFormItem'

export default {
  name: 'CustomizeForm', // 自定义表单
  components: {
    Draggable,
    CustomizeFormItem,
  },
  props: ['data', 'select'],
  data () {
    return {
      selectItem: this.select
    }
  },
  created () {
  },
  mounted () {
  },
  computed: {
  },
  watch: {
    select (val) {
      this.selectItem = val
    },
    selectItem: {
      handler (val) {
        // 配合.sync修饰符使用（属性名需驼峰法命名）
        this.$emit('update:select', val)
      },
      deep: true
    }
  },
  methods: {
    // 组件开始拖动时回调
    dragMoveStart (evt) {
      console.log('customizeForm-start-c', evt)
    },
    // 组件结束拖动时回调
    dragMoveEnd (evt) {
      console.log('customizeForm-end-c', evt)
    },
    handleAddFormItem (evt) {
      console.log('customizeForm-handleAddFormItem', evt)
    },
    handleAddCol (evt, element, colIndex) {
      console.log('customizeForm-handleAddCol', evt, element, colIndex)
    },
    handleSelectWidget (index) {
      console.log('customizeForm-handleSelectWidget', index)
    },
    // 组件拖动时回调
    dragMove () {
      return true
    },
  }
}
</script>
<style scoped lang="less">
  /*@import "widget-form-list";*/
  @primary-color: #409EFF;
  @primary-background-color: #ecf5ff;
  /*自定义表单容器*/
  .m-customize-form-container {
    position: relative;
    border: #e0e0e0 dashed 1px;
    margin: 10px;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    background-color: #fff;

    /*表单为空*/
    .m-form-empty {
      /*display: flex;*/
      /*justify-content: center;*/
      /*align-items: center;*/
      /*height: 100%;*/
      /*width: 100%;*/
      font-size: 20px;
      color: #e0e0e0;
      position: absolute;
      top: 50%;
      left: 30%;
    }
    /*表单容器*/
    .m-form-container {
      height: 100%;

      .m-customize-form-draggable {
        height: 100%;

        .m-customize-form-list {
          height: 100%;
        }
      }
    }

  }


</style>
