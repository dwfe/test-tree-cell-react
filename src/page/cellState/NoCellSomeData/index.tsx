import {cellState} from '@do-while-for-each/tree-cell-react';
import {createRef, PureComponent, RefObject} from 'react';
import style from './index.module.css';

type IState = {
  value: string;
};

export class NoCellSomeDataClassComponent extends PureComponent<any, IState> {

  state: IState = cellState(this, {
    value: 'hello'
  });

  valueRef: RefObject<HTMLInputElement>;
  renderCount = 0;

  constructor(props: any) {
    super(props);
    this.valueRef = createRef();
  }

  applyValue = () => {
    const value = this.valueRef.current?.value;
    if (value !== undefined)
      this.setState({value});
  }

  render() {
    return (
      <div>
        <h3>no cell, some data</h3>
        <p>
          <span>renderCount: <b className={style.renderCount}>{++this.renderCount}</b></span>
        </p>
        <p>value: {this.state.value}</p>
        <div>
          <input type="text" defaultValue={this.state.value} ref={this.valueRef}/>&nbsp;
          <button onClick={() => this.applyValue()}>apply</button>
        </div>
      </div>
    );
  }

}
