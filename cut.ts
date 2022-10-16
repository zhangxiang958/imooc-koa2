interface Function {
    after(fn: Function): any
}


Function.prototype.after = function(fn: Function) {
    const self = this;
    return function(...args) {
        let res = self.apply(this, args);
        if (res) {
            fn.call(this);
        }
    }
}

function logic(userID: string) {
    console.log(`userID is ${userID}`);
}

function reportUserID() {

}


