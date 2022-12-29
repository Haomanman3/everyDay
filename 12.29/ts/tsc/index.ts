class People {
    name: string;
    constructor(name: string){
        this.name = name;
    }
    sport():string{
        return `${this.name}会运动`
    }
}
let p=new People('小明')