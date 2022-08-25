// @formatter:off
import {IEntry} from '@do-while-for-each/browser-router';
import {IndexPage, TomAndJerryTreeCellClassComponent, TomAndJerryMobxFnComponent,NoCellSomeDataClassComponent} from '../page';


export const routes: IEntry[] = [
  {segment: '', component: <IndexPage/>},
  {segment: 'cellstate-no-cell-some-data', component: <NoCellSomeDataClassComponent/>},
  {segment: 'tom-and-jerry-class-tree-cell', component: <TomAndJerryTreeCellClassComponent/>},
  {segment: 'tom-and-jerry-mobx', component: <TomAndJerryMobxFnComponent/>},
];
