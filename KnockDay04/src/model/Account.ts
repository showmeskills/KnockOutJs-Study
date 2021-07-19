// model object
class Account {
    Id:number;
    Name:string;
    Balance:number;
    constructor(id:number, name:string, balance:number){
        this.Id = id;
        this.Name = name;
        this.Balance = balance;
    }

}



export default Account;