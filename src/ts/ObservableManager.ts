import Observable from "./Observable";

export class ObservableManager {
    observables:Observable<any>[] = [];
    Register = (observable:Observable<any>) => {
        this.observables.push(observable);
    }
    Dispose = () => {
        for (let i = 0; i < this.observables.length; i++){
            this.observables[i].Dispose();
        }
        this.observables = [];
    }
}