export default class Observable<Callback> {
    private _callback;
    private _args;
    observables: Observable<Callback>[];
    executeOnce: boolean;
    getCallbackByRef: () => (args: Callback) => any;
    setCallback: (callback: (args: Callback) => any) => void;
    onDispose: Observable<any>;
    constructor(callback?: (args: Callback) => any, args?: Callback, executeOnce?: boolean);
    Add: (callback: (args: Callback) => any, executeOnce: boolean) => this;
    AddObservable: (observable: Observable<Callback>) => this;
    Remove: (observable: Observable<Callback>) => void;
    Resolve: () => void;
    Dispose: () => void;
}
