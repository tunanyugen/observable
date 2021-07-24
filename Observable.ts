export default class Observable{
    private _observables:Observable[] = [];
    private _callback:Function;
    private _executeOnce:boolean = true;
    getCallbackByRef = () => { return this._callback; }
    setCallback = (callback:Function) => { this._callback = callback; }
    onDispose:Observable;

    constructor(callback:Function = null, executeOnce:boolean = true){
        this.setCallback(callback);
        this._executeOnce = executeOnce;
    }
    Add = (observable:Observable) => {
        if (observable != this){
            this._observables.push(observable);
            // remove observable from self array when it get disposed of
            if (observable.onDispose){
                observable.onDispose.Add(new Observable(() => {this.Remove(observable);}))
            } else {
                observable.onDispose = new Observable(() => {
                    this.Remove(observable);
                })
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
        // resolve all observables' callbacks
        for (let o = 0; o < this._observables.length; o++){
            this._observables[o].Resolve();
        }
        // resolve self callback
        if (this._callback){
            return this._callback();
        }
        if (this._executeOnce) { this.Dispose(); }
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