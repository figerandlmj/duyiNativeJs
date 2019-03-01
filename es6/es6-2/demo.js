let a = "hello world";
console.log(a);

switch (a) {
    case "hello": {
        console.log("hello");
        break;
    }
    case "world": {
        console.log("world");
        break;
    }
    case "hello world": {
        console.log("hello world");
        break;
    }
}

//Promise原理
//5节 then返回值为Promise的处理
function MyPromise(executor) {
    var self = this;
    self.status = pending;
    self.resolveValue = null;
    self.rejectReason = null;
    self.ResolveCallbackList = [];
    self.RejectCallbackList = [];
    function resolve(value) {
        if(self.status === 'pending') {
            self.status = 'Fulfilled';
            self.resolveValue = value;
            self.ResolveCallbackList.forEach(function(ele) {
                ele();
            });
        }
    }
    function reject(reason) {
        if(self.status === 'pending') {
            self.status = 'Rejected';
            self.rejectReason = reason;
            self.RejectCallbackList.forEach(function(ele) {
                ele();
            });
        }
    }
    try{
        executor(resolve, reject);
    }catch(e) {
        reject(e);
    }
}
function ResolutionReturnPromise(nextPromise, returnValue, res, rej) {
    if(returnValue instanceof MyPromise) {
        returnValue.then((val) => {
            res(val);
        }, (reason) => {
            rej(reason);
        });
    }else{
        res(returnValue);
    }
}
MyPromise.prototype.then = function(onFulfilled, onRejected) {
    var self = this;
    if(!onFulfilled) {
        onFulfilled = function(val) {
            return val;
        }
    }
    if(!onRejected) {
        onRejected = function(reason) {
            throw new Error(reason);
        }
    }
    var nextPromise = new MyPromise(function(res, rej) {
        if(self.status === 'Fulfilled') {
            setTimeout(function() {
                try{
                    // var nextResolveValue = onFulfilled(self.resolveValue);
                    // res(nextResolveValue);
                    var nextResolveValue = onFulfilled(self.resolveValue);
                    ResolutionReturnPromise(nextPromise, nextResolveValue, res, rej);
                }catch(e) {
                    rej(e);
                }
            }, 0);
        }
        if(self.status === 'Rejected') {
            setTimeout(function() {
                try{
                    // var nextRejectValue = onRejected(self.rejectReason);
                    // res(nextRejectValue);
                    var nextRejectValue = onRejected(self.rejectReason);
                    ResolutionReturnPromise(nextPromise, nextRejectValue, res, rej);
                }catch(e) {
                    rej(e);
                }
            }, 0);
        }
        if(self.status === 'pending') {
            self.ResolveCallbackList.push(function() {
                setTimeout(function() {
                    try{
                        // var nextResolveValue = onFulfilled(self.resolveValue);
                        // res(nextResolveValue);
                        var nextResolveValue = onFulfilled(self.resolveValue);
                        ResolutionReturnPromise(nextPromise, nextResolveValue, res, rej);
                    }catch(e) {
                        rej(e);
                    }
                }, 0);
            });
            self.RejectCallbackList.push(function() {
                setTimeout(function() {
                    try{
                        // var nextRejectValue = onRejected(self.rejectReason);
                        // res(nextRejectValue);
                        var nextRejectValue = onRejected(self.rejectReason);
                        ResolutionReturnPromise(nextPromise, nextRejectValue, res, rej);
                    }catch(e) {
                        rej(e);
                    }
                }, 0);
            });
        }
    })

    return nextPromise;
}

let oP = new MyPromise((res, rej) => {
    res(1);
});
oP.then((val) => {
    console.log(val + 'ok');
    return new MyPromise((res, rej) => {
        rej(0);
    })
}, (reason) => {
    console.log(reason + 'no');
}).then((val) => {
    console.log(val + 'then after');
}, (reason) => {
    console.log(reason + 'then after');
})

MyPromise.race = function(promiseArr) {
    return new MyPromise(function(resolve, reject) {
        promiseArr.forEach(function(promise, index) {
            promise.then(resolve, reject);
        })
    })
}

