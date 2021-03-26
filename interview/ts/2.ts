class Cat<T> {
    private type: T;
    constructor(type: T) {
        this.type = type
    }
}

// 动态给予
const cat:Cat <number> = new Cat<number>(20)



