class Customer {
    private cId : number;
    private cName : string;
    private cAddress : string;

    constructor(cId:number, cName:string, cAddress:string){
        this.cId = cId;
        this.cName = cName;
        this.cAddress = cAddress;
    }
    
    public setCId(cId : number) {
        this.cId = cId;
    }
    
    public getCId() : number {
        return this.cId;
    }

    public setCName(cName : string){
        this.cName = cName;
    }
    
    public getCName() : string {
        return this.cName;
    }

    public setCAddress(cAddress : string){
        this.cAddress = cAddress;
    }
    
    public getCAddress() : string {
        return this.cAddress;
    }
    
    print() : void{
        console.log(this.cId, ":" , this.cName)
    }
}

const customer1 = new Customer(1, "Pasindu", "Galle");
customer1.print();