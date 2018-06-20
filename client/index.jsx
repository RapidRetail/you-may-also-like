import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RelatedItemList from './components/RelatedItemList';

class YouMayAlsoLike extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      relateditems: [],
      productId: window.location.pathname.split('/')[2]
    };
  }

  componentDidMount () {
    axios.get(`/product/${this.state.productId}/related`)
      .then((response) => {
        this.setState({
          relateditems: response.data
        });
      })
      .catch((error) => {
        console.log('your get has an error', error);
      });
  }

  render () {
    return (
      <div>
        <div className="related-wrapper">
          <div>
            <h1 className="you-may-header">You may also like</h1>
          </div>
          <RelatedItemList items={this.state.relateditems} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<YouMayAlsoLike />, document.getElementById('you-may-also-like'));
