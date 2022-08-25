import {cellState} from '@do-while-for-each/tree-cell-react';
import {PureComponent, createRef, RefObject} from 'react'
import {TomAndJerryTreeCell} from '../../../util';
import style from './index.module.css';

type IState = {
  name: string;
  kind: string;
  full: string;
}

export class TomAndJerryTreeCellClassComponent extends PureComponent<any, IState> {

  tomAndJerry = new TomAndJerryTreeCell();

  state: IState = cellState(this, {
    name: () => this.tomAndJerry.name,
    kind: () => this.tomAndJerry.kind,
    full: () => this.tomAndJerry.full,
  });

  nameRef: RefObject<HTMLInputElement>;
  kindRef: RefObject<HTMLInputElement>;
  renderCount = 0;

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
        <h3>TomAndJerry, React.PureComponent, tree-cell</h3>
        <p>
          <span>renderCount: <b className={style.renderCount}>{++this.renderCount}</b></span>
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
