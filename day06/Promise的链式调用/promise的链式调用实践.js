const fs = require("fs");
function getPeach(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./为学.md',(err,data)=>{
            if(err) reject(err);
            resolve(data)
            // reject('我是为学的错误信息')
        })
    })
}
function getFeng(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./起风了.md',(err,data)=>{
            if(err) reject(err);
            resolve(data)
            // reject('我是起风了的错误信息')
        })
    })
}

function getCan(){
    return new Promise((resolve, reject) => {
        fs.readFile('./可能.md',(err,data)=>{
            if(err) reject(err);
            resolve(data)
            // reject('我是可能的错误信息')
        })
    })
}

getPeach().then((res)=>{
    console.log(res.toString(),'32');
    // return res.toString();
    
}).then(()=>{
    getFeng().then((res) => {
        console.log(res.toString(),'37');
        // return res.toString();
    })
}).then(()=>{
    getCan().then((res) => {
        console.log(res.toString(),'42');
        // return res.toString();
    })
})



// 第二遍

// const fs = require("fs");
// function getPeach(){
//     return new Promise((resolve,reject)=>{
//         fs.readFile('./为学.md',(err,data)=>{
//             if(err) reject(err);
//             resolve(data)
//             // reject('我是为学的错误信息')
//         })
//     })
// }
// function getFeng(){
//     return new Promise((resolve,reject)=>{
//         fs.readFile('./起风了.md',(err,data)=>{
//             if(err) reject(err);
//             resolve(data)
//             // reject('我是起风了的错误信息')
//         })
//     })
// }

// function getCan(){
//     return new Promise((resolve, reject) => {
//         fs.readFile('./可能.md',(err,data)=>{
//             if(err) reject(err);
//             resolve(data)
//             // reject('我是可能的错误信息')
//         })
//     })
// }

// getPeach().then((res)=>{
//     console.log(res.toString(),'82');
//     // return res.toString();
    
// }).then(()=>{
//     getFeng().then((res) => {
//         console.log(res.toString(),'87');
//         // return res.toString();
//     })
// }).then(()=>{
//     getCan().then((res) => {
//         console.log(res.toString(),'92');
//         // return res.toString();
//     })
// })


// 第三遍

// const fs = require("fs");
// function getPeach(){
//     return new Promise((resolve,reject)=>{
//         fs.readFile('./为学.md',(err,data)=>{
//             if(err) reject(err);
//             resolve(data)
//             // reject('我是为学的错误信息')
//         })
//     })
// }
// function getFeng(){
//     return new Promise((resolve,reject)=>{
//         fs.readFile('./起风了.md',(err,data)=>{
//             if(err) reject(err);
//             resolve(data)
//             // reject('我是起风了的错误信息')
//         })
//     })
// }

// function getCan(){
//     return new Promise((resolve, reject) => {
//         fs.readFile('./可能.md',(err,data)=>{
//             if(err) reject(err);
//             resolve(data)
//             // reject('我是可能的错误信息')
//         })
//     })
// }

// getPeach().then((res)=>{
//     console.log(res.toString(),'131');
//     // return res.toString();
    
// }).then(()=>{
//     getFeng().then((res) => {
//         console.log(res.toString(),'136');
//         // return res.toString();
//     })
// }).then(()=>{
//     getCan().then((res) => {
//         console.log(res.toString(),'141');
//         // return res.toString();
//     })
// })


