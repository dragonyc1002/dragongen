import React from 'react';

class AvatarInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onAvatarChange(e.target.value);
  }

  render() {
    return (
      <fieldset>
          <legend>頭像</legend>
          <select onChange={this.handleChange}>
            <option value="emu900">EMU900@泰安</option>
            <option value="dragon">恐龍</option>
            <option value="emu800jpn">EMU800四國</option>
          </select>
      </fieldset>
    )
  }
}

export default AvatarInput;
