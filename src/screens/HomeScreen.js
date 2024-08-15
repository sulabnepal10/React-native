import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Todo from '../components/Todo';

export default function HomeScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar style="dark" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50 }}
                style={{ paddingTop: hp(5) }} // Adjusting top padding to 5% from screen top
            >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: wp(4), marginBottom: hp(2) }}>
                    {/* Main Image on the Left */}
                    <Image
                        source={require('../../src/assets/images/sai.png')}
                        style={{ height: hp(10), width: hp(10.5), borderRadius: hp(20) }}
                    />
                    
                    {/* Text and Icon on the Right */}
                    <View style={{ alignItems: 'flex-end' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: hp(1) }}>
                            <Text style={{ fontSize: hp(2.0), color: '#4A4A4A', marginRight: wp(2) }}>
                                Hello Sairam!!
                            </Text>
                            <Image
                                source={require('../../src/assets/images/namaste.png')}
                                style={{ height: hp(4), width: hp(4), borderRadius: hp(10) }}
                            />
                        </View>
                        <Text style={{ fontSize: hp(2.8), fontWeight: '600', color: '#4A4A4A' }}>
                            Trust in sai for everything
                        </Text>
                    </View>
                </View>

                {/* Todo App */}
                <View>
                    <Todo />
                </View>
            </ScrollView>
        </View>
    );
}
