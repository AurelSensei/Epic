import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon,
} from 'native-base';
import PropTypes from 'prop-types';

class CardComponent extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {isLoading: true, dataSource: []};
  }
  componentDidMount() {
    this._isMounted = true;
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Client-ID 0b4c3d4478952bc');

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    return fetch(
      'https://api.imgur.com/3/gallery/hot/top/1?showViral=true',
      requestOptions,
    )
      .then(response => response.json())
      .then(responseJson => {
        if (this._isMounted) {
          this.setState({isLoading: false, dataSource: responseJson.data});
        }
      })
      .catch(error => console.log('error', error));
  }
  /*shouldComponentUpdate(nextProps) {
    const differentTitle = this.props.title !== nextProps.title;
    const differentDone = this.props.done !== nextProps.done;
    return differentTitle || differentDone;
  }*/
  renderItem = ({item, index}) => {
    let {images} = item;
    console.log('Test');
    if (!images[0]) {
      return null;
    }
    if (images[0] !== undefined) {
      let details = images[0];
      console.log(details);
      return (
        <View>
          <Card>
            <CardItem>
              <Left>
                {/*<Thumbnail source={{uri: this.state.dataSource}} />*/}
                <Body>
                  <Text>Varun</Text>
                  <Text note>lolo</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{uri: details.link}}
                style={{height: 200, width: null, flex: 1}}
              />
            </CardItem>
          </Card>
          {/*<Button
            title="truc"
            onPress={() => {
              console.log(getHotGallery());
            }}
          />*/}
        </View>
      );
    }
  };

  keyExtractor = (item, index) => {
    return index.toString();
  };
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </ScrollView>
    );
  }
}
//var table = getHotGallery();
{
  /*async function getHotGallery() {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', 'Client-ID 0b4c3d4478952bc');

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  return await fetch(
    'https://api.imgur.com/3/gallery/hot/top/1?showViral=true',
    requestOptions,
  )
    .then(response => response.json())
    .then(result => console.log(result.data.id))
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => console.log('error', error));
}*/
}

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
