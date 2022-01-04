import Observable from "./ts/Observable";
import { ObservableManager } from "./ts/ObservableManager";

(window as any).Observable = Observable;

let manager = new ObservableManager();
let a = new Observable(manager, null, false);
let b = new Observable(manager, () => {
    console.log("ASD");
}, false)
a.AddObservable(b);
console.log(manager, a);

export default Observable;