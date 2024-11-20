var Customer = /** @class */ (function () {
    function Customer(cId, cName) {
        this.cId = cId;
        this.cName = cName;
    }
    Customer.prototype.print = function () {
        console.log(this.cId, ":", this.cName);
    };
    return Customer;
}());
var customer1 = new Customer(1, "Pasindu");
customer1.print();
