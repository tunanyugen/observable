import { ObservableManager } from "./ObservableManager";

export default class Observable<Arguments=null>{
    private _callback:(args:Arguments)=>any;
    discardCondition:()=>boolean;
    observables:Observable<Arguments>[] = [];
    executeOnce:boolean;
    getCallbackByRef = () => { return this._callback; }
    setCallback = (callback:(args:Arguments)=>any) => { this._callback = callback; }
    disposeObservable:Observable<any>;

    constructor(
        manager:ObservableManager,
        callback:(args:Arguments)=>any = null,
        executeOnce:boolean = true,
        discardCondition:()=>boolean = null
    ){
        this.setCallback(callback);
        this.executeOnce = executeOnce;
        this.discardCondition = discardCondition;
        manager.Register(this);
    }
    Add = (
        manager:ObservableManager,
        callback:(args:Arguments)=>any,
        executeOnce:boolean,
        discardCondition:()=>boolean = null
    ) => {
        return this.AddObservable(new Observable<Arguments>(manager, callback, executeOnce, discardCondition));
    }
    AddObservable = (observable:Observable<Arguments>) => {
        if (observable != this){
            this.observables.push(observable);
            let manager = new ObservableManager();
            // remove observable from self array when it get disposed of
            if (observable.disposeObservable){
                observable.disposeObservable.AddObservable(
                    new Observable(manager, () => {
                        this.Remove(observable);
                    }, true)
                )
            } else {
                observable.disposeObservable = new Observable(manager, () => {
                    this.Remove(observable);
                }, true)
            }
        } else {
            console.error("Cannot add observable to itself.");
        }
        return this;
    }
    Remove = (observable:Observable<Arguments>) => {
        let index = this.observables.indexOf(observable);
        if (index >= 0){
            this.observables.splice(index, 1);
        }
    }
    // execute all observables and callback
    Resolve = (args?:Arguments) => {
        if (this.discardCondition && this.discardCondition()){ return }
        // resolve self callback
        if (this._callback){
            this._callback(args);
        }
        // resolve all observables
        for (let o = 0; o < this.observables.length; o++){
            this.observables[o].Resolve(args);
        }
        // dispose all executeOnce observables
        for (let o = this.observables.length - 1; o >= 0; o--){
            if (this.observables[o].executeOnce){
                this.observables[o].Dispose(args);
            }
        }
    }
    Dispose = (args?:Arguments) => {
        if (this.disposeObservable){
            this.disposeObservable.Resolve(args);
        }
        for (let i = 0; i < this.observables.length; i++){
            this.observables[i].Dispose(args);
        }
    }
}