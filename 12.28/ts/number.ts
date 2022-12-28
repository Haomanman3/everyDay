/***number类型 */
let num1: number = 1
let num2: number = 2
let sum: number = num1 + num2
/***string类型 */
let str1: string = "哈哈哈"
let str2: string = "你好"
let str: string = str1 + str2
/***boolean类型*/
let bool:boolean=true 
let array:number[] = [1,2,3]
let array1:string[]=['1','2','3']
let array2:boolean[]=[true,false]
let array3:Array<string> = ['1']
let array4:Array<number> = [1]

/***对象类型 */
declare function create(o:object | null):void
create({props:0})
create((null))
// create(12)
// create('12')
// create(undefined)
let obj:{name: string,age: number}
obj={name:'小红',age: 18}
/**void */
function getName(name: string,age: number):void {}
function getName1(name: string,age:number): string {
    return name+age
}