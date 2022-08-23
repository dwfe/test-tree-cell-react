import {observer} from 'mobx-react-lite'
import style from '../TomAndJerry_tree-cell_class/index.module.css';
import {TomAndJerryMobx} from '../../../util';
import {useState, useRef} from 'react';

let renderCount = 0;

export const TomAndJerryMobxFnComponent = observer(() => {
  const [tomAndJerry] = useState(() => new TomAndJerryMobx());
  const nameRef = useRef<HTMLInputElement>(null);
  const kindRef = useRef<HTMLInputElement>(null);

  const applyField = (field: 'name' | 'kind') => {
    switch (field) {
      case 'name': {
        const value = nameRef.current?.value;
        if (value !== undefined) {
          tomAndJerry.setName(value);
        }
        break;
      }
      case 'kind': {
        const value = kindRef.current?.value;
        if (value !== undefined) {
          tomAndJerry.setKind(value);
        }
        break;
      }
    }
  }

  const applyAll = () => {
    applyField('name');
    applyField('kind');
  }

  return (
    <div>
      <h3>TomAndJerry MobX</h3>
      <p>
        <span>renderCount: <b className={style.renderCount}>{++renderCount}</b></span>
      </p>
      <table>
        <tbody>
        <tr>
          <td>name</td>
          <td>
            <input type="text" defaultValue={tomAndJerry.name} ref={nameRef}></input>&nbsp;
            <button onClick={() => applyField('name')}>apply</button>
          </td>
          <td><b>{tomAndJerry.name}</b></td>
        </tr>
        <tr>
          <td>kind</td>
          <td>
            <input type="text" defaultValue={tomAndJerry.kind} ref={kindRef}></input>&nbsp;
            <button onClick={() => applyField('kind')}>apply</button>
          </td>
          <td><b>{tomAndJerry.kind}</b></td>
        </tr>
        <tr>
          <td>full</td>
          <td>&nbsp;</td>
          <td><b>{tomAndJerry.full}</b></td>
        </tr>
        </tbody>
      </table>
      <p>
        <button onClick={() => applyAll()}>apply all changes</button>
      </p>
    </div>
  );
});
