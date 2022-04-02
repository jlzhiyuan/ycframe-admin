// var zh = JSON.parse(localStorage.getItem('zh'))
// var en = JSON.parse(localStorage.getItem('en'))
const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    // 'zh-CN': zh,   // 中文语言包
    // 'en-US': en    // 英文语言包
    'zh-CN': {
      i18nView: {
        title: "切换语言",
        note: "本项目国际化基于 vue-i18n",
        default: "默认按钮",
        primary: "主要按钮",
        success: "成功按钮",
        info: "信息按钮",
        warning: "警告按钮",
        danger: "危险按钮"
      }
    },
    'en-US': {
      i18nView: {
        title: "Switch Language",
        note: "The internationalization of this project is based on vue-i18n",
        default: "default",
        primary: "primary",
        success: "success",
        info: "info",
        warning: "warning",
        danger: "danger"
      }
    }
  }
})
