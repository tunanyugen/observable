export default class Observable{
    private _observables:Observable[] = [];
    private _callback:Function;
    executeOnce:boolean;
    getCallbackByRef = () => { return this._callback; }
    setCallback = (callback:Function) => { this._callback = callback; }
    onDispose:Observable;

    constructor(callback:Function = null, executeOnce:boolean = true){
        this.setCallback(callback);
        this.executeOnce = executeOnce;
    }
    Add = (callback:Function, executeOnce:boolean) => {
        return this.AddObservable(new Observable(callback, executeOnce));
    }
    AddObservable = (observable:Observable) => {
        if (observable != this){
            this._observables.push(observable);
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
    Remove = (observable:Observable) => {
        let index = this._observables.indexOf(observable);
        if (index >= 0){
            this._observables.splice(index, 1);
        }
    }
    // execute all observables and callback
    Resolve = () => {
        // resolve self callback
        if (this._callback){
            this._callback();
        }
        // resolve all observables
        for (let o = 0; o < this._observables.length; o++){
            this._observables[o].Resolve();
        }
        // dispose all executeOnce observables
        for (let o = this._observables.length - 1; o >= 0; o--){
            if (this._observables[o].executeOnce){
                this._observables[o].Dispose();
            }
        }
    }
    Dispose = () => {
        if (this.onDispose){
            this.onDispose.Resolve();
        }
        for (let i = 0; i < this._observables.length; i++){
            this._observables[i].Dispose();
        }
    }
}