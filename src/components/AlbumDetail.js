import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image } = album;
  const { thumbnailContainer, textContainer, headerTextStyle } = styles;

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
