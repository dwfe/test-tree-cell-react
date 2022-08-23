import {makeObservable, observable, computed, action} from 'mobx';

export class TomAndJerryMobx {
  name = 'Tom';
  kind = 'Cat';

  constructor() {
    makeObservable(this, {
      name: observable,
      kind: observable,
      full: computed,
      setName: action,
      setKind: action,
    });
  }

  get full() {
    return this.name + ' ' + this.kind;
  }

  setName(name: string): void {
    this.name = name;
  }

  setKind(kind: string): void {
    this.kind = kind;
  }

}
