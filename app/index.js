import 'react-native-reanimated';
import { View, ScrollView, SafeAreaView, Text, } from 'react-native'
import React, { useState } from 'react'
import { Stack, useRouter } from 'expo-router'
import { COLORS, icons, images, SIZES } from "../constants/index"
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'
console.log("hello from app index js outside")
const Home = () => {
    const router = useRouter();
    const [searchTerm,setSearchTerm]=useState("")
    console.log("hello from app index js inside")
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimention='60%' />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimention='100%' />
                    ),
                    headerTitle: "Home",
                    headerTitleAlign: "center",
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() => {
                            if(searchTerm){
                                router.push(`/search/${searchTerm}` )
                            }
                        }}
                    />
                    <Popularjobs />
                    <Nearbyjobs />


                </View>

            </ScrollView>


        </SafeAreaView>
    )
}

export default Home

