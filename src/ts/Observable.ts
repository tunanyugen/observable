export default class Observable<Callback>{
    private _callback:(args:Callback)=>any;
    private _args:Callback;
    observables:Observable<Callback>[] = [];
    executeOnce:boolean;
    getCallbackByRef = () => { return this._callback; }
    setCallback = (callback:(args:Callback)=>any) => { this._callback = callback; }
    onDispose:Observable<any>;

    constructor(callback:(args:Callback)=>any = null, args:Callback = null, executeOnce:boolean = true){
        this._args = args;
        this.setCallback(callback);
        this.executeOnce = executeOnce;
    }
    Add = (callback:(args:Callback)=>any, executeOnce:boolean) => {
        return this.AddObservable(new Observable<Callback>(callback, this._args, executeOnce));
    }
    AddObservable = (observable:Observable<Callback>) => {
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
    Remove = (observable:Observable<Callback>) => {
        let index = this.observables.indexOf(observable);
        if (index >= 0){
            this.observables.splice(index, 1);
        }
    }
    // execute all observables and callback
    Resolve = () => {
        // resolve self callback
        if (this._callback){
            this._callback(this._args);
        }
        // resolve all observables
        for (let o = 0; o < this.observables.length; o++){
            this.observables[o].Resolve();
        }
        // dispose all executeOnce observables
        for (let o = this.observables.length - 1; o >= 0; o--){
            if (this.observables[o].executeOnce){
                this.observables[o].Dispose();
            }
        }
    }
    Dispose = () => {
        if (this.onDispose){
            this.onDispose.Resolve();
        }
        for (let i = 0; i < this.observables.length; i++){
            this.observables[i].Dispose();
        }
    }
}