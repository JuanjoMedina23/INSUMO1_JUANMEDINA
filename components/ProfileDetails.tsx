import React from 'react'
import { Image, View } from 'react-native'
import CustomText from './ui/CustomText'
import IconButton from './ui/IconButton'


const ProfileDetails = () => {
    return (
        <View className='flex-col items-center'>
            <Image
                source={require("@/assets/images/icon.png")}
                className='max-w-36 max-h-36 rounded-full'
            />

            <CustomText variant='title' value="Milton Velasquez"/>
            <CustomText variant='subtitle' value="Profesor"/>
            
            
            <IconButton iconName='logo-instagram'></IconButton>
            <IconButton iconName='logo-facebook'></IconButton>
            <IconButton iconName='logo-whatsapp'></IconButton>
            <IconButton iconName='logo-linkedin'></IconButton>

        </View>
    )
}

export default ProfileDetails