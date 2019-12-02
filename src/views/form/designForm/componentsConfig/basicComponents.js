export const basicComponents = [
  {
    type: 'input',
    name: '单行文本框',
    icon: 'ld-form-input',
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
  {
    type: 'textarea',
    name: '多行文本框',
    icon: 'ld-form-textarea',
    options: {
      label: '多行文本框',
      name: 'textarea',
      placeholder: '多行文本框',
      rows: 6, // 文本域行数
      labelCol: { span: 12, offset: 0 }, // 标签宽度，空格
      wrapperCol: { span: 12, offset: 0 }, // 输入框宽度，空格
      rules: [
        { required: true, message: 'textarea is required!' },
      ]
    }
  },
  {
    type: 'radio',
    name: '单选框',
    icon: 'ld-form-radio',
    options: {
      label: '单选框',
      name: 'radio',
      type: 'button', // button default
      labelCol: { span: 12, offset: 0 }, // 标签宽度，空格
      wrapperCol: { span: 12, offset: 0 }, // 输入框宽度，空格
      data: [
        { text: 'A', value: 1, checked: true, disabled: false },
        { text: 'B', value: 2, checked: false, disabled: false },
        { text: 'C', value: 3, checked: false, disabled: false },
      ]
    }
  },
  {
    type: 'checkbox',
    name: '多选框',
    icon: 'ld-form-checkbox',
    options: {
      label: '多选框',
      name: 'checkbox',
      labelCol: { span: 12, offset: 0 }, // 标签宽度，空格
      wrapperCol: { span: 12, offset: 0 }, // 输入框宽度，空格
      colSpan: 2, // 每项列宽
      data: [
        { text: 'A', value: 1, checked: true, disabled: true },
        { text: 'B', value: 2, checked: false, disabled: false },
        { text: 'C', value: 3, checked: true, disabled: false },
        { text: 'D', value: 4, checked: false, disabled: false },
        { text: 'E', value: 5, checked: false, disabled: false },
      ]
    }
  },
  {
    type: 'select',
    name: '下拉选择框',
    icon: 'ld-form-select',
    options: {
      label: '下拉选择框',
      name: 'select',
      placeholder: '下拉选择框',
      labelCol: { span: 12, offset: 0 }, // 标签宽度，空格
      wrapperCol: { span: 12, offset: 0 }, // 输入框宽度，空格
      rules: [
        { required: true, message: 'select is required!', type: 'array' },
      ],
      mode: 'default', // 'default' | 'multiple' | 'tags' | 'combobox'
      showSearch: true,
      remote: false, // true取远程数据；false取data数据
      remoteUrl: '/dist/dept',
      valueLabel: 'deptId',
      textLabel: 'deptName',
      data: [
        { text: 'A', value: 1, checked: true, disabled: true },
        { text: 'B', value: 2, checked: false, disabled: false },
        { text: 'C', value: 3, checked: true, disabled: false },
        { text: 'D', value: 4, checked: false, disabled: false },
        { text: 'E', value: 5, checked: false, disabled: false },
      ]
    }
  },
  {
    type: 'input-number',
    name: '数字框',
    icon: 'ld-form-input-num',
    options: {
      label: '数字框',
      name: 'input_number',
      labelCol: { span: 12, offset: 0 }, // 标签宽度，空格
      wrapperCol: { span: 12, offset: 0 }, // 输入框宽度，空格
      initialValue: 1,
      suffixText: '%',
      min: 0,
      max: 10,
      rules: [
        { required: true, message: 'select is required!', type: 'array' },
      ],
    }
  },
  {
    type: 'datetime',
    name: '日期选择器',
    icon: 'ld-form-datetime',
    options: {
      type: 'datetime', // date, datetime
      label: '日期选择器',
      name: 'datetime',
      labelCol: { span: 12, offset: 0 }, // 标签宽度，空格
      wrapperCol: { span: 12, offset: 0 }, // 输入框宽度，空格
      rules: [
        { required: true, message: 'datetime is required!' },
      ],
      showTime: true,
      format: 'YYYY-MM-DD HH:mm:ss'
    }
  },
  {
    type: 'time',
    name: '时间选择器',
    icon: 'ld-form-time',
    options: {
      label: '时间选择器',
      name: 'time',
      labelCol: { span: 12, offset: 0 }, // 标签宽度，空格
      wrapperCol: { span: 12, offset: 0 }, // 输入框宽度，空格
      rules: [{ required: true, message: 'time is required!' }],
    }
  },
  {
    type: 'switch',
    name: '开关',
    icon: 'ld-form-switch',
    options: {
      label: '开关',
      name: 'switch',
      labelCol: { span: 12, offset: 0 }, // 标签宽度，空格
      wrapperCol: { span: 12, offset: 0 }, // 输入框宽度，空格
      rules: [{ required: true, message: 'switch is required!' }]
    }
  },
  {
    type: 'rate',
    name: '评分',
    icon: 'ld-form-rate',
    options: {
      label: '评分',
      name: 'rate',
      labelCol: { span: 12, offset: 0 }, // 标签宽度，空格
      wrapperCol: { span: 12, offset: 0 }, // 输入框宽度，空格
      count: 5,
      initialValue: 3.5,
      allowHalf: true,
      rules: [{ required: true, message: 'rate is required!' }] // 失效
    }
  },
  {
    type: 'slider',
    name: '滑块',
    icon: 'ld-form-sliders',
    options: {
      label: '滑块',
      name: 'slider',
      labelCol: { span: 12, offset: 0 }, // 标签宽度，空格
      wrapperCol: { span: 12, offset: 0 }, // 输入框宽度，空格
      suffixText: '%',
      min: 0,
      max: 100,
      marks: { 0: '0', 20: '20', 40: '40', 60: '60', 80: '80', 100: '100' }
    }
  },
  {
    type: 'color',
    name: '颜色选择器',
    icon: 'ld-form-color',
    options: {

    }
  },
]
