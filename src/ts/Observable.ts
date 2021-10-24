export default class Observable{
    private _callback:Function;
    observables:Observable[] = [];
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
    Remove = (observable:Observable) => {
        let index = this.observables.indexOf(observable);
        if (index >= 0){
            this.observables.splice(index, 1);
        }
    }
    // execute all observables and callback
    Resolve = () => {
        // resolve self callback
        if (this._callback){
            this._callback();
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