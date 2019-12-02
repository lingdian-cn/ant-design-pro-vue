<template>
  <a-modal
    style="height: 1px;top: 0px;"
    :width="_width"
    :visible="visible"
    :closable="false"
    :footer="null"
    :maskClosable="false"
    :keyboard="false"
    :bodyStyle="_modalBodyStyle"
  >
    <a-row style="width: 100%; height: 100%;"><!--:style="{ width: _width, height: _height }"-->
      <!--左边栏-->
      <a-col :span="5" class="m-layout-base m-component-container-left">
        <div class="m-component-left-title">基础字段</div>
        <draggable
          tag="ul"
          :list="basicComponents"
          v-bind="{group:{ name:'people', pull:'clone', put:false}, sort:false, ghostClass: 'ghost'}"
          @end="dragMoveEnd"
          @start="dragMoveStart"
          :move="dragMove"
        >
          <li class="m-component-left-item" v-for="(item, index) in basicComponents" :key="index">
            <a-icon :type="item.icon || 'drag'" />&nbsp;<span>{{item.name}}</span>
          </li>
        </draggable>
        <div class="m-component-left-title">高级字段</div>
        <draggable
          tag="ul"
          :list="advanceComponents"
          v-bind="{group:{ name:'people', pull:'clone', put:false}, sort:false, ghostClass: 'ghost'}"
          @end="dragMoveEnd"
          @start="dragMoveStart"
          :move="dragMove"
        >
          <li class="m-component-left-item" v-for="(item, index) in advanceComponents" :key="index">
            <a-icon :type="item.icon || 'drag'" />&nbsp;<span>{{item.name}}</span>
          </li>
        </draggable>
        <div class="m-component-left-title">布局字段</div>
        <draggable
          tag="ul"
          :list="layoutComponents"
          v-bind="{group:{ name:'people', pull:'clone', put:false}, sort:false, ghostClass: 'ghost'}"
          @end="dragMoveEnd"
          @start="dragMoveStart"
          :move="dragMove"
        >
          <li class="m-component-left-item" v-for="(item, index) in layoutComponents" :key="index">
            <a-icon :type="item.icon || 'drag'" />&nbsp;<span>{{item.name}}</span>
          </li>
        </draggable>
      </a-col>
      <!--中间栏-->
      <a-col :span="13" class="m-layout-base m-component-container-center">
        <div class="m-container-center-header">
          <a class="m-header-btn" @click="btnImport"><a-icon type="to-top" /> 导入Json</a>
          <a class="m-header-btn" @click="btnJson"><a-icon type="file-text" /> 生成Json</a>
          <a class="m-header-btn" @click="btnPreview"><a-icon type="eye" /> 预览</a>
          <a class="m-header-btn" @click="btnClear" style="color: red;"><a-icon type="delete" /> 清空</a>
          <a class="m-header-btn" @click="btnSave"><a-icon type="save" /> 保存</a>
          <a class="m-header-btn" @click="btnClose" style="color: red;"><a-icon type="close" /> 关闭</a>
        </div>
        <div class="m-container-center-body">
          <!--自定义表单部分-->
          <CustomizeForm :data="customizeFormData" :select.sync="customizeFormSelect"/>
        </div>
      </a-col>
      <!--右边栏-->
      <a-col :span="6" class="m-layout-base m-component-container-right">
        <div class="m-component-container-right-header">
          <div class="m-config-tab" :class="{active: configTab === 'field'}" @click="configSelect('field')">字段属性</div>
          <div class="m-config-tab" :class="{active: configTab === 'form'}" @click="configSelect('form')">表单属性</div>
        </div>
        <div class="m-config-body">
          <FieldAttrConfig v-show="configTab === 'field'" :data="customizeFormSelect"/>
          <FormAttrConfig v-show="configTab === 'form'" :data="customizeFormData.config"/>
        </div>
      </a-col>
    </a-row>
  </a-modal>
</template>

<script>
import draggable from 'vuedraggable'
import { basicComponents, advanceComponents, layoutComponents } from './componentsConfig'
import CustomizeForm from './CustomizeForm'
import FieldAttrConfig from './FieldAttrConfig'
import FormAttrConfig from './FormAttrConfig'

export default {
  name: 'FormDesigner', // 表单设计器
  components: {
    FieldAttrConfig,
    FormAttrConfig,
    CustomizeForm,
    draggable,
  },
  props: {
    width: {
      type: String,
      default: '',
      required: false
    },
    modalBodyStyle: {
      type: Object,
      default: null,
      required: false
    },
  },
  data () {
    return {
      basicComponents,
      layoutComponents,
      advanceComponents,
      visible: true,
      description: '自定义表单。',
      customizeFormData: {
        list: [
          {
            type: 'grid',
            name: '栅格布局',
            icon: '',
            key: 'abcde',
            columns: [
              {
                span: 12,
                list: []
              },
              {
                span: 12,
                list: []
              }
            ],
            options: {
              gutter: 0, // 0-24
              justify: 'start', // start end center space-around space-between
              align: 'top' // top middle bottom
            }
          },
          {
            type: 'input',
            name: '单行文本框',
            icon: '',
            key: '123456789',
            options: {
              label: '单行文本框',
              name: 'input',
              placeholder: '单行文本框',
              // labelCol: { span: 6, offset: 0 }, // 标签宽度，空格
              // wrapperCol: { span: 6, offset: 0 }, // 输入框宽度，空格
              required: true,
              rules: [
                { required: true, message: 'input is required!' },
              ]
            }
          },
        ],
        config: {
          // labelWidth: 100,
          // labelPosition: 'right',
          size: 'default', // small, default, large
          layout: 'horizontal', // horizontal, vertical, inline
          labelCol: { span: 6, offset: 0 }, // 标签宽度，空格
          wrapperCol: { span: 12, offset: 0 }, // 输入框宽度，空格
        },
      },
      customizeFormSelect: {
        type: 'input',
        name: '单行文本框',
        icon: '',
        key: '123456789',
        options: {
          label: '单行文本框',
          name: 'input',
          placeholder: '单行文本框',
          labelCol: { span: 12, offset: 0 }, // 标签宽度，空格
          wrapperCol: { span: 12, offset: 0 }, // 输入框宽度，空格
          rules: [
            { required: true, message: 'input is required!' },
          ]
        }
      },
      // customizeFormSelect: {
      //   type: 'grid',
      //   name: '栅格布局',
      //   icon: '',
      //   key: 'abcde',
      //   columns: [
      //     {
      //       span: 12,
      //       list: []
      //     },
      //     {
      //       span: 12,
      //       list: []
      //     }
      //   ],
      //   options: {
      //     gutter: 0, // 0-24
      //     justify: 'start', // start end center space-around space-between
      //     align: 'top' // top middle bottom
      //   }
      // },
      configTab: 'form', // field form
    }
  },
  created () {
    console.log('w-h', document.body.clientWidth, document.body.clientHeight)
  },
  mounted () {
  },
  computed: {
    _width () {
      if (this.width) {
        return this.width
      } else {
        return document.body.clientWidth + 'px'
      }
    },
    _modalBodyStyle () {
      if (this.modalBodyStyle) {
        return Object.assign(this.modalBodyStyle, { padding: '0px' })
      } else {
        return { width: document.body.clientWidth + 'px', height: document.body.clientHeight + 'px', padding: '0px' }
      }
    },
  },
  methods: {
    // 组件开始拖动时回调
    dragMoveStart (evt) {
      console.log('start-c', evt)
    },
    // 组件结束拖动时回调
    dragMoveEnd (evt) {
      console.log('end-c', evt)
    },
    // 组件拖动时回调
    dragMove () {
      return true
    },
    // 导入json
    btnImport () {

    },
    // 生成json
    btnJson () {

    },
    // 预览
    btnPreview () {

    },
    // 清空
    btnClear () {

    },
    // 保存
    btnSave () {

    },
    // 关闭
    btnClose () {
      this.visible = false
    },
    // tab页切换
    configSelect (val) {
      this.configTab = val
    },
  },
}
</script>
<style scoped lang="less">
 @primary-color: #409EFF;

  /*基本布局*/
  .m-layout-base {
    height: 100%;
    padding: 10px 0 10px 0;
  }
  /*左边栏容器：组件*/
  .m-component-container-left {
    padding: 10px 10px;
    overflow-y: auto;
    -ms-overflow-y: auto;

    /*左边栏组件标题*/
    .m-component-left-title {
      padding: 8px 2px;
      font-size: 13px;
    }

    /*列表*/
    ul {
      position: relative;
      overflow: hidden;
      padding: 0 0 10px;
      margin: 0;

      /*左边栏组件*/
      .m-component-left-item {
        font-size: 12px;
        display: block;
        width: 48%;
        line-height: 26px;
        position: relative;
        float: left;
        left: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 1.5% 1%;
        color: #333;
        border: 1px solid #F4F6FC;
        border-radius: 3px;
        cursor: move;
        background-color: #F4F6FC;
        padding: 1.5% 3%;

        &:hover {
          /*color: $primary-color;
          border: 1px dashed $primary-color;*/
          color:  #fff;
          border: 1px dashed  #fff;
          background-color: @primary-color;
        }
      }
    }
  }
  /*中间容器：按钮，设计部分*/
  .m-component-container-center {
    padding: 0 0;
    border-left: 1px solid #e0e0e0;
    border-right: 1px solid #e0e0e0;

    /*中间容器header：按钮部分*/
    .m-container-center-header {
      height: 50px;
      line-height: 50px;
      text-align: right;
      padding: 0 20px;
      border-bottom: solid 2px #e4e7ed;

      /*头部按钮*/
      .m-header-btn {
        margin: 0 10px;
        white-space: pre;
      }
    }

    /*中间容器body：设计部分*/
    .m-container-center-body {
      overflow-y: auto;
      background-color: #fafafa;
      height: calc(100% - 50px);
    }

  }
  /*右边栏容器：属性配置*/
  .m-component-container-right {
    padding: 0 0;

    /*右边栏-头部*/
    .m-component-container-right-header {
      height: 50px;
      border-bottom: solid 2px #e4e7ed;

      .m-config-tab {
        width: 50%;
        text-align: center;
        line-height: 50px;
        display: inline-block;
        cursor: pointer;
      }

      .active {
        border-bottom: 2px solid #409eff;
        font-weight: bold;
      }
    }

    .m-config-body {
      height: calc(100% - 50px);
      width: 100%;

     //.m-form-config-container

    }
  }
</style>
