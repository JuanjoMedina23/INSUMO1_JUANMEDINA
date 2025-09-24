//Importaciones
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Pressable } from 'react-native';
//Interfaces
interface IconButtonProps{
    presionar?: () => void;//FUncion que se ejecuta al presionar el boton
    iconName:string;//Nombre del icono
    color?:string;//Color del icono (?: opcional)
}
//Principal
const IconButton = ({iconName,presionar}:IconButtonProps) => {
  return (
    <Pressable onPress={presionar}>
        <Ionicons 
            name={iconName as any}
            size={24} 
            color="black" 
        />
    </Pressable>
  )
}
//export
export default IconButton
//funciones complentarias