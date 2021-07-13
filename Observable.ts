export default class Observable{
    private _observables:Observable[] = [];
    private _parents:Observable[] = [];
    private _callback:Function;
    getCallbackByRef = () => { return this._callback; }
    setCallback = (callback:Function) => { this._callback = callback; }

    constructor(callback:Function = null){
        this.setCallback(callback);
    }
    Add = (...observables:Observable[]) => {
        for (let i = 0; i < observables.length; i++){
            if (observables[i] != this){
                this._observables.push(observables[i]);
            } else {
                console.error("Cannot add observable to itself.");
            }
        }
        return observables;
    }
    Remove = (observable:Observable) => {
        let index = this._observables.indexOf(observable);
        this._observables.splice(index, 1);
    }
    // execute all observables and callback
    Resolve = (parameter?:any) => {
        // resolve all observables' callbacks
        for (let o = 0; o < this._observables.length; o++){
            this._observables[o].Resolve(parameter);
        }
        // resolve self callback
        if (this._callback){
            return this._callback(parameter);
        }
    }
    Dispose = () => {
        for (let i = 0; i < this._observables.length; i++){
            this._observables[i].Dispose();
        }
        for (let i = 0; i < this._parents.length; i++){
            this._parents[i].Remove(this);
        }
    }
}