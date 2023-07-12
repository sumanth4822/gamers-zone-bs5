class Company {
    constructor(name,location){
        this.name = name;
        this.location = location;
    }

    greet(){
        console.log('Welcome to '+this.name);
    }
}

module.exports = Company;