<template>
  <a-form-item
    class="widget-view"
    :class="{active: selectItem.key === element.key, 'is_req': element.options.required}"
    v-if="element && element.key && element.options"
    :label="element.options.label"
    :label-col="{ span: element.options.labelCol && element.options.labelCol.span ? element.options.labelCol.span : data.config.labelCol.span, offset: element.options.labelCol && element.options.labelCol.offset ? element.options.labelCol.offset : data.config.labelCol.offset }"
    :wrapper-col="{ span: element.options.wrapperCol && element.options.wrapperCol.span ? element.options.wrapperCol.span : data.config.wrapperCol.span , offset: element.options.wrapperCol && element.options.wrapperCol.offset ? element.options.wrapperCol.offset : data.config.wrapperCol.offset }"
  >
    <!--单行文本框-->
    <template v-if="element && element.type === 'input'">
      <a-input
        allowClear
        :placeholder="element.options.placeholder?element.options.placeholder:''"
        :size="data.config.size?data.config.size:'default'"
        :disabled="element.options.disabled"
        v-decorator="[
         element.options.name,
         {
           initialValue: element.options.initialValue?element.options.initialValue:'',
           rules: element.options.required?[{ required: true, message: element.options.message?element.options.message:'required' }]: []
         }
        ]"
      />
    </template>
    <!--多行文本框-->
    <template v-if="element && element.type === 'textarea'">
      <a-textarea
        :rows="element.options.rows?element.options.rows:3"
        :placeholder="element.options.placeholder?element.options.placeholder:''"
        :size="data.config.size?data.config.size:'default'"
        :disabled="element.options.disabled"
        v-decorator="[
         element.options.name,
         {
           initialValue: element.options.initialValue?element.options.initialValue:'',
           rules: element.options.required?[{ required: true, message: element.options.message?element.options.message:'required' }]: []
         }
        ]"
      />
    </template>
    <!--单选框-->
    <template v-if="element && element.type === 'radio'">
      <a-radio-group
        v-decorator="[
         element.options.name,
         {
           initialValue: element.options.initialValue?element.options.initialValue:'',
           rules: element.options.required?[{ required: true, message: element.options.message?element.options.message:'required' }]: []
         }
        ]"
      >
        <!--单选：按钮-->
        <template v-if="element.options.type === 'button'">
          <a-radio-button v-for="(radioData, radioIndex) in element.options.data" :key="radioIndex" :value="radioData.value" :size="data.config.size?data.config.size:'default'" :disabled="radioData.disabled">{{ radioData.text }}</a-radio-button>
        </template>
        <!--单选：圆点-->
        <template v-else><!--default-->
          <a-radio v-for="(radioData, radioIndex) in element.options.data" :key="radioIndex" :value="radioData.value" :disabled="radioData.disabled">{{ radioData.text }}</a-radio>
        </template>
      </a-radio-group>
    </template>
    <!--多选-->
    <template v-if="element && element.type === 'checkbox'">
      <a-checkbox-group
        style="width: 100%;"
        v-decorator="[
         element.options.name,
         {
           initialValue: element.options.initialValue?element.options.initialValue:[],
           rules: element.options.required?[{ required: true, message: element.options.message?element.options.message:'required' }]: []
         }
        ]"
      >
        <a-row>
          <a-col
            v-for="(checkboxData, checkboxIndex) in element.options.data"
            :key="checkboxIndex"
            :span="element.options.colSpan?element.options.colSpan:2"
          >
            <a-checkbox :value="checkboxData.value" :disabled="checkboxData.disabled">{{ checkboxData.text }}</a-checkbox>
          </a-col>
        </a-row>
      </a-checkbox-group>
    </template>
    <!--下拉选-->
    <template v-if="element && element.type === 'select'">
      <!--下拉选-单选框、多选框-->
      <a-select
        :mode="element.options.mode?element.options.mode:'default'"
        showSearch
        :filterOption="(input, option) => (option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0)"
        :placeholder="element.options.placeholder?element.options.placeholder:''"
        :size="data.config.size?data.config.size:'default'"
        :disabled="element.options.disabled"
        v-decorator="[
         element.options.name,
         {
           initialValue: element.options.initialValue?element.options.initialValue:'',
           rules: element.options.required?[{ required: true, message: element.options.message?element.options.message:'required' }]: []
         }
        ]"
      >
        <!--TODO 配置数据，远程数据暂未处理-->
        <template v-if="!element.options.remote">
          <a-select-option
            v-for="(selectData, selectIndex) in element.options.data"
            :key="selectIndex"
            :value="selectData.value"
          >
            {{ selectData.text }}
          </a-select-option>
        </template>
      </a-select>
    </template>
    <!--数字框-->
    <template v-if="element && element.type === 'input-number'">
      <a-input-number
        :placeholder="element.options.placeholder?element.options.placeholder:''"
        :size="data.config.size?data.config.size:'default'"
        :disabled="element.options.disabled"
        v-decorator="[
         element.options.name,
         {
           initialValue: element.options.initialValue?element.options.initialValue:'',
           rules: element.options.required?[{ required: true, message: element.options.message?element.options.message:'required' }]: []
         }
        ]"
        :min="element.options.min?element.options.min:0"
        :max="element.options.max?element.options.max:10"
      />
      <span v-show="element.options.suffixText" class="ant-form-text">{{ element.options.suffixText }}</span>
    </template>
    <!--日期时间框-->
    <template v-if="element && element.type === 'datetime'">
      <a-date-picker
        :placeholder="element.options.placeholder?element.options.placeholder:''"
        :size="data.config.size?data.config.size:'default'"
        :disabled="element.options.disabled"
        v-decorator="[
         element.options.name,
         {
           initialValue: element.options.initialValue?element.options.initialValue:'',
           rules: element.options.required?[{ required: true, message: element.options.message?element.options.message:'required' }]: []
         }
        ]"
        :show-time="element.options.showTime"
        :format="element.options.format?element.options.format:'YYYY-MM-DD HH:mm:ss'"
      />
    </template>
    <!--时间框-->
    <template v-if="element && element.type === 'time'">
      <a-time-picker
        :placeholder="element.options.placeholder?element.options.placeholder:''"
        :size="data.config.size?data.config.size:'default'"
        :disabled="element.options.disabled"
        v-decorator="[
         element.options.name,
         {
           initialValue: element.options.initialValue?element.options.initialValue:'',
           rules: element.options.required?[{ required: true, message: element.options.message?element.options.message:'required' }]: []
         }
        ]"
      />
    </template>
    <!--开关-->
    <template v-if="element && element.type === 'switch'">
      <a-switch
        :size="data.config.size?data.config.size:'default'"
        :disabled="element.options.disabled"
        v-decorator="[
         element.options.name,
         {
           initialValue: element.options.initialValue?element.options.initialValue:false,
           rules: element.options.required?[{ required: true, message: element.options.message?element.options.message:'required' }]: []
         }
        ]"
      />
    </template>
    <!--评分-->
    <template v-if="element && element.type === 'rate'">
      <a-rate
        :disabled="element.options.disabled"
        v-decorator="[
         element.options.name,
         {
           initialValue: element.options.initialValue?element.options.initialValue:0,
           rules: element.options.required?[{ required: true, message: element.options.message?element.options.message:'required' }]: []
         }
        ]"
        :allow-half="element.options.allowHalf"
      />
    </template>
    <!--滑块-->
    <template v-if="element && element.type === 'slider'">
      <a-slider
        :disabled="element.options.disabled"
        v-decorator="[
         element.options.name,
         {
           initialValue: element.options.initialValue?element.options.initialValue:0,
           rules: element.options.required?[{ required: true, message: element.options.message?element.options.message:'required' }]: []
         }
        ]"
        :marks="element.options.marks?element.options.marks:{}"
        :tipFormatter="val => (val+element.options.suffixText?element.options.suffixText:'')"
      />
    </template>
    <!--颜色选择器-->
    <template v-if="element && element.type === 'color'">

    </template>
    <!--其它-->
    <template v-if="element && element.type === '---------'">

    </template>

    <div class="widget-view-action" v-if="selectItem.key === element.key">
      <i class="iconfont icon-icon_clone" @click.stop="itemClone(index)"></i>
      <i class="iconfont icon-trash" @click.stop="itemDelete(index)"></i>
    </div>

    <div class="widget-view-drag" v-if="selectItem.key === element.key">
      <i class="iconfont icon-drag drag-widget"></i>
    </div>
  </a-form-item>
</template>

<script>
import moment from 'moment'
export default {
  name: 'CustomizeFormItem',
  components: {},
  props: ['data', 'element', 'index', 'select'],
  data () {
    return {
      moment,
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