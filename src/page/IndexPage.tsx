import {Link} from '@do-while-for-each/browser-router-react-tools'

export const IndexPage = () => {

  return (
    <div>
      <p>
        <b>cellState</b>
        <br/>
        <Link href="/cellstate-no-cell-some-data">no cell, some data</Link><br/><br/>
      </p>
      <Link href="/tom-and-jerry-class-tree-cell">TomAndJerry React.PureComponent (tree-cell)</Link><br/><br/>
      <Link href="/tom-and-jerry-mobx">TomAndJerry (mobx)</Link><br/><br/>
    </div>
  )
}
