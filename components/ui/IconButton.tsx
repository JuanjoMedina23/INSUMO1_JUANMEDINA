import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Pressable } from 'react-native';

interface IconButtonProps {
    presionar?: () => void; // Función que se ejecuta al presionar el botón
    iconName: string;       // Nombre del icono
    color?: string;         // Color del icono (opcional)
}

const IconButton = ({ iconName, presionar, color = "black" }: IconButtonProps) => {
    return (
        <Pressable onPress={presionar}>
            <Ionicons 
                name={iconName as any} 
                size={24} 
                color={color} 
            />
        </Pressable>
    )
}

export default IconButton;
