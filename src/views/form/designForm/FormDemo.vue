<!--
<template>
  <div>
    <a-form
      :layout="layout"
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
      :form="form"
      @submit="handleSubmit"
    >
      &lt;!&ndash;单行文本框&ndash;&gt;
      <a-form-item label="Username" :labelCol="{ span: 3, offset: 0 }" :wrapperCol="{ span: 6, offset: 0 }">
        <a-input
          size="small"
          placeholder="文本框"
          v-decorator="['username', { rules: [{ required: true, message: 'Username is required!' }] }]"
        />
      </a-form-item>

      &lt;!&ndash;单行文本框&ndash;&gt;
      <a-form-item label="input" :labelCol="{ span: 3, offset: 0 }" :wrapperCol="{ span: 6, offset: 0 }">
        <a-input
          allowClear
          placeholder="文本框"
          v-decorator="['input', { rules: [{ required: true, message: 'Username is required!' }] }]"
        />
      </a-form-item>

      &lt;!&ndash;多行文本框&ndash;&gt;
      <a-form-item label="content">
        <a-textarea
          size="small"
          placeholder="多行文本"
          :rows="3"
          v-decorator="[
          'content',
          {
            rules: [{ required: true, message: 'content is required!' }],
          },
        ]"
        />
      </a-form-item>

      &lt;!&ndash;单选：圆点&ndash;&gt;
      <a-form-item label="Radio.Group" :labelCol="{ span: 3, offset: 0 }" :wrapperCol="{ span: 12, offset: 0 }">&lt;!&ndash; :labelCol="{ span: 6, offset: 0 }" :wrapperCol="{ span: 6, offset: 0 }"&ndash;&gt;
        <a-radio-group size="small" v-decorator="['radio-group', { initialValue: 'a' }]">
          <a-radio value="a">item 1</a-radio>
          <a-radio value="b">item 2</a-radio>
          <a-radio value="c">item 3</a-radio>
        </a-radio-group>
      </a-form-item>

      &lt;!&ndash;单选：按钮&ndash;&gt;
      <a-form-item label="Radio.Button" :labelCol="{ span: 3, offset: 0 }" :wrapperCol="{ span: 6, offset: 0 }">
        <a-radio-group size="small" v-decorator="['radio-button', { initialValue: 'a' }]">
          <a-radio-button value="a">item 1</a-radio-button>
          <a-radio-button value="b">item 2</a-radio-button>
          <a-radio-button value="c">item 3</a-radio-button>
        </a-radio-group>
      </a-form-item>

      &lt;!&ndash;多选&ndash;&gt;
      <a-form-item label="Checkbox.Group">
        <a-checkbox-group
          size="small"
          v-decorator="['checkbox-group', { initialValue: ['A', 'B'] }]"
          style="width: 100%;"
        >
          <a-row>
            <a-col :span="2">
              <a-checkbox value="A">A</a-checkbox>
            </a-col>
            <a-col :span="2">
              <a-checkbox disabled value="B">B</a-checkbox>
            </a-col>
            <a-col :span="2">
              <a-checkbox value="C">C</a-checkbox>
            </a-col>
            <a-col :span="2">
              <a-checkbox value="D">D</a-checkbox>
            </a-col>
            <a-col :span="2">
              <a-checkbox value="E">E</a-checkbox>
            </a-col>
          </a-row>
        </a-checkbox-group>
      </a-form-item>

      &lt;!&ndash;文本&ndash;&gt;
      <a-form-item label="Plain Text">
    <span class="ant-form-text">
      China
    </span>
      </a-form-item>

      &lt;!&ndash;下拉选-单选框&ndash;&gt;
      <a-form-item label="Select">&lt;!&ndash; :labelCol="{ span: 6, offset: 0 }" :wrapperCol="{ span: 6, offset: 0 }"&ndash;&gt;
        <a-select
          size="small"
          mode="default"
          showSearch
          placeholder="下拉选-单选框"
          :filterOption="(input, option) => (option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0)"
          v-decorator="[
        'select',
        { rules: [{ required: true, message: 'Please select some one!' }] },
      ]"
        >
          <a-select-option value="x">
            中国
          </a-select-option>
          <a-select-option value="y">
            美国
          </a-select-option>
          <a-select-option value="z">
            俄罗斯
          </a-select-option>
        </a-select>
      </a-form-item>

      &lt;!&ndash;下拉选-多选框&ndash;&gt;
      <a-form-item label="Select[multiple]">
        <a-select
          mode="multiple"
          placeholder="下拉选-多选框"
          :filterOption="(input, option) => (option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0)"
          v-decorator="['select-multiple', { rules: [{ required: true, message: 'Please select your favourite colors!', type: 'array' }] }]"
        >
          <a-select-option value="1">红色</a-select-option>
          <a-select-option value="2">绿色</a-select-option>
          <a-select-option value="3">蓝色</a-select-option>
        </a-select>
      </a-form-item>

      &lt;!&ndash;数字框&ndash;&gt;
      <a-form-item label="InputNumber">
        <a-input-number
          size="small"
          placeholder="数字框"
          v-decorator="['input-number', { initialValue: 3, rules: [{required: true, message: 'input a number'}] }]"
          :min="1"
          :max="10"
        />
        <span class="ant-form-text">machines</span>
      </a-form-item>

      &lt;!&ndash;日期框&ndash;&gt;
      <a-form-item label="DatePicker">&lt;!&ndash;v-bind="formItemLayout" &ndash;&gt;
        <a-date-picker
          size="small"
          placeholder="日期框"
          v-decorator="['date-picker', {rules: [{ required: true, message: 'Please select date!' }]}]"
        />
      </a-form-item>

      &lt;!&ndash;日期+时间框&ndash;&gt;
      <a-form-item label="DatePicker[showTime]">
        <a-date-picker
          placeholder="日期+时间框"
          v-decorator="['date-time-picker', {rules: [{ required: true, message: 'Please select datetime!' }]}]"
          show-time
          format="YYYY-MM-DD HH:mm:ss"
        />
      </a-form-item>

      &lt;!&ndash;时间框&ndash;&gt;
      <a-form-item label="TimePicker">
        <a-time-picker v-decorator="['time-picker', { rules: [{ required: true, message: 'Please select time!' }] }]" />
      </a-form-item>

      &lt;!&ndash;开关&ndash;&gt;
      <a-form-item label="Switch">
        <a-switch size="small" v-decorator="['switch', { valuePropName: 'checked', rules: [{required: true, message: 'unchecked'}] }]" />
      </a-form-item>

      &lt;!&ndash;评分&ndash;&gt;
      <a-form-item label="Rate">
        <a-rate
          size="small"
          v-decorator="['rate', { initialValue: 3.5, rules: [{required: true, message: 'rate is null'}] }]"
          allow-half
        />
      </a-form-item>

      &lt;!&ndash;滑块&ndash;&gt;
      <a-form-item label="Slider">
        <a-slider
          size="small"
          v-decorator="['slider2', { rules: [{required: true, message: 'slider is zero'}] }]"
          :marks="{ 0: '0', 20: '20', 40: '40', 60: '60', 80: '80', 100: '100' }"
        />
      </a-form-item>

      &lt;!&ndash;滑块&ndash;&gt;
      <a-form-item label="Slider">
        <a-slider
          v-decorator="['slider', { rules: [{required: true, message: 'slider is zero'}] }]"
          :marks="{ 0: '0', 20: '20', 40: '40', 60: '60', 80: '80', 100: '100' }"
          :tipFormatter="val => (val+'%')"
        />
      </a-form-item>

      &lt;!&ndash;上传文件&ndash;&gt;
      <a-form-item label="Upload" extra="extra">
        <a-upload
          size="small"
          v-decorator="[
        'upload',
        {
          valuePropName: 'fileList',
          getValueFromEvent: normFile,
        },
      ]"
          name="logo"
          action="/upload.do"
          list-type="picture"
        >
          <a-button> <a-icon type="upload" /> Click to upload </a-button>
        </a-upload>
      </a-form-item>

      &lt;!&ndash;拖拽上传文件&ndash;&gt;
      <a-form-item label="Dragger">
        <div class="dropbox">
          <a-upload-dragger
            size="small"
            v-decorator="[
          'dragger',
          {
            valuePropName: 'fileList',
            getValueFromEvent: normFile,
          },
        ]"
            name="files"
            action="/upload.do"
          >
            <p class="ant-upload-drag-icon">
              <a-icon type="inbox" />
            </p>
            <p class="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p class="ant-upload-hint">
              Support for a single or bulk upload.
            </p>
          </a-upload-dragger>
        </div>
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
        <a-button type="primary" html-type="submit">
          Submit
        </a-button>
      </a-form-item>
    </a-form>
    <div>
      <p>Align Top</p>
      <a-row type="flex" align="top">
        <a-col :span="4"><p class="height-100" style="height: 100px;">col-4</p></a-col>
        <a-col :span="4"><p class="height-50" style="height: 50px;">col-4</p></a-col>
        <a-col :span="4"><p class="height-120" style="height: 120px;">col-4</p></a-col>
        <a-col :span="4"><p class="height-80" style="height: 80px;">col-4</p></a-col>
      </a-row>

      <p>Align Center</p>
      <a-row type="flex" align="middle">
        <a-col :span="4"><p class="height-100" style="height: 100px;">col-4</p></a-col>
        <a-col :span="4"><p class="height-50" style="height: 50px;">col-4</p></a-col>
        <a-col :span="4"><p class="height-120" style="height: 120px;">col-4</p></a-col>
        <a-col :span="4"><p class="height-80" style="height: 80px;">col-4</p></a-col>
      </a-row>

      <p>Align Bottom</p>
      <a-row type="flex" align="bottom">
        <a-col :span="4"><p class="height-100" style="height: 100px;">col-4</p></a-col>
        <a-col :span="4"><p class="height-50" style="height: 50px;">col-4</p></a-col>
        <a-col :span="4"><p class="height-120" style="height: 120px;">col-4</p></a-col>
        <a-col :span="4"><p class="height-80" style="height: 80px;">col-4</p></a-col>
      </a-row>
    </div>
    <div>
      <p>sub-element align left</p>
      <a-row type="flex" justify="start">
        <a-col :span="4">col-4</a-col>
        <a-col :span="4">col-4</a-col>
        <a-col :span="4">col-4</a-col>
        <a-col :span="4">col-4</a-col>
      </a-row>

      <p>sub-element align center</p>
      <a-row type="flex" justify="center">
        <a-col :span="4">col-4</a-col>
        <a-col :span="4">col-4</a-col>
        <a-col :span="4">col-4</a-col>
        <a-col :span="4">col-4</a-col>
      </a-row>

      <p>sub-element align right</p>
      <a-row type="flex" justify="end">
        <a-col :span="4">col-4</a-col>
        <a-col :span="4">col-4</a-col>
        <a-col :span="4">col-4</a-col>
        <a-col :span="4">col-4</a-col>
      </a-row>

      <p>sub-element monospaced arrangement</p>
      <a-row type="flex" justify="space-between">
        <a-col :span="4">col-4</a-col>
        <a-col :span="4">col-4</a-col>
        <a-col :span="4">col-4</a-col>
        <a-col :span="4">col-4</a-col>
      </a-row>

      <p>sub-element align full</p>
      <a-row type="flex" justify="space-around">
        <a-col :span="4">col-4</a-col>
        <a-col :span="4">col-4</a-col>
        <a-col :span="4">col-4</a-col>
        <a-col :span="4">col-4</a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormDemo',
  data () {
    return {
      form: this.$form.createForm(this, { name: 'demo' }),
      layout: 'horizontal', // 表单布局：'horizontal'|'vertical'|'inline'
      labelCol: {span: 6, offset: 0}, // 标签布局
      wrapperCol: {span: 12, offset: 0}, // 控件布局
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    normFile(e) {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    },
  },
}
</script>

<style scoped lang="less">

</style>-->


<template>
  <div>
    <a-form
      :layout="formLayout"
    >
      <a-form-item
        label="Form Layout"
      >
        <a-radio-group default-value="horizontal" @change="handleFormLayoutChange">
          <a-radio-button value="horizontal">
            Horizontal
          </a-radio-button>
          <a-radio-button value="vertical">
            Vertical
          </a-radio-button>
          <a-radio-button value="inline">
            Inline
          </a-radio-button>
        </a-radio-group>
      </a-form-item>
      <a-form-item
        label="Field A"
      >
        <a-input placeholder="input placeholder" />
      </a-form-item>
      <a-form-item
        label="Field B"
      >
        <a-input placeholder="input placeholder" />
      </a-form-item>
      <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
        <a-button type="primary">
          Submit
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formLayout: 'horizontal',
      };
    },
    computed: {
      formItemLayout() {
        const { formLayout } = this;
        return formLayout === 'horizontal'
          ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
          : {};
      },
      buttonItemLayout() {
        const { formLayout } = this;
        return formLayout === 'horizontal'
          ? {
            wrapperCol: { span: 14, offset: 4 },
          }
          : {};
      },
    },
    methods: {
      handleFormLayoutChange(e) {
        this.formLayout = e.target.value;
      },
    },
  };
</script>