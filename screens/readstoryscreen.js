import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import db from '../config';

export default class ReadStoryScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            searchText: '',
            allStories: [],
            selectStories: [],
        }
    }

    didComponentMount(){
        this.state.selectStories.push(this.state.allStories);
    }


    retrieveStories = (text) => {
        this.setState({
            searchText: text,
            allStories: []
        });

        db.collection("stories")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.state.allStories.push(doc.data());
                });
            });

        this.filterData();
    }

    filterData() {
        if (this.searchText !== '') {
            var index = 0;

            for (var k in this.state.allStories) {
                if (this.state.allStories[k].Title.slice(0, this.state.searchText.length) === this.state.searchText) {
                    this.state.selectStories.push(this.state.allStories[k]);

                    console.log(this.state.selectStories);
                }
            }
        }
        else{
            this.state.selectStories.push(this.state.allStories);
        }
    }

    render() {
        return (
            <View>
                <View>
                    <SearchBar
                        placeholder={'Type here...'}
                        onChangeText={text => this.retrieveStories(text)}
                        value={this.state.searchText} />
                </View>

                <View>
                    {this.state.selectStories.map((element) => {
                        return (
                            <View>
                                <Text>
                                    {element.Title}
                                </Text>
                            </View>
                        );
                    })
                    }
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
});