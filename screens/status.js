import React from 'react';
import { AppLoading } from 'expo';
import { Container, Separator, Fab, Header, Tab, Tabs, TabHeading, Icon, Text, Left, Right, Title, Button, Body, ListItem, Thumbnail, List, Content } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default class StatusScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          active: false
        };
    }
    render() {
      return (
        <Container>
              <Content>
                <List>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={require('/project react/whatsapp_baru/image/avatar.jpg')} />
                    </Left>
                    <Body>
                      <Text>Status saya</Text>
                      <Text note>Ketuk Untuk Membuat Status</Text>
                    </Body>
                  </ListItem>
                </List>
                <ListItem itemDivider style={{ marginTop: 5 }}>
                  <Left>
                    <Text note>Pembaruan terkini</Text>
                  </Left>
                </ListItem>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={require('/project react/whatsapp_baru/image/avatar.jpg')} />
                  </Left>
                  <Body>
                    <Text>Ijul</Text>
                    <Text note>5 menit yang lalu</Text>
                  </Body>
                </ListItem>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={require('/project react/whatsapp_baru/image/avatar.jpg')} />
                  </Left>
                  <Body>
                    <Text>Ajon</Text>
                    <Text note>10 menit yang lalu</Text>
                  </Body>
                </ListItem>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={require('/project react/whatsapp_baru/image/avatar.jpg')} />
                  </Left>
                  <Body>
                    <Text>Nujul</Text>
                    <Text note>25 menit yang lalu</Text>
                  </Body>
                </ListItem>
                <ListItem itemDivider style={{ marginTop: 5 }}>
                  <Left>
                    <Text note>Pembaruan yang telah dilihat</Text>
                  </Left>
                </ListItem>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={require('/project react/whatsapp_baru/image/avatar.jpg')} />
                  </Left>
                  <Body>
                    <Text>Ajon</Text>
                    <Text note>10 menit yang lalu</Text>
                  </Body>
                </ListItem>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={require('/project react/whatsapp_baru/image/avatar.jpg')} />
                  </Left>
                  <Body>
                    <Text>Nujul</Text>
                    <Text note>25 menit yang lalu</Text>
                  </Body>
                </ListItem>
              </Content>
            <Fab
              style={{ backgroundColor: '#F4F4F4', marginBottom: 65, height: 50, width: 50 }}
              position="bottomRight">
              <Icon name="create" style={{ color: 'black' }} />
            </Fab>
            <Fab
              style={{ backgroundColor: '#25D366' }}
              position="bottomRight">
              <Icon name="camera" />
            </Fab> 
            </Container>
      );
    }
  }