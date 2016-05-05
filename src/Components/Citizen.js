import React from 'react';
import ReactDOM from 'react-dom';

class Citizen extends React.Component {
  constructor() {
    super();

    this.state = {imageExpanded: false, firstLoad: true};

    this.toggleImage = this.toggleImage.bind(this);
  }

  render() {
    const ctzn = this.props.citizen;

    const hometown = ctzn.hometown === 'Unknown' ? 'an unknown location' : ctzn.hometown;
    const year = ctzn.year_acquired === '0' ? 'an unknown year' : ctzn.year_acquired;

    let classes;

    if (this.state.firstLoad) {
      classes = "image";
    } else if (this.state.imageExpanded && !this.state.firstLoad) {
      classes = "image large-image";
    } else if (!this.state.imageExpanded && !this.state.firstLoad) {
      classes = "image small-image";
    }

    return <div className="citizen">
      <img src={ctzn.image_url}
        className={classes}
        onClick={this.toggleImage} />
      <span className='citizen-name'>{ctzn.name}</span>
      <span className='citizen-character'>{ctzn.character}</span>
      <span className='citizen-birth-info'>Born in {hometown} in {year}</span>
      <hr />
      <span className='citizen-description'>{ctzn.description}</span>
    </div>
  }

  toggleImage(e) {
    this.setState({
      imageExpanded: !this.state.imageExpanded,
      firstLoad: false
    });
  }
}

export default Citizen;
