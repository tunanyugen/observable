import { ObservableManager } from "./ObservableManager";
export default class Observable<Arguments = null> {
    private _callback;
    discardCondition: () => boolean;
    observables: Observable<Arguments>[];
    executeOnce: boolean;
    getCallbackByRef: () => (args: Arguments) => any;
    setCallback: (callback: (args: Arguments) => any) => void;
    disposeObservable: Observable<any>;
    constructor(manager: ObservableManager, callback?: (args: Arguments) => any, executeOnce?: boolean, discardCondition?: () => boolean);
    Add: (manager: ObservableManager, callback: (args: Arguments) => any, executeOnce: boolean, discardCondition?: () => boolean) => this;
    AddObservable: (observable: Observable<Arguments>) => this;
    Remove: (observable: Observable<Arguments>) => void;
    Resolve: (args?: Arguments) => void;
    Dispose: (args?: Arguments) => void;
}
