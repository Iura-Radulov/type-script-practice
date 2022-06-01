const button = document.querySelector('button')!;

if (button) {
  button.addEventListener('click', () => {
    console.log('Click');
  });
};

//--------------- HW 4 -------------

class myClass {
  private protectMethod () {
    return 'Something';
  };
  public myPublicMethod() {
    return this.protectMethod();
  }
}

class Animal {
  public say() {
    console.log("Nothing to say");
    
  }
};

class Cat extends Animal {
  public say() {
    console.log("Meow");
    
  }
}

const cat = new Cat();
cat.say();

class House {
  // public street: string;
  private tenants: string[] = [];

  constructor(private readonly type: string, private street: string) {
    this.street = street;
    this.type = type;
  };
 public showAdress(this:House) {
    console.log('Address:' + this.street);    
  };
  public showType(this: House) {
    console.log(`House Type: ${this.type}`);    
  }
  public addTenant(tenant: string) {
    this.tenants.push(tenant);
  };
  public showTenants() {
    console.log(this.tenants);    
  }
};

const house = new House('stone', 'Middle-earth' );
// house.showAdress();
// house.addTenant('Anton');
// house.addTenant("Nikita");
// house.showTenants();

class StoneHouse extends House {
  private chargeOfTheHouse: string;
  constructor(street: string, generalTenant: string) {
    super('stone', street);
    this.chargeOfTheHouse = generalTenant;
    this.addTenant(generalTenant)
  };
  public showTenants() {
    console.log('General: ' + this.chargeOfTheHouse);
     super.showTenants();
  }  
};

const stoneHouse = new StoneHouse('Stone-world', 'Max');
stoneHouse.addTenant('Anton');
stoneHouse.addTenant('Nikita');
stoneHouse.showTenants();
stoneHouse.showType();
stoneHouse.showAdress();

