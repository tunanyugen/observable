import Observable from "./Observable";
export declare class ObservableManager {
    observables: Observable<any>[];
    Register: (observable: Observable<any>) => void;
    Dispose: () => void;
}
