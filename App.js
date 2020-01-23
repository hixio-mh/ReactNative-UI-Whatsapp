import React from 'react';
import { AppLoading } from 'expo';
import { Container, Separator, Fab, Header, Tab, Tabs, TabHeading, Icon, Text, Left, Right, Title, Button, Body, ListItem, Thumbnail, List, Content } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import CameraScreen from './screens/camera';
import PanggilanScreen from './screens/panggilan';
import StatusScreen from './screens/status';
import PesanScreen from './screens/pesan';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      active: false
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
        <Tabs tabContainerStyle={{ elevation: 0 }}>

          {/* ************************CAMERA************************** */}

          <Tab heading={<TabHeading style={{ backgroundColor: "#075e54" }}><Icon name="camera" /></TabHeading>}>
            <CameraScreen />
          </Tab>

          {/* ******************CHAT********************* */}
          <Tab heading={<TabHeading style={{ backgroundColor: "#075e54" }}><Text>Chat</Text></TabHeading>}>
            <PesanScreen  />
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
            <StatusScreen />
          </Tab>


          {/* *************************PANGGILAN************************ */}
          <Tab heading={<TabHeading style={{ backgroundColor: "#075e54" }}><Text>Call</Text></TabHeading>}>
          <PanggilanScreen />
          </Tab>

        </Tabs>
      </Container>
    );
  }
}
