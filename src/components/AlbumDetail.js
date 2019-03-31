import React from "react";
import { View, Text, Image, StyleSheet, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button2 from "./Button2";
const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const {
    thumbnailContainer,
    textContainer,
    headerTextStyle,
    imageContainer,
    buttonStyle,
    textStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View>
          <Image style={thumbnailContainer} source={{ uri: thumbnail_image }} />
        </View>
        <View style={textContainer}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={imageContainer} source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button2 onPress={ () => Linking.openURL(url)}>
        Buy Now
        </Button2>
      </CardSection>

    </Card>
  );
};
const styles = StyleSheet.create({
  thumbnailContainer: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageContainer: {
    height: 300,
    flex: 1,
    width: null,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  }
});

export default AlbumDetail;

// < CardItem >
// { props.album.title }
//     </CardItem >
// <CardItem>
//   Image
//     </CardItem>
// <CardItem>
//   <Button />>

//     </CardItem>
