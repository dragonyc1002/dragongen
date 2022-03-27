import React from 'react';

// Message Renderer
import Renderer from './renderer.js';

// Inputs
import ContentInput from './components/contentInput.js';
import AvatarInput from './components/avatarInput.js';
import ColorInput from './components/colorInput.js';
import TimestampInput from './components/timestampInput.js';
import LightInput from './components/lightInput.js';
import AttachmentInput from './components/attachmentInput.js';
import NameInput from './components/nameInput.js';

// Default Settings
import config from './default.json';

Array.prototype.random = function() {
  return this[~~(Math.random() * this.length)];
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAvatarChange = this.handleAvatarChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleTimestampChange = this.handleTimestampChange.bind(this);
    this.handleAttachmentChange = this.handleAttachmentChange.bind(this);
    this.handleEnableLightTheme = this.handleEnableLightTheme.bind(this);

    const now = new Date();
    this.state = {
      content: config.content.random(),
      name: '恐龍',
      avatar: 'emu1200final',
      color: '#52cf52',
      timestamp: `${now.getFullYear()}/${now.getMonth()+1}/${now.getDate()}`,
      attachment: config.attachments.random(),
      light: false
    }

  }

  handleContentChange(value) {
    this.setState({ content: value });
  }

  handleNameChange(value) {
    this.setState({ name: value });
  }

  handleAvatarChange(value) {
    this.setState({ avatar: value });
  }

  handleColorChange(value) {
    this.setState({ color: value });
  }

  handleTimestampChange(value) {
    this.setState({ timestamp: value });
  }

  handleAttachmentChange(value) {
    this.setState({ attachment: value });
  }

  handleEnableLightTheme(value) {
    this.setState({ light: value });
  }

  render() {
    const { content, avatar, name, color, timestamp, attachment, light } = this.state;

    return (
      <React.Fragment>
        <header style={{
          display: 'flex',
          flexDirection: 'row',
          margin: '20px',
          paddingTop: '10px',
          lineHeight: '60px'
        }}>
          <div style={{ fontWeight: 'bold', fontSize: '40px', width: '500px' }}>恐龍 訊息產生器</div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: 'calc(100vw - 500px)' }}>
            <a href="https://github.com/hugocoding/dragongen">原始碼</a>
          </div>
        </header>
        <div style={{ margin: '30px 0' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '100%'
          }} className="column">
            <LightInput default={light} onCheckChange={this.handleEnableLightTheme}/>
            <ColorInput default={color} onColorChange={this.handleColorChange}/>
            <NameInput default={name} onNameChange={this.handleNameChange} />
            <AvatarInput default={avatar} onAvatarChange={this.handleAvatarChange} />
            <TimestampInput default={timestamp} onTimestampChange={this.handleTimestampChange} />
          </div>
          <div style={{ margin: '10px' }}>
            <AttachmentInput url={attachment} onAttachmentChange={this.handleAttachmentChange} />
          </div>
          <div style={{ margin: '10px' }}>
            <ContentInput content={content} onContentChange={this.handleContentChange} />
          </div>
        </div>
        <hr />
        <Renderer
          name={name}
          content={content}
          avatar={avatar}
          color={color}
          timestamp={timestamp}
          light={light}
          attachment={attachment}
        />
      </React.Fragment>
    );
  }
}

export default App;
