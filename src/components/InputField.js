import * as React from 'react';
import {Image, TextInput, View} from 'react-native';
import {icons, responsive, textColor} from 'src/constants';

const Input = ({placeHolder, handleInputText, icon, ...props}) => {
  return (
    <View
      {...props}
      style={{
        ...props.style,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 25,
      }}>
      <Image
        resizeMode="cover"
        source={icons.searchIcon}
        style={{width: 20, height: 20, tintColor: textColor.grey}}
      />
      <TextInput
        style={{
          flex: 1,
          paddingLeft: responsive.width(10),
        }}
        underlineColorAndroid="transparent"
        // onChangeText={text => handleInputText(text)}
        placeholder={placeHolder}
        placeholderTextColor={textColor.grey}
      />
    </View>
  );
};

export default Input;
