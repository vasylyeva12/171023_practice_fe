let obj = {
    name: 'Alex',
    age: 30,
    get getName(){
        return this.name + ' ' + this.age
    }, isJob: true
}

console.log(obj.getName);