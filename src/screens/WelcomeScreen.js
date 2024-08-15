import React, { Component, useEffect } from 'react'
import { Text, View,Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';



export default function WelcomeScreen() {

  const navigation = useNavigation();

  useEffect(()=>{

    setTimeout(()=> navigation.navigate('Home'),2500)
  },[])
  
    return (
      <View className="bg-amber-500 flex-1 justify-center items-center space-y-10">
      <StatusBar style="light" />


        {/* Logo Images */}
        <View className="bg-white/20 rounded-full" style={{padding:hp(5.5)}}>
            <View className="bg-white/20 rounded-full" style={{padding:hp(5)}}>
              <Image source={require('../../src/assets/images/sai.png')}  
              style={{width:hp(15),height:hp(15)}}
              />
              
            </View>
        </View>

        {/* Title and line */}
        <View className="flex items-center space-y-2" >
            <Text style={{fontSize:hp(5)}} className="font-bold  text-white tracking-widest">
                  Sairam
            </Text>
            
            <Text style={{fontSize:hp(2)}} className="font-medium  text-[#adff2f] tracking-widest">
              May Sai Bless Us All
            </Text>
        </View>


      </View>
    )
  }


