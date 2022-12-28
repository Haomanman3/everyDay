/**交叉类型 */
interface use {
    name: string;
    age: number;
}
interface per {
    sex: number
}
type allInfo = use & per
let person: use & per = { name: "张三", age: 18, sex: 1 }

/**联合类型 */
let allType: number | string
allType = 1
allType = "aa"
// allType = false
/**类型断言 */
let someValue:any
someValue=123
someValue="dd"
let someValueLength=(<string>someValue).length
// as
let someValue1:any
someValue1=123
someValue1="dd"
let someValueLength1=(someValue1 as string).length