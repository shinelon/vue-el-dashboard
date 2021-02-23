module.exports = [{
    name: '基础',
    icon: 'flag',
    id: 'basic',
    sub: [{
      name: 'Layout 布局',
      componentName: 'BasicLayout'
    }, {
      name: 'Container 布局容器',
      componentName: 'BasicContainer'
    }]
  }, {
    name: 'Form',
    id: 'form',
    icon: 'cogs',
    sub: [{
      name: 'Radio 单选框',
      componentName: 'FormRadio'
    }, {
      name: 'Checkbox 多选框',
      componentName: 'FormCheckbox'
    }]
  }, {
    name: 'Table',
    id: 'table',
    icon: 'cogs',
    sub: [{
      name: 'TableBase',
      componentName: 'TableBase'
    }, {
      name: 'TablePage',
      componentName: 'TablePage'
    }]
  }


]