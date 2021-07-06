export default class Observable{
    observables:Observable[] = [];
    private _callback:Function;
    getCallbackByRef = () => { return this._callback; }
    setCallback = (callback:Function) => { this._callback = callback; }

    constructor(callback:Function = null){
        this.setCallback(callback);
    }
    Add = (...observable:Observable[]) => {
        this.observables.push(...observable);
        return observable;
    }
    // execute all observables and callback
    Resolve = (parameter?:any) => {
        // resolve all observables' callbacks
        for (let o = 0; o < this.observables.length; o++){
            this.observables[o].Resolve(parameter);
        }
        // resolve self callback
        if (this._callback){
            return this._callback(parameter);
        }
    }
}