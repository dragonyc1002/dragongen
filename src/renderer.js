import React from 'react';
import avatar_dragon from './asset/avatar-dragon.png';
import avatar_emu800jpn from './asset/avatar-emu800jpn.png';
import avatar_emu900 from './asset/avatar-emu900.png';
import {
  DiscordMessages,
  DiscordMessage,
  DiscordAttachment,
  DiscordMention
} from "@skyra/discord-components-react";

const avatar = {
  dragon: avatar_dragon,
  emu800jpn: avatar_emu800jpn,
  emu900: avatar_emu900
}

export default function Renderer(props) {
  return (
    <DiscordMessages style={{ minHeight: '90px' }} light-theme={props.light} id="renderer">
      <DiscordMessage
        author={props.name}
        avatar={avatar[props.avatar]}
        roleColor={props.color}
        timestamp={props.timestamp}
      >
        {""}
        {props.content}
        <div>
        {
        /\.(bmp|jpe?g|png|gif|webp|tiff)$/i.test(props.attachment) ?
          <DiscordAttachment
            slot="attachments"
            url={props.attachment}
            style={{ maxWidth: '256px' }}
            alt="attachment"
          /> : ""
        }
        </div>
      </DiscordMessage>
    </DiscordMessages>
  );
}
