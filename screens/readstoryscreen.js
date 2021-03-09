import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

import db from '../config';
import firebase from 'firebase';

export default class ReadStoryScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            searchText: '',
            allStories: [],
            selectStories: [],
        }
    }

    componentDidMount() {
        this.getData();
        //this.filterData(this.state.searchText);
    }

    getData() {
        this.setState({
            allStories: [],
        });

        db.collection("stories")
            .onSnapshot((snapshot) => {
                snapshot.forEach((doc) => {
                    var data = doc.data();

                    this.state.allStories.push(data);
                    this.state.selectStories.push(data);
                });
            });

        this.mapper();

        console.log(this.state.selectStories);
    }

    filterData(text) {
        const newData = this.state.allStories.filter((item) => {
            const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            selectStories: newData,
            searchText: text,
        });
    }

    mapper = () => {
        if (this.state.searchText !== '') {
            return this.state.selectStories.map((element) => {
                return (
                    <View>
                        <Text>
                            {element.title}
                        </Text>
                    </View>
                );
            })
        }
        else {
            return this.state.allStories.map((element) => {
                return (
                    <View>
                        <Text>
                            {element.title}
                        </Text>
                    </View>
                );
            })
        }
    }

    render() {
        return (
            <View>
                <View>
                    <SearchBar
                        placeholder={'Type here...'}
                        onChangeText={(text) => {
                            this.filterData(text);
                        }}
                        value={this.state.searchText} />
                </View>
                <View>
                    {this.mapper()}
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({});