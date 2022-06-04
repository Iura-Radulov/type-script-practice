const button = document.querySelector('button')!;

if (button) {
  button.addEventListener('click', () => {
    console.log('Click');
  });
};

//--------------- HW 4 -------------

// class myClass {
//   private protectMethod () {
//     return 'Something';
//   };
//   public myPublicMethod() {
//     return this.protectMethod();
//   }
// }

// class Animal {
//   public say() {
//     console.log("Nothing to say");
    
//   }
// };

// class Cat extends Animal {
//   public say() {
//     console.log("Meow");
    
//   }
// }

// const cat = new Cat();
// cat.say();

// class House {
//   // public street: string;
//   private tenants: string[] = [];

//   constructor(private readonly type: string, private street: string) {
//     this.street = street;
//     this.type = type;
//   };
//  public showAdress(this:House) {
//     console.log('Address:' + this.street);    
//   };
//   public showType(this: House) {
//     console.log(`House Type: ${this.type}`);    
//   }
//   public addTenant(tenant: string) {
//     this.tenants.push(tenant);
//   };
//   public showTenants() {
//     console.log(this.tenants);    
//   }
// };

// const house = new House('stone', 'Middle-earth' );
// // house.showAdress();
// // house.addTenant('Anton');
// // house.addTenant("Nikita");
// // house.showTenants();

// class StoneHouse extends House {
//   private chargeOfTheHouse: string;
//   constructor(street: string, generalTenant: string) {
//     super('stone', street);
//     this.chargeOfTheHouse = generalTenant;
//     this.addTenant(generalTenant)
//   };
//   public showTenants() {
//     console.log('General: ' + this.chargeOfTheHouse);
//      super.showTenants();
//   }  
// };

// const stoneHouse = new StoneHouse('Stone-world', 'Max');
// stoneHouse.addTenant('Anton');
// stoneHouse.addTenant('Nikita');
// stoneHouse.showTenants();
// stoneHouse.showType();
// stoneHouse.showAdress();

// ----Getter/Setter ---------

// type PersonInformation = {
//   firstName?: string;
//   lastName?: string;
// };

// class Person {
//   private personInfo: PersonInformation = {};

//   set firstName(value: string) {
//     console.log('firstName added');
//     this.personInfo.firstName = value;
//   };
//   set lastName(value: string) {
//     console.log('lastName added');
//     this.personInfo.lastName = value;
//   };
//   get info() {
//     const { personInfo } = this;
//     return `${personInfo.lastName} ${personInfo.firstName}`;
//   }
// };

// const personMan = new Person();

// personMan.lastName = 'Radulov';
// personMan.firstName = 'Iuri';
// console.log(personMan.info);

// ----------Abstract classes --------

// abstract class Plane {
//   protected pilotInCabine = false;

//   public sitInPlate() {
//     this.pilotInCabine = true;
//   }
//   public abstract startEngine(): boolean;
// }

// class Boeing extends Plane {
//   public startEngine() {
//     return true;
//   }
// };

// ------- Интерфейсы объектов -----------

// interface IPerson {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// };

// let user: IPerson;

// user = {
//   name: 'George',
//   age: 25,
//   greet(phrase) {
//     console.log(`${phrase} ${this.name}`);    
//   }
// }

// user.greet('Всем привет я');

// // -----------  Интерфейсы классов ----------

// interface IPilot {
//   flyMassage(): void;
// };

// class Pilot implements IPerson, IPilot {
//   constructor(public name: string, public age: number) {
//     if (this.age < 28) {
//       throw new Error('Pilot too young');
//     }
//   };
//   greet(phrase: string): void {
//     console.log(`${phrase} ${this.name}`);
//   };
//   flyMassage(): void {
//     console.log('Самолет набрал высоту, всем приятного полета!');
//   }
// };

// abstract class Plane {
//   protected pilot?:IPilot;

//   public sitInPlate(pilot:IPilot): void {
//     this.pilot = pilot;
//   }
//   public abstract startEngine(): boolean;
// }

// class Boeing extends Plane {
//   public startEngine(): boolean {
//     if (!this.pilot) {
//       throw new Error('No pilot in cabin');
//     };
//     console.log('Запуск турбин');
//     this.pilot.flyMassage();
    
//     return true;
//   }
// };

// const boeing = new Boeing();
// const pilot = new Pilot('Antony', 32);
// pilot.greet('Вас приветствует капитан корабля');
// boeing.sitInPlate(pilot);
// boeing.startEngine();

/*
Интерфейсы как тип функции
 */

//type AddFunc = (n1: number, n2: number) => number;
// interface AddFunc {
//   (n1: number, n2: number): number;
// }

// let add: AddFunc;

// add = (n1:number, n2: number) => {
//   return n1 + n2;
// }

// class Singleton {
//   private static instance: Singleton;

//   constructor() {
//     if (Singleton.instance) {
//       return Singleton.instance;
//     }

//     Singleton.instance = this;

//     return Singleton.instance;
//   }

//   public someBusinessLogic() {
//       // ...
//   }
// }

// const s1 = new Singleton();
// const s2 = new Singleton();

// if (s1 === s2) {
//     console.log('Тот же объект');
// } else {
//     console.log('Че-то не так, получили разные объекты');
// }

//-------- Practice ------------



class Key {
 private signature: number;
  constructor() {
    this.signature = Math.random();
  };
  getSignature(): number {
    return this.signature;
  }
};

class Person {
  constructor(private key: Key) {    
  }
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  private tenants: Person[] = [];

  constructor(protected key: Key) {
    
  }
   comeIn(person: Person) {
    if (!this.door) {
      throw new Error('Door is close')      
    }
    this.tenants.push(person);
    console.log("Person inside");
    
  }
 abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() !== this.key.getSignature()) {
      throw new Error ('Key to another door')
    }
    return this.door = true;
  }
}
const key = new Key();

const myHouse = new MyHouse(key);
const person1 = new Person(key);
const person2 = new Person(key);
myHouse.openDoor(person1.getKey());
myHouse.openDoor(person2.getKey());
myHouse.comeIn(person1);
myHouse.comeIn(person2);
