import Observable from "./ts/Observable";

(window as any).Observable = Observable;
let arg1 = "ADHJKASHKD";
let arg2 = 1231232154;
let a = new Observable<{text:string, num:number}>(null, {text: arg1, num: arg2}, false)
a.Add((args) => {
    console.log(args);
}, true);
a.AddObservable(new Observable<{text:string, num:number}>(null, null, false));
(window as any).a = a;
export default Observable;