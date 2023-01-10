<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="登录账户设置" name="first">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="姓名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">更新</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="个人详情" name="second">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="工号">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="手机">
            <el-input v-model="form.name" disabled></el-input>
          </el-form-item>
          <el-form-item label="活动时间">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.date1"
                style="width: 100%"
              ></el-date-picker> </el-col
          ></el-form-item>
          <el-form-item label="部门">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="聘用形式">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="正式" value="shanghai"></el-option>
              <el-option label="非正式" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">保存更新</el-button>
            <el-button>返回</el-button>
          </el-form-item>
        </el-form>
        <div>
          <p>基础信息</p>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="最高学历">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <!-- <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option> -->
              </el-select>
            </el-form-item>
            <el-form-item label="国家/地区">
              <el-select v-model="form.region" placeholder="请选择">
                <!-- <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option> -->
              </el-select>
            </el-form-item>
            <el-form-item label="护照号">
              <el-input
                v-model="form.name"
                placeholder="正规护照格式"
              ></el-input>
            </el-form-item>
            <el-form-item label="身份证号">
              <el-input
                v-model="form.name"
                placeholder="正规身份证格式"
              ></el-input>
            </el-form-item>
            <el-form-item label="籍贯">
              <el-input v-model="form.name" placeholder="籍贯地址"></el-input>
            </el-form-item>
            <el-form-item label="民族">
              <el-input v-model="form.name" placeholder="请输入民族"></el-input>
            </el-form-item>
            <el-form-item label="婚姻状况">
              <el-select v-model="form.region" placeholder="请选择">
                <!-- <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option> -->
              </el-select>
            </el-form-item>
            <el-form-item label="生日">
              <el-input v-model="form.name" placeholder="请输入民族"></el-input>
            </el-form-item>
            <el-form-item label="年龄">
              <el-input v-model="form.name" placeholder="请输入民族"></el-input>
            </el-form-item>
            <el-form-item label="星座">
              <el-select v-model="form.region" placeholder="请选择">
                <!-- <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option> -->
              </el-select>
            </el-form-item>
            <el-form-item label="血型">
              <el-select v-model="form.region" placeholder="请选择">
                <!-- <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option> -->
              </el-select>
            </el-form-item>
            <el-form-item label="户籍所在地">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="政治面貌">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="入党时间">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="form.date1"
                  style="width: 100%"
                ></el-date-picker> </el-col
            ></el-form-item>
            <el-form-item label="存档机构">
              <el-input v-model="form.name" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="子女状态">
              <el-input v-model="form.name" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="子女有无商业险">
              <el-radio-group v-model="form.resource">
                <el-radio label="有"></el-radio>
                <el-radio label="无"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="有无违法违纪状态">
              <el-input v-model="form.name" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="有无重大病史">
              <el-input v-model="form.name" placeholder="请输入"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div>
          <p>通讯信息</p>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="QQ">
              <el-input v-model="form.name" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="微信">
              <el-input v-model="form.name" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="现居住地">
              <el-input v-model="form.name" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="通讯地址">
              <el-input v-model="form.name" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="联系手机">
              <el-input v-model="form.name" placeholder="11位字符"></el-input>
            </el-form-item>
            <el-form-item label="个人邮箱">
              <el-input v-model="form.name" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="紧急联系人">
              <el-input v-model="form.name" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="紧急联系电话">
              <el-input v-model="form.name" placeholder="11位字符"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div>
          <p>账号信息</p>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="社保电脑号">
              <el-input v-model="form.name" placeholder="11位字符"></el-input>
            </el-form-item>
            <el-form-item label="公积金账号">
              <el-input v-model="form.name" placeholder="11位字符"></el-input>
            </el-form-item>
            <el-form-item label="银行卡号">
              <el-input v-model="form.name" placeholder="11位字符"></el-input>
            </el-form-item>
            <el-form-item label="开户行">
              <el-input
                v-model="form.name"
                placeholder="11位字符"
              ></el-input> </el-form-item
          ></el-form>
        </div>
        <div>
          <p>教育信息</p>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="学历类型">
              <el-select v-model="form.region" placeholder="请选择">
                <!-- <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option> -->
              </el-select>
            </el-form-item>
            <el-form-item label="毕业学校">
              <el-input v-model="form.name" placeholder="11位字符"></el-input>
            </el-form-item>
            <el-form-item label="入学时间">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="form.date1"
                  style="width: 100%"
                ></el-date-picker> </el-col
            ></el-form-item>
            <el-form-item label="毕业时间">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="form.date1"
                  style="width: 100%"
                ></el-date-picker> </el-col
            ></el-form-item>
            <el-form-item label="专业">
              <el-input v-model="form.name" placeholder="11位字符"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div>
          <p>从业信息</p>
          <el-form>
            <el-form-item label="上家公司">
              <el-input v-model="form.name" placeholder="11位字符"></el-input>
            </el-form-item>
            <el-form-item label="职称">
              <el-input v-model="form.name" placeholder="11位字符"></el-input>
            </el-form-item>
            <el-form-item label="有无竞业限制">
              <el-input v-model="form.name" placeholder="11位字符"></el-input>
            </el-form-item>
            <el-form-item label="备注">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">保存更新</el-button>
              <el-button>返回</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="岗位信息" name="third">
        <div>
          <p>基础信息</p>
          <el-form ref="form" :model="form" label-width="200px">
            <el-form-item label="岗位">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="转正状态">
              <el-select v-model="form.region" placeholder="请选择" disabled>
                <!-- <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option> -->
              </el-select>
            </el-form-item>
            <el-form-item label="职级">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="转正评价">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item label="汇报对象">
              <el-select v-model="form.region" placeholder="请选择">
                <!-- <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option> -->
              </el-select>
            </el-form-item>
            <el-form-item label="HRBP">
              <el-select v-model="form.region" placeholder="请选择">
                <!-- <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option> -->
              </el-select>
            </el-form-item>
            <el-form-item label="调整司龄(天)">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="首次参加工作时间">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="form.date1"
                  style="width: 100%"
                ></el-date-picker> </el-col
            ></el-form-item>
            <el-form-item label="调整工龄">
              <el-input
                v-model="form.name"
                disabled
                placeholder="0.00年"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div>
          <p>合同信息</p>
          <el-form ref="form" :model="form" label-width="200px">
            <el-form-item label="首次合同开始时间">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="form.date1"
                  style="width: 100%"
                ></el-date-picker> </el-col
            ></el-form-item>
            <el-form-item label="首次合同结束时间">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="form.date1"
                  style="width: 100%"
                ></el-date-picker> </el-col
            ></el-form-item>
            <el-form-item label="现合同开始时间">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="form.date1"
                  style="width: 100%"
                ></el-date-picker> </el-col
            ></el-form-item>
            <el-form-item label="现合同结束时间">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="form.date1"
                  style="width: 100%"
                ></el-date-picker> </el-col
            ></el-form-item>
            <el-form-item label="合同期限">
              <el-select v-model="form.region" placeholder="请选择">
                <!-- <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option> -->
              </el-select>
            </el-form-item>
            <el-form-item label="续签次数">
              <el-select v-model="form.region" placeholder="请选择">
                <!-- <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option> -->
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <div>
          <p>招聘信息</p>
          <el-form ref="form" :model="form" label-width="200px">
            <el-form-item label="其他招聘渠道">
              <el-select v-model="form.region" placeholder="请选择">
                <!-- <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option> -->
              </el-select>
            </el-form-item>
            <el-form-item label="招聘渠道">
              <el-select v-model="form.region" placeholder="请选择">
                <!-- <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option> -->
              </el-select>
            </el-form-item>
            <el-form-item label="社招/校招">
              <el-select v-model="form.region" placeholder="请选择">
                <!-- <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option> -->
              </el-select>
            </el-form-item>
            <el-form-item label="推荐企业/人">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">保存更新</el-button>
              <el-button>返回</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {},
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      form: {
        name: "",
        desc: ""
      }
    }
  },
  created() {},
  methods: {},
  mounted() {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.demo-ruleForm {
  width: 400px;
  height: 400px;
}
</style>
