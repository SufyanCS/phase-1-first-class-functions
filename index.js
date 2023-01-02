function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
    return namedFunction = () => {console.log('Hi');}
}
function returnsAnAnonymousFunction(){
    return () => {console.log("Anonymous Function");}
}