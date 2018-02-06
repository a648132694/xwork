export default {
  encryption: {
    MD5: {
      input: '',
      result: 'not result.',
    },
    SHA: {
      iconType: 'SHA1',
      input: '',
      result: '',
    },
    tabPosition: '1',
  },
  layout: {
    menuSelectKeys: [],
  },
  settings: {
    functions: [
      // {
      //   name: '收藏项',
      //   key: 'favourite',
      //   iconType: 'code-o',
      //   status: true,
      //   canSwitch: true,
      //   children: [
      //   ],
      // },
      {
        name: '加密',
        key: 'encryption',
        iconType: 'upload',
        status: true,
        canSwitch: true,
        children: [
          { name: 'MD5', status: true },
          { name: 'SHA', status: true },
        ],
      },
      {
        name: '格式化',
        key: 'formatting',
        iconType: 'video-camera',
        status: true,
        canSwitch: true,
        children: [
          { name: 'JSON', status: true },
          { name: '代码', status: true },
        ],
      },
      {
        name: '文字处理',
        key: 'text_progressing',
        iconType: 'user',
        status: true,
        canSwitch: true,
        children: [
          { name: '去除空格', status: true },
          { name: 'SHA', status: true },
        ],
      },
      // {
      //   name: '设置',
      //   key: 'settings',
      //   iconType: 'setting',
      //   status: true,
      //   canSwitch: false,
      //   children: [
      //     { name: '功能模块', status: true },
      //     { name: '测试项目', status: true },
      //   ],
      // },
    ],
  },
};
