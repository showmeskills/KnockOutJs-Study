
class Account {
    Id:number;
    Name:string;
    Balance:number;
    Deposits:Array<number>;
    constructor(Id:number=0, Name:string="", Balance:number=0,Deposits:Array<number>=[]){
        this.Id = Id;
        this.Name = Name;
        this.Balance = Balance;
        this.Deposits = Deposits
    }
}

export default Account;