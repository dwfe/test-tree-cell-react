import {cell, makeObservable} from '@do-while-for-each/tree-cell';

export class TomAndJerryTreeCell {
  name = 'Tom';
  kind = 'Cat';

  constructor() {
    makeObservable(this, {
      name: cell,
      kind: cell,
      full: cell,
    });
  }

  get full() {
    return this.name + ' ' + this.kind;
  }

}
