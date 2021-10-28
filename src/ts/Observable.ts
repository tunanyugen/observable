export default class Observable<Arguments=null>{
    private _callback:(args:Arguments)=>any;
    observables:Observable<Arguments>[] = [];
    executeOnce:boolean;
    getCallbackByRef = () => { return this._callback; }
    setCallback = (callback:(args:Arguments)=>any) => { this._callback = callback; }
    onDispose:Observable<any>;

    constructor(callback:(args:Arguments)=>any = null, executeOnce:boolean = true){
        this.setCallback(callback);
        this.executeOnce = executeOnce;
    }
    Add = (callback:(args:Arguments)=>any, executeOnce:boolean) => {
        return this.AddObservable(new Observable<Arguments>(callback, executeOnce));
    }
    AddObservable = (observable:Observable<Arguments>) => {
        if (observable != this){
            this.observables.push(observable);
            // remove observable from self array when it get disposed of
            if (observable.onDispose){
                observable.onDispose.AddObservable(
                    new Observable(() => {
                        this.Remove(observable);
                    }, true)
                )
            } else {
                observable.onDispose = new Observable(() => {
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
        if (this.onDispose){
            this.onDispose.Resolve(args);
        }
        for (let i = 0; i < this.observables.length; i++){
            this.observables[i].Dispose(args);
        }
    }
}