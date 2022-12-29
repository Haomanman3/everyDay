interface Person{
    name: string;
    age: number;
    sex: string;
    isJob: boolean;
    hobby:string[],
    former:number,
    formerName:[string,string,string]
}
interface Person{
    idCard?:string
}
let person:Person={
    name:'张三',
    age:18,
    sex:"男",
    isJob: false,
    hobby:['打球'],
    former:3,
    formerName:['小兰','小红','小花']
}