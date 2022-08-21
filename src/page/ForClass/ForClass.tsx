import {cellState} from '@do-while-for-each/tree-cell-react';
import {PureComponent, createRef, RefObject} from 'react'
import {TomAndJerry} from '../../util';

type IState = {
  name: string;
  kind: string;
  full: string;
}

export class ForClass extends PureComponent<any, IState> {

  tomAndJerry = new TomAndJerry();

  nameRef: RefObject<HTMLInputElement>;
  kindRef: RefObject<HTMLInputElement>;

  state: IState = cellState(this, {
    name: () => this.tomAndJerry.name,
    kind: () => this.tomAndJerry.kind,
    full: () => this.tomAndJerry.full,
  });

  constructor(props: any) {
    super(props);
    this.nameRef = createRef();
    this.kindRef = createRef();
    this.applyField = this.applyField.bind(this);
    this.applyAll = this.applyAll.bind(this);
  }

  applyField(field: 'name' | 'kind') {
    let value;
    switch (field) {
      case 'name':
        value = this.nameRef.current?.value;
        break;
      case 'kind':
        value = this.kindRef.current?.value;
        break;
    }
    if (value)
      this.tomAndJerry[field] = value;
  }

  applyAll() {
    this.applyField('name');
    this.applyField('kind');
  }

  render() {
    console.log(`render`, this.state.full)
    return (
      <div>
        <p>
          <b>{this.state.full}</b>
        </p>
        <p>
          <label>name:&nbsp;
            <input type="text" defaultValue={this.state.name} ref={this.nameRef}></input>
            &nbsp;
            <button onClick={() => this.applyField('name')}>apply</button>
          </label>
        </p>
        <p>
          <label>kind:&nbsp;
            <input type="text" defaultValue={this.state.kind} ref={this.kindRef}></input>
            &nbsp;
            <button onClick={() => this.applyField('kind')}>apply</button>
          </label>
        </p>
        <p>
          <button onClick={() => this.applyAll()}>apply all
          </button>
        </p>
      </div>
    );
  }


}
