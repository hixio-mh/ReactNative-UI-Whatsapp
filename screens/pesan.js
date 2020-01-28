import React from 'react';
import { Container, Separator, Fab, Header, Tab, Tabs, TabHeading, Icon, Text, Left, Right, Title, Button, Body, ListItem, Thumbnail, List, Content } from 'native-base';

import ChatJSON from "../assets/database/chats";

export default class PesanScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          active: false,
          chats: ChatJSON
        };
    }
    render() {
      return (
        <Container>
              <Content>
                <List>
                { this.state.chats.map((_chats,key) => (
                  <ListItem key={key} avatar>
                    <Left>
                      <Thumbnail source={{ uri: _chats.poto }} />
                    </Left>
                    <Body>
                      <Text>{_chats.from}</Text>
                      <Text note>{_chats.message}</Text>
                    </Body>
                    <Right>
                      <Text note>{_chats.time}</Text>
                    </Right>
                  </ListItem>
                )) }
                </List>
              </Content>
            </Container>
      );
    }
  }