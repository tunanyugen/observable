export default class Observable {
    private _observables;
    private _callback;
    executeOnce: boolean;
    getCallbackByRef: () => Function;
    setCallback: (callback: Function) => void;
    onDispose: Observable;
    constructor(callback?: Function, executeOnce?: boolean);
    Add: (callback: Function, executeOnce: boolean) => this;
    AddObservable: (observable: Observable) => this;
    Remove: (observable: Observable) => void;
    Resolve: () => void;
    Dispose: () => void;
}
