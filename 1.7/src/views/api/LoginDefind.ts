 const  FormRules = {
    phone: [
        {
            required: true, min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur'
        }
    ],
    code: [
        {
            required: true, message: '验证码不能为空', trigger: 'blur'
        }
    ],
    pwd: [
        {
            required: true, message: '密码不能为空', trigger: 'blur'
        }
    ],
    affirm: [
        {
            required: true, message: '密码不能为空', trigger: 'blur'
        }
    ],
}
export default FormRules;