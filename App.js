import React from 'react';
import { AppLoading } from 'expo';
import { Container, Separator, Fab, Header, Tab, Tabs, TabHeading, Icon, Text, Left, Right, Title, Button, Body, ListItem, Thumbnail, List, Content } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import CameraScreen from './image/camera';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Header androidStatusBarColor="#075e54" style={{ backgroundColor: "#075e54" }}>
          <Body >
            <Title>WhatsApp</Title>
          </Body>
          <Right >
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
        <Tabs tabContainerStyle={{elevation: 0}}>

          {/* ************************CAMERA************************** */}

          <Tab heading={<TabHeading style={{ backgroundColor: "#075e54" }}><Icon name="camera" /></TabHeading>}>
            <CameraScreen />
          </Tab>

          {/* ******************CHAT********************* */}
          <Tab heading={<TabHeading style={{ backgroundColor: "#075e54" }}><Text>Chat</Text></TabHeading>}>
            <Container>
              <Content>
                <List>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={require('/project react/whatsapp_baru/image/avatar.jpg')} />
                    </Left>
                    <Body>
                      <Text>Andrea</Text>
                      <Text note>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right>
                      <Text note>3:43 pm</Text>
                    </Right>
                  </ListItem>
                </List>
                <List>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={require('/project react/whatsapp_baru/image/avatar.jpg')} />
                    </Left>
                    <Body>
                      <Text>Andrea</Text>
                      <Text note>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right>
                      <Text note>3:43 pm</Text>
                    </Right>
                  </ListItem>
                </List>
                <List>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={require('/project react/whatsapp_baru/image/avatar.jpg')} />
                    </Left>
                    <Body>
                      <Text>Andrea</Text>
                      <Text note>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right>
                      <Text note>3:43 pm</Text>
                    </Right>
                  </ListItem>
                </List>
                <List>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={require('/project react/whatsapp_baru/image/avatar.jpg')} />
                    </Left>
                    <Body>
                      <Text>Andrea</Text>
                      <Text note>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right>
                      <Text note>3:43 pm</Text>
                    </Right>
                  </ListItem>
                </List>
                <List>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={require('/project react/whatsapp_baru/image/avatar.jpg')} />
                    </Left>
                    <Body>
                      <Text>Andrea</Text>
                      <Text note>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right>
                      <Text note>3:43 pm</Text>
                    </Right>
                  </ListItem>
                </List>
                <List>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={require('/project react/whatsapp_baru/image/avatar.jpg')} />
                    </Left>
                    <Body>
                      <Text>Andrea</Text>
                      <Text note>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right>
                      <Text note>3:43 pm</Text>
                    </Right>
                  </ListItem>
                </List>
              </Content>
            </Container>
            <Fab
              active={this.state.active}
              direction="up"
              containerStyle={{}}
              style={{ backgroundColor: '#25D366' }}
              position="bottomRight"
              onPress={() => this.setState({ active: !this.state.active })}>
              <Icon name="chatboxes" />
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
          </Tab>

          {/* ************************STATUS************************ */}
          <Tab heading={<TabHeading style={{ backgroundColor: "#075e54" }}><Text>Status</Text></TabHeading>}>
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
            </Container>
            <Fab
              style={{ backgroundColor: '#F4F4F4', marginBottom:65, height:50, width:50 }}
              position="bottomRight">
              <Icon name="create" style={{color:'black'}}/>
            </Fab>
            <Fab
              style={{ backgroundColor: '#25D366' }}
              position="bottomRight">
              <Icon name="camera" />
            </Fab>
          </Tab>


          {/* *************************PANGGILAN************************ */}
          <Tab heading={<TabHeading style={{ backgroundColor: "#075e54" }}><Text>Call</Text></TabHeading>}>
            <Container>
              <Content>
                <List>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail source={require('/project react/whatsapp_baru/image/avatar.jpg')} />
                    </Left>
                    <Body>
                      <Text>Sankhadeep</Text>
                      <Text note numberOfLines={1}><Icon name="redo" style={{color:'green'}}/> Kemarin 19.14</Text>
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
                      <Text note numberOfLines={1}><Icon name="undo" style={{color:'red'}}/> Kemarin 20.20</Text>
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
                      <Text note numberOfLines={1}><Icon name="redo" style={{color:'green'}}/> Kemarin 17.20</Text>
                    </Body>
                    <Right>
                      <Button transparent>
                        <Icon name="call" />
                      </Button>
                    </Right>
                  </ListItem>
                </List>
              </Content>
            </Container>
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
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
