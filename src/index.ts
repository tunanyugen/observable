import Observable from "./ts/Observable";

(window as any).Observable = Observable;
let arg1 = "ADHJKASHKD";
let arg2 = 1231232154;
let a = new Observable<{a1:string, a2:number}>(()=>{}, false);
let b = new Observable<{a1:string, a2:number}>((args) => {
    console.log(args);
}, false)
a.AddObservable(b);
a.Resolve({a1:arg1, a2:arg2});
export default Observable;