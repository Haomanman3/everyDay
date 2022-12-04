var list = [{
        "id": 1,
        name: '张三',
        sex: 1,
        checked: false
    },
    {
        "id": 2,
        name: '李四',
        sex: 0,
        checked: false
    },
    {
        "id": 3,
        name: '王五',
        sex: 1,
        checked: false
    },
    {
        "id": 4,
        name: '赵六',
        sex: 1,
        checked: false
    },
    {
        "id": 5,
        name: '田七',
        sex: 0,
        checked: false
    },
]
var ul = document.querySelector('.ul') //获取列表
var text = document.querySelector('.text') //获取选中的人
var solo = document.querySelector('.solo') //获取单人点名按钮
var double = document.querySelector('.double') //获取双人点名按钮
var boy = document.querySelector('.boy') //获取男生点名按钮
var girl = document.querySelector('.girl') //获取女生点名按钮
var footer = document.querySelector('footer') //获取底部

var stuList =list //定义所有人数
// 定时器，每一秒调用一次
setInterval(() => {
    addtimes()
}, 1000)

function addtimes() {
    var addtime = times();
    var time1 = document.querySelector('.time') //获取时间
    time1.innerText = addtime
}
addtimes()

// 封装日期
function times() {
    var date = new Date();
    var year = date.getFullYear(); //获取年份
    var month = date.getMonth() + 1; //获取月份
    month = month < 10 ? '0' : month
    var day = date.getDate(); //获取日
    var hour = date.getHours(); //获取时
    hour = hour < 10 ? '0' : hour
    var minute = date.getMinutes(); //获取分
    minute = minute < 10 ? '0' : minute
    var second = date.getSeconds(); //获取秒
    second = second < 10 ? '0' : second
    return year + '-' + month + '-' + day + ' ' + hour + ":" + minute + ":" + second
}
// console.log(times());
// 渐变颜色随机数
function random() {
    var color = "-webkit-linear-gradient(right, rgb(".concat(randomParams(), "), rgb(").concat(randomParams())
    return color
}
// 颜色随机数
function randomParams() {
    var rgb = Math.floor(Math.random() * 256)
    return rgb
}
// 封装随机数
function ranfn(list) {
    var max = list
    var min = 0
    return Math.floor(Math.random() * (max - min) + min)
}
// 单人选择
solo.onclick = function (e) {
    if (e.target.innerText == '停止') {
        solo.innerText = "单人点名"
        let index = ranfn(stuList.length)
        console.log(index);
        text.innerText = stuList[index].name
        
        text.style.backgroundImage = random()

    } else {
        solo.innerText = "停止"
    }
}

//双人点名
double.onclick = function (e) {
    if (e.target.innerText == "停止") {
        double.innerHTML = "双人点名"
        let left = ranfn(stuList.length)
        let right = ranfn(stuList.length)
        text.innerText = stuList[left].name + '' + stuList[right].name
        text.style.backgroundImage = random()
    } else {
        double.innerText = '停止'
    }

}
var boys = [] //男生数据
var girls = [] //女生数据
getBoy()

function getBoy() {
    boys = stuList.filter(item => {
        return item.sex == 1 //过滤男生数据
    })
}
getgirls()

function getgirls() {
    girls = stuList.filter(item => {
        return item.sex == 0 //过滤女生数据
    })
}

// 男生点名

boy.onclick = function (e) {
    if (e.target.innerText == "停止") {
        boy.innerText = "男生点名"
        let index = ranfn(boys.length)
        text.innerText = boys[index].name
        text.style.backgroundImage = random()
    }else {
        boy.innerText = "停止"
    }
}
//女生点名
girl.onclick = function(e) {
    if (e.target.innerText == "停止") {
        girl.innerText = "女生点名"
        let index = ranfn(girls.length)
        text.innerText = girls[index].name
        text.style.backgroundImage = random()
    }else {
        girl.innerText = "停止"
    }
}