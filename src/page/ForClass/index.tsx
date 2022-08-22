import {cellState} from '@do-while-for-each/tree-cell-react';
import {PureComponent, createRef, RefObject} from 'react'
import {TomAndJerry} from '../../util';
import style from './index.module.css';

type IState = {
  name: string;
  kind: string;
  full: string;
}

let renderCount = 0;

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
  }

  applyField = (field: 'name' | 'kind') => {
    let value;
    switch (field) {
      case 'name':
        value = this.nameRef.current?.value;
        break;
      case 'kind':
        value = this.kindRef.current?.value;
        break;
    }
    if (value !== undefined)
      this.tomAndJerry[field] = value;
  }

  applyAll = () => {
    this.applyField('name');
    this.applyField('kind');
  }

  render() {
    return (
      <div>
        <p>
          <span>renderCount: <b className={style.renderCount}>{++renderCount}</b></span>
        </p>
        <table>
          <tbody>
          <tr>
            <td>name</td>
            <td>
              <input type="text" defaultValue={this.state.name} ref={this.nameRef}></input>&nbsp;
              <button onClick={() => this.applyField('name')}>apply</button>
            </td>
            <td><b>{this.state.name}</b></td>
          </tr>
          <tr>
            <td>kind</td>
            <td>
              <input type="text" defaultValue={this.state.kind} ref={this.kindRef}></input>&nbsp;
              <button onClick={() => this.applyField('kind')}>apply</button>
            </td>
            <td><b>{this.state.kind}</b></td>
          </tr>
          <tr>
            <td>full</td>
            <td>&nbsp;</td>
            <td><b>{this.state.full}</b></td>
          </tr>
          </tbody>
        </table>
        <p>
          <button onClick={() => this.applyAll()}>apply all changes</button>
        </p>
      </div>
    );
  }


}
