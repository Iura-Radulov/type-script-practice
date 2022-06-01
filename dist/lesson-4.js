"use strict";
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', () => {
        console.log('Click');
    });
}
;
class myClass {
    protectMethod() {
        return 'Something';
    }
    ;
    myPublicMethod() {
        return this.protectMethod();
    }
}
class Animal {
    say() {
        console.log("Nothing to say");
    }
}
;
class Cat extends Animal {
    say() {
        console.log("Meow");
    }
}
const cat = new Cat();
cat.say();
class House {
    constructor(type, street) {
        this.type = type;
        this.street = street;
        this.tenants = [];
        this.street = street;
        this.type = type;
    }
    ;
    showAdress() {
        console.log('Address:' + this.street);
    }
    ;
    showType() {
        console.log(`House Type: ${this.type}`);
    }
    addTenant(tenant) {
        this.tenants.push(tenant);
    }
    ;
    showTenants() {
        console.log(this.tenants);
    }
}
;
const house = new House('stone', 'Middle-earth');
class StoneHouse extends House {
    constructor(street, generalTenant) {
        super('stone', street);
        this.chargeOfTheHouse = generalTenant;
        this.addTenant(generalTenant);
    }
    ;
    showTenants() {
        console.log('General: ' + this.chargeOfTheHouse);
        super.showTenants();
    }
}
;
const stoneHouse = new StoneHouse('Stone-world', 'Max');
stoneHouse.addTenant('Anton');
stoneHouse.addTenant('Nikita');
stoneHouse.showTenants();
stoneHouse.showType();
stoneHouse.showAdress();
//# sourceMappingURL=lesson-4.js.map