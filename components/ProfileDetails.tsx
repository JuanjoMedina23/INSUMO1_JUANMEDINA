import React from 'react'
import { Image, Text, View } from 'react-native'
import IconButton from './ui/IconButton'


const ProfileDetails = () => {
    return (
        <View className='flex-col items-center'>
            <Image
                source={require("@/assets/images/icon.png")}
                className='max-w-36 max-h-36 rounded-full'
            />

            <Text className='text-2xl font-bold'>Milton Velasquez</Text>
            <Text className='text-xl text-gray-400 font-bold'>Software Engineer</Text>
            <IconButton iconName='logo-instagram'></IconButton>
            <IconButton iconName='logo-facebook'></IconButton>
            <IconButton iconName='logo-whatsapp'></IconButton>
            <IconButton iconName='logo-linkedin'></IconButton>

        </View>
    )
}

export default ProfileDetails