import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native'
const image = { uri: "https://picsum.photos/200/300" };
export default class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
    render() {
        return (
            <View>
                <View style={styles.storyCard}>

                    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                        <Image
                            style={styles.avatar}
                            source={{ uri: "https://picsum.photos/200" }}>
                        </Image>

                        <Text style={styles.username}>{this.props.username}</Text>

                    </ImageBackground>
                </View>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    storyCard: {
        width: 100,
        height: 170
    },

    avatar: {
        width: 35,
        height: 35,
        borderRadius: 50,
        borderColor: "white",
        alignSelf: "center",
        borderWidth: 1,
        marginTop: 110
    },
    image: {
        flex: 1,
        justifyContent: "center",
        borderRadius:10,
        overflow:"hidden"
    },
    username: {
        color: "white",
        alignSelf: "center",
        fontWeight:"bold",
        marginTop: 2,
        fontSize:12
    }
})