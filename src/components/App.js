import React,{Component} from 'react';
import Header from './Header';
import Content from './Content';
import RandomNumber from './RandomNumber'
/*
  props는 parent(App)에서 child(RandomNumber)로 보내는 값.
*/
class App extends Component {

  render(){
    return (
      <div>
        <Header title={this.props.headerTitle} />
        <Content
          title={this.props.contentTitle}
          body={this.props.contentBody}
        />
        <RandomNumber />

      </div>
    );
  }
}

App.defaulProps = {
  headerTitle:'Default header',
  contentTitle:'Default contentTitle',
  contentBody:'Default contentBody'
}

export default App;
