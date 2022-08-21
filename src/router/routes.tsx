// @formatter:off
import {IEntry} from '@do-while-for-each/browser-router';
import {IndexPage, ForClass} from '../page';


export const routes: IEntry[] = [
  {segment: '', component: <IndexPage/>},
  {segment: 'for-class', component: <ForClass/>},
];
