import {Header, Main} from '../index';
import './GeneralTemplate.css'

export const GeneralTemplate = (props: any) => {

  return (
    <div className="general-tmpl">
      <Header/>
      <Main>
        {props.children}
      </Main>
      {/*<Footer/>*/}
    </div>
  )
}
