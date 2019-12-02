<template>
  <div class="m-customize-form-container">
    <div v-if="data.list.length == 0" class="m-form-empty">从左侧拖拽来添加字段</div>
    <a-form :layout="data.config.layout" class="m-form-container">
      <draggable
        class="m-customize-form-draggable"
        v-model="data.list"
        v-bind="{group:'people', ghostClass: 'ghost',animation: 200, handle: '.drag-item'}"
        @end="dragMoveEnd"
        @add="handleAddFormItem"
      >
        <transition-group name="fade" tag="div" class="m-customize-form-list">
          <template v-for="(element, index) in data.list">
            <!--栅格-->
            <template v-if="element.type && element.type === 'grid'">
              <a-row
                class="m-form-grid-row"
                :class="{active: selectItem.key == element.key}"
                v-if="element && element.key"
                :key="element.key"
                :align="element.options.align"
                :gutter="element.options.gutter"
                :justify="element.options.justify"
                type="flex"
                @click.native="handleSelectItem(index)"
              >
                <a-col class="m-form-grid-col" v-for="(col, colIndex) in element.columns" :key="colIndex" :span="col.span?col.span:0">
                  <draggable
                    v-model="col.list"
                    :no-transition-on-drag="true"
                    v-bind="{group:'people', ghostClass: 'ghost',animation: 200, handle: '.drag-item'}"
                    @end="dragMoveEnd"
                    @add="handleAddCol($event, element, colIndex)"
                  >
                    <transition-group name="fade" tag="div" class="m-col-list">
                      <CustomizeFormItem
                        v-for="(el, i) in col.list"
                        :key="el.key"
                        v-if="el.key"
                        :parent="col"
                        :data="data"
                        :element="el"
                        :index="i"
                        :select.sync="selectItem"
                      />
                    </transition-group>
                  </draggable>
                </a-col>

                <div class="m-a-form-item-drag m-icon-container" v-if="selectItem.key === element.key">
                  <a-icon class="m-icon m-icon-drag drag-item" type="drag"/>
                </div>

                <div class="m-a-form-item-action m-icon-container" v-if="selectItem.key === element.key">
                  <a-icon class="m-icon m-icon-clone" type="copy" @click.stop="itemClone(index)"/>
                  <a-icon class="m-icon m-icon-del" type="delete" @click.stop="itemDelete(index)"/>
                </div>
              </a-row>
            </template>
            <!--其他组件-->
            <template v-else>
              <CustomizeFormItem
                v-if="element && element.key"
                :key="element.key"
                :data="data"
                :parent="data"
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
    // 组件拖动时回调
    dragMove () {
      return true
    },
    // 组件结束拖动时回调
    dragMoveEnd (evt) {
      console.log('customizeForm-end-c', evt)
    },
    // 添加组件
    handleAddFormItem (evt) {
      console.log('customizeForm-handleAddFormItem', evt)
    },
    // 添加列
    handleAddCol (evt, element, colIndex) {
      console.log('customizeForm-handleAddCol', evt, element, colIndex)
    },
    // 选择栅格
    handleSelectItem (index) {
      console.log('customizeForm-handleSelectItem', index)
      this.selectItem = this.data.list[index]
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

          /*行*/
          .m-form-grid-row {
            position: relative;
            padding: 5px;
            border: 1px dashed hsla(0,0%,66.7%,.5);
            background-color: rgba(253,246,236,.3);
            margin: 2px;

            /*行覆盖状态*/
            &:hover {
              background-color: #fdf6ec;
              /*border: 1px solid hsla(0,0%,66.7%,.5);*/
              outline: 1px solid #e6a23c;
            }

            /*行活动状态*/
            &.active {
              outline: 2px solid #e6a23c;
              border: 1px solid #e6a23c;
              outline-offset: 0;
            }

            &.ghost {
              background: #fff;
              outline: 1px dashed #F56C6C;

              /*background: #F56C6C;*/
              /*border: 2px solid #F56C6C;*/
              /*outline-width: 0;*/
              /*height: 3px;*/
              /*box-sizing: border-box;*/
              /*font-size: 0;*/
              /*content: '';*/
              /*overflow: hidden;*/
              /*padding: 0;*/
            }

            /*列*/
            .m-form-grid-col {
              .m-col-list {
                min-height: 50px;
                background-color: #fff;
                border: 1px dashed #ccc;
              }
            }

            .m-icon {
              font-size: 14px;
              margin: 0 5px;
              color: #fff;

              &:hover {
                color: red;
              }
            }

            .m-icon-container {
              background-color: #e6a23c;
              height: 28px;
              line-height: 28px;
              position: absolute;

              &:hover {
                opacity: .5;
              }
            }

            .m-a-form-item-drag {
              padding: 0 2px;
              top: -2px;
              left: -2px;

              .m-icon-drag {
                cursor: move;
              }
            }

            .m-a-form-item-action {
              right: -1px;
              bottom: 0;
            }

          }

        }
      }
    }

  }


</style>
