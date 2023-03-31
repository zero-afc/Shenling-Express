export const loginValidate = {
  account: {
    rules: [
      { required: true, errorMessage: '请输入账号', },
      {
        validateFunction(_ : any, value : any, data : any, callback : any) {
          if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(value)) callback('账号或密码输入有误')
          return true
        }
      }
    ]
  },
  password: {
    rules: [
      { required: true, errorMessage: '请输入密码', },
      {
        minLength: 6,
        maxLength: 16,
        errorMessage: '密码长度应在 {minLength} 到 {maxLength} 个字符',
      }
    ]
  }
}