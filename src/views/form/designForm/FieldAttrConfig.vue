<template>
  <div class="m-field-config-container">
    <template v-if="data && data.key">
      <template v-if="basicType.indexOf(data.type) > -1">
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
        <div class="m-field-config-item" v-if="false"><!--TODO 此处不单独设置组件尺寸，可以在表单属性中配置-->
          <p class="m-field-config-label">组件尺寸</p>
          <a-radio-group v-model="data.options.size" buttonStyle="solid">
            <a-radio-button value="small">small</a-radio-button>
            <a-radio-button value="default">default</a-radio-button>
            <a-radio-button value="large">large</a-radio-button>
          </a-radio-group>
        </div>
        <div class="m-field-config-item">
          <p class="m-field-config-label">标签配置</p>
          宽度：<a-input-number style="width: 60px;" v-model="data.options.labelCol.span" :min="0" :max="24" :step="1"/>
          &nbsp;&nbsp;
          间隔：<a-input-number style="width: 60px;" v-model="data.options.labelCol.offset" :min="0" :max="24" :step="1"/>
        </div>
        <div class="m-field-config-item">
          <p class="m-field-config-label">控件配置</p>
          宽度：<a-input-number style="width: 60px;" v-model="data.options.wrapperCol.span" :min="0" :max="24" :step="1"/>
          &nbsp;&nbsp;
          间隔：<a-input-number style="width: 60px;" v-model="data.options.wrapperCol.offset" :min="0" :max="24" :step="1"/>
        </div>
      </template>
      <template v-if="higherType.indexOf(data.type) > -1"></template>
      <template v-if="layoutType.indexOf(data.type) > -1">
        <div class="m-field-config-item" v-if="['grid'].indexOf(data.type) > -1">
          <p class="m-field-config-label">水平排列方式</p>
          <a-radio-group v-model="data.options.justify" buttonStyle="solid">
            <a-radio-button value="start" title="左对齐">start</a-radio-button><!-- style="padding: 0 6px;"-->
            <a-radio-button value="center" title="水平居中">center</a-radio-button>
            <a-radio-button value="end" title="右对齐">end</a-radio-button>
            <a-radio-button value="space-around" title="两端对齐">around</a-radio-button>
            <a-radio-button value="space-between" title="分散对齐">between</a-radio-button>
          </a-radio-group>
        </div>
        <div class="m-field-config-item" v-if="['grid'].indexOf(data.type) > -1">
          <p class="m-field-config-label">垂直排列方式</p>
          <a-radio-group v-model="data.options.align" buttonStyle="solid">
            <a-radio-button value="top" title="顶部对齐">top</a-radio-button>
            <a-radio-button value="middle" title="垂直居中">middle</a-radio-button>
            <a-radio-button value="bottom" title="底部对齐">bottom</a-radio-button>
          </a-radio-group>
        </div>
        <div class="m-field-config-item" v-if="['grid'].indexOf(data.type) > -1">
          <p class="m-field-config-label">栅格间隔</p>
          <a-input-number style="" v-model="data.options.gutter" :min="0" :max="24" :step="1"/>
        </div>
        <div class="m-field-config-item" v-if="['grid'].indexOf(data.type) > -1">
          <p class="m-field-config-label">列配置</p>
          <draggable
            tag="ul"
            :list="data.columns"
            v-bind="{group:{ name:'options'}, ghostClass: 'ghost', handle: '.drag-column'}"
            handle=".drag-column"
          >
            <li v-for="(item, index) in data.columns" :key="index" >
              <a-button type="primary" shape="circle" icon="drag" class="drag-column"/>
              <a-input-number class="m-input-number" v-model="item.span" :min="0" :max="24" :step="1"/>
              <a-button type="danger" shape="circle" icon="minus" @click="removeColumn(index)"/>
            </li>
          </draggable>
          <div class="">
            <a @click="addColumn">添加列</a>
          </div>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: 'FieldAttrConfig',
  props: ['data'],
  data () {
    return {
      basicType: ['input', 'textarea', 'radio', 'checkbox', 'select', 'input-number', 'datetime', 'time', 'switch', 'rate', 'slider', 'color'],
      higherType: ['custom', 'image-upload', 'file-upload', 'editor', 'custom', 'button', 'text', 'hr'],
      layoutType: ['grid', 'card', 'tabs'],
    }
  },
  mounted () {

  },
  watch: {

  },
  methods: {
    // 删除列
    removeColumn (index) {
      // console.log('removeColumn', index)
      this.data.columns.splice(index, 1)
    },
    // 添加列
    addColumn () {
      this.data.columns.push({ span: 2, list: [] })
    }
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

      ul {
        margin-bottom: 5px;
        padding: 0px;

        li {
          margin-bottom: 5px;
          &.ghost {
            background-color: #fff;
            border: 1px dashed #F56C6C;
          }

          button {
            margin: 0px 10px;
          }

        }

      }
    }
  }
</style>