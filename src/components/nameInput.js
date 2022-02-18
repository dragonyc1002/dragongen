import React from 'react';

class NameInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onNameChange(e.target.value);
  }

  render() {
    return (
      <fieldset>
        <legend>名稱</legend>
        <select onChange={this.handleChange}>
          <option value="恐龍">恐龍</option>
          <option value="Hugo龍">Hugo龍</option>
          <option value="AC0xRPFS004">AC0xRPFS004</option>
        </select>
      </fieldset>
    )
  }
}

export default NameInput;
