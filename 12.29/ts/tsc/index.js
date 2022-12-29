"use strict";
class People {
    constructor(name) {
        this.name = name;
    }
    sport() {
        return `${this.name}会运动`;
    }
}
let p = new People('小明');
