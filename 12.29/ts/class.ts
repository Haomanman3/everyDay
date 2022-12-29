class People1 {
    name: string;
    age: number;
    constructor(name: string,age){
        this.name = name;
        this.age = age;
    }
    sport():string{
        return `${this.name}会运动`
    }
}
let p0=new People1('小明',18)
/**调用类的方法 */
console.log(p0.sport());
/**获取类的属性 */
console.log(p0.age);

class Animale {
    name: string;
    constructor(name) {
        this.name = name;
    }
    getName():string  {
        return this.name;
    }
}
class Dog extends Animale {
    constructor(name) {
        super(name);
    }
}
let d=new Dog('哈士奇')
console.log(d.name);
