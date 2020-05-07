

module.exports = {
  dirs: [
    {
      name: "Template",
      desc: "创建组件",
      prompts: [{
        type: "list",
        name: 'name',
        choices: ["hooks", "taro"],
        message: '请选择',
      },
      {
        type: "input",
        name: 'route',
        message: '文件夹名称',
      },
      {
        type: "input",
        name: 'file',
        message: '新增文件的名字',
        default: 'index'
      },
      {
        type: "input",
        name: 'component',
        message: '复制文件的名字',
      },
      ],
      actions: function (data) {
        if (!data.component) {
          data.component = data.file
        }
        return [
          {
            type: 'add',
            path: '../src/{{route}}/{{file}}/{{file}}.js',
            templateFile: '{{name}}/{{component}}.js'
          },
        ]
      }
    },
    {
      name: "Api",
      desc: "接口",
      prompts: [{
        type: "input",
        name: 'name',
        message: '输入网关名称',
      }],
      actions: function () {
        return [
          {
            type: 'add',
            path: '../src/api/modules/{{name}}.js',
            templateFile: 'Api/index.js'
          },
        ]
      }
    }
  ]
}




