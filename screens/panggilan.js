import React from 'react';
import { AppLoading } from 'expo';
import { Container, Separator, Fab, Header, Tab, Tabs, TabHeading, Icon, Text, Left, Right, Title, Button, Body, ListItem, Thumbnail, List, Content } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default class PanggilanScreen extends React.Component {
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
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail source={require('/project react/whatsapp_baru/image/avatar.jpg')} />
                    </Left>
                    <Body>
                      <Text>Sankhadeep</Text>
                      <Text note numberOfLines={1}><Icon name="redo" style={{ color: 'green' }} /> Kemarin 19.14</Text>
                    </Body>
                    <Right>
                      <Button transparent>
                        <Icon name="call" />
                      </Button>
                    </Right>
                  </ListItem>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail source={require('/project react/whatsapp_baru/image/avatar.jpg')} />
                    </Left>
                    <Body>
                      <Text>Sankhadeep</Text>
                      <Text note numberOfLines={1}><Icon name="undo" style={{ color: 'red' }} /> Kemarin 20.20</Text>
                    </Body>
                    <Right>
                      <Button transparent>
                        <Icon name="videocam" />
                      </Button>
                    </Right>
                  </ListItem>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail source={require('/project react/whatsapp_baru/image/avatar.jpg')} />
                    </Left>
                    <Body>
                      <Text>Sankhadeep</Text>
                      <Text note numberOfLines={1}><Icon name="redo" style={{ color: 'green' }} /> Kemarin 17.20</Text>
                    </Body>
                    <Right>
                      <Button transparent>
                        <Icon name="call" />
                      </Button>
                    </Right>
                  </ListItem>
                </List>
              </Content>
              <Fab
              active={this.state.active}
              direction="up"
              containerStyle={{}}
              style={{ backgroundColor: '#25D366' }}
              position="bottomRight"
              onPress={() => this.setState({ active: !this.state.active })}>
              <Icon name="call" />
              <Button style={{ backgroundColor: '#34A34F' }}>
                <Icon name="logo-whatsapp" />
              </Button>
              <Button style={{ backgroundColor: '#3B5998' }}>
                <Icon name="logo-facebook" />
              </Button>
              <Button disabled style={{ backgroundColor: '#DD5144' }}>
                <Icon name="mail" />
              </Button>
            </Fab>
        </Container>   
      );
    }
  }