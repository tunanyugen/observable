declare module "Observable" {
    export default class Observable {
        observables: Observable[];
        private _callback;
        getCallbackByRef: () => Function;
        setCallback: (callback: Function) => void;
        constructor(callback?: Function);
        Add: (...observable: Observable[]) => Observable[];
        Resolve: (parameter?: any) => any;
    }
}
declare const Observable: any;
//# sourceMappingURL=dist.d.ts.map