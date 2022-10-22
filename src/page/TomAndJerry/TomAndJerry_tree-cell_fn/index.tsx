import {useCellState} from '@do-while-for-each/tree-cell-react';
import {useRef, useState} from 'react';
import style from '../TomAndJerry_tree-cell_class/index.module.css';
import {TomAndJerryTreeCell} from '../../../util';

let renderCount = 0;

export function TomAndJerryTreeCellFunctionComponent() {
  const [tomAndJerry] = useState<TomAndJerryTreeCell>(new TomAndJerryTreeCell());
  const [name] = useCellState(() => tomAndJerry.name);
  const [kind] = useCellState(() => tomAndJerry.kind);
  const [full] = useCellState(() => tomAndJerry.full);

  const nameRef = useRef<HTMLInputElement>(null);
  const kindRef = useRef<HTMLInputElement>(null);

  const applyField = (field: 'name' | 'kind') => {
    let value;
    switch (field) {
      case 'name':
        value = nameRef.current?.value;
        break;
      case 'kind':
        value = kindRef.current?.value;
        break;
    }
    if (value !== undefined)
      tomAndJerry[field] = value;
  }

  const applyAll = () => {
    applyField('name');
    applyField('kind');
  }

  return (
    <div>
      <h3>TomAndJerry, React function component, tree-cell</h3>
      <p>
        <span>renderCount: <b className={style.renderCount}>{++renderCount}</b></span>
      </p>
      <table>
        <tbody>
        <tr>
          <td>name</td>
          <td>
            <input type="text" defaultValue={name} ref={nameRef}></input>&nbsp;
            <button onClick={() => applyField('name')}>apply</button>
          </td>
          <td><b>{name}</b></td>
        </tr>
        <tr>
          <td>kind</td>
          <td>
            <input type="text" defaultValue={kind} ref={kindRef}></input>&nbsp;
            <button onClick={() => applyField('kind')}>apply</button>
          </td>
          <td><b>{kind}</b></td>
        </tr>
        <tr>
          <td>full</td>
          <td>&nbsp;</td>
          <td><b>{full}</b></td>
        </tr>
        </tbody>
      </table>
      <p>
        <button onClick={() => applyAll()}>apply all changes</button>
      </p>
    </div>
  );
}
