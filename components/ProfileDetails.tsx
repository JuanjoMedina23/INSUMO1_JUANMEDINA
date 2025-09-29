import React from 'react';
import { Image, View, Linking } from 'react-native';
import CustomText from './ui/CustomText';
import IconButton from './ui/IconButton';

const ProfileDetails = () => {
    const openInstagram = () => {
        Linking.openURL('https://www.instagram.com');
    };

    const openFacebook = () => {
        Linking.openURL('https://www.facebook.com');
    };

    const openWhatsapp = () => {
        Linking.openURL('https://whatsapp.com');
    };

    const openLinkedin = () => {
        Linking.openURL('https://www.linkedin.com');
    };

    return (
        <View className='flex-col items-center'>
            <Image
                source={require("@/assets/images/messi_meme.jpg")}
                className='max-w-36 max-h-36 rounded-full'
            />

            <CustomText variant='title' value="JUAN JOSÉ MEDINA" />
            <CustomText variant='subtitle' value="el real react native" />
            
            <View className='flex-row justify-center space-x-4 mt-4'>
                <IconButton iconName='logo-instagram' color="#E4405F" presionar={openInstagram} />
                <IconButton iconName='logo-facebook' color="#1877F2" presionar={openFacebook} />
                <IconButton iconName='logo-whatsapp' color="#25D366" presionar={openWhatsapp} />
                <IconButton iconName='logo-linkedin' color="#0077B5" presionar={openLinkedin} />
            </View>

            <View className="w-full bg-neutral-800 rounded-t-3xl p-6 mt-6">
              <CustomText variant="subtitle" value="Skills" />
              <View className="flex-row space-x-3 mt-2">
                <View className="bg-neutral-700 px-4 py-2 rounded-xl">
                  <CustomText variant="xd" value="Xd" />
                </View>
                <View className="bg-neutral-700 px-4 py-2 rounded-xl">
                  <CustomText variant="ai" value="Ai" />
                </View>
                <View className="bg-neutral-700 px-4 py-2 rounded-xl">
                  <CustomText variant="ps" value="Ps" />
                </View>
                <View className="bg-neutral-700 px-4 py-2 rounded-xl">
                  <CustomText variant="ae" value="Ae" />
                </View>
              </View>
              <View className="mt-6">
                <CustomText variant="pro" value="Profesion" />
                <CustomText variant="profe" value="Eso tilin vaya tilin" />
              </View>
              <View className="mt-6">
                <CustomText variant="subtitle" value="Experiencia" />
                <View className="bg-neutral-700 p-4 mt-2 rounded-2xl">
                  <CustomText variant="profe" value="Disenador de logos" />
                  <CustomText variant="profe" value="Adriana salte 🗿🗿🗿🗿 " />
                </View>
              </View>
            </View>
    </View>
  );
 
};

export default ProfileDetails;
