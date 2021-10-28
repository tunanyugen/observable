export default class Observable<Arguments> {
    private _callback;
    observables: Observable<Arguments>[];
    executeOnce: boolean;
    getCallbackByRef: () => (args: Arguments) => any;
    setCallback: (callback: (args: Arguments) => any) => void;
    onDispose: Observable<any>;
    constructor(callback?: (args: Arguments) => any, executeOnce?: boolean);
    Add: (callback: (args: Arguments) => any, executeOnce: boolean) => this;
    AddObservable: (observable: Observable<Arguments>) => this;
    Remove: (observable: Observable<Arguments>) => void;
    Resolve: (args: Arguments) => void;
    Dispose: (args: Arguments) => void;
}
