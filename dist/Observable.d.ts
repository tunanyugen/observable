export default class Observable {
    observables: Observable[];
    private _callback;
    getCallbackByRef: () => Function;
    setCallback: (callback: Function) => void;
    constructor(callback?: Function);
    Add: (...observable: Observable[]) => Observable[];
    Resolve: (parameter?: any) => any;
}
//# sourceMappingURL=Observable.d.ts.map