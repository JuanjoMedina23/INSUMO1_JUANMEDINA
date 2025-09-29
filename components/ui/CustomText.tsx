import React from 'react';
import { Text } from 'react-native';

interface CustomTextProps
{
    value: string;
    variant?: "normal"|"subtitle"|"title"|"skills"|"xd"|"ai"|"ps"|"ae"|"pro"|"profe";
}
const CustomText = ({value,variant="normal"}:CustomTextProps) => {
  return (
    <Text className={selectVariant(variant)}>
        {value}
    </Text>
  )
}
export default CustomText

function selectVariant(variant:string):string
{
    switch(variant){
        case "normal":
            return "text-black font-normal"
        case "subtitle":
            return "text-gray-400 font-normal text-xl"
        case "title":
            return "text-black font-bold text-2xl text-center"
        case "skills":
            return "text-blue-500 font-bold text-2xl"
        case "xd":
            return "text-purple-500 font-bold text-2xl"
        case "ai":
            return "text-orange-500 font-bold text-2xl"
        case "ps":
            return "text-blue-500 font-bold text-2xl"
        case "ae":
            return "text-purple-500 font-bold text-2xl"
        case "pro":
            return "text-blue-500 font-bold text-2xl"
        case "profe":
            return "text-blue-500 font-bold "
        default:
            return "text-black font-normal"
    }
}