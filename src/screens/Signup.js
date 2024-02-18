import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, Text } from "react-native";

// Formik
import { Formik } from "formik";
// Icons
import { Octicons } from '@expo/vector-icons';
// Datetimepicker
import DateTimePicker from '@react-native-community/datetimepicker';
// Keyboard avoiding view
import KeyboardAvoidingWrapper from "./../components/KeyboardAvoidingWrapper";

import {
    StyledContainer,
    InnerContainer,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledButton,
    ButtonText,
    Colors,
    PageLogo,
} from "../constants/styles";

import { TextInput } from "react-native-gesture-handler";

// Colors
const { LightGray} = Colors;

const Signup = ({navigation}) => {
    // set datetime show
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());
    
    // Actual Date of Birth
    const [dob, setDob] = useState(new Date());
    

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate); // เปลี่ยนจาก setDob(currentDate) เป็น setDob(new Date(currentDate))
    }
    const showDatePicker = () => {
        setShow(true);
    }

    return (
        <KeyboardAvoidingWrapper>
        <StyledContainer>
          <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../../assets/images/skinlogo.jpg')} /> 
                <SubTitle> สมัครสมาชิก </SubTitle>
                
        {show && (
            <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode='date'
            is24Hour={true}
            display="default" // เปลี่ยนจาก "default" เป็น "spinner" เป็น Style
            onChange={onChange}
        />       
        )}


                <Formik
                    initialValues={{
                                    firstname: '',
                                    lastname: '',
                                    id_card: '',
                                    phone: '',
                                    dateofBirth: '',
                                }}

                                onSubmit={(values) => {
                                    console.log(values);
                                    navigation.navigate('DeviceScene');
                                }}

                                validate={(values) => {
                                    const errors = {};
                                        if (!values.firstname.trim()) {
                                            errors.firstname = 'กรุณากรอกชื่อ';
                                        }

                                        if (!values.lastname.trim()) {
                                            errors.lastname = 'กรุณากรอกนามสกุล';
                                        }
                                
                                        if (!values.id_card.trim()) {
                                            errors.id_card = 'กรุณากรอกเลขบัตรประชาชน';
                                        } else if (values.id_card.trim().length !== 13) {
                                            errors.id_card = 'เลขบัตรประชาชนต้องมี 13 หลัก';
                                        }
                                
                                        if (!values.phone.trim()) {
                                            errors.phone = 'กรุณากรอกเบอร์โทรศัพท์';
                                        } else if (values.phone.trim().length !== 10) {
                                            errors.phone = 'เบอร์โทรศัพท์ต้องมี 10 หลัก';
                                        }
                                
                                        // Error Validation ของวันเกิด/ยังไม่ดักวันเกินว่าเกิดก่อนวันสมัคร

                                        // if (!values.dateofBirth.trim()) {
                                        //     errors.dateofBirth = 'กรุณาเลือกวันเกิด';
                                        // }
                                    return errors;
                                }}
                            >

                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (

                    <StyledFormArea>
                        {/* Text input ของ ชื่อ */}
                        <WordTextInput 
                            label="ชื่อ"
                            icon="person"
                            value={values.firstname}
                            onChangeText={handleChange('firstname')}
                            onBlur={handleBlur('firstname')}
                            error={errors.firstname}
                        />

                        {/* Text input ของ นามสกุล */}
                        <WordTextInput 
                            label="นามสกุล"
                            icon="person"
                            value={values.lastname}
                            onChangeText={handleChange('lastname')}
                            onBlur={handleBlur('lastname')}
                            error={errors.lastname}
                        />

                        {/* Text input ของ บัตรประชาชน */}
                        <NumberIDTextInput
                            label="บัตรประชาชน"
                            icon="credit-card"
                            value={values.id_card}
                            onChangeText={handleChange('id_card')}
                            onBlur={handleBlur('id_card')}
                            error={errors.id_card}
                        />

                        {/* Text input ของ เบอร์โทรศัพท์ */}
                        <NumberTextInput 
                            label="เบอร์โทรศัพท์"
                            icon="device-mobile"
                            value={values.phone}
                            onChangeText={handleChange('phone')}
                            onBlur={handleBlur('phone')}
                            error={errors.phone}
                        />

                        {/* Text input ของ วันเดือนปีเกิด */}
                        <DateTextInput 
                            label="วัน/เดือน/ปี เกิด"
                            icon="calendar"
                            value={values.dateofBirth=dob}
                            
                            onChangeText={handleChange('dateofBirth')}
                            onBlur={handleBlur('dateofBirth')}
                            showDatePicker={showDatePicker}
                        />

                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>สมัครสมาชิก</ButtonText>
                        </StyledButton>
                    </StyledFormArea>
                 )}
            </Formik>
                </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
};

// Text input ใช้ Name Input
const WordTextInput = ({icon, label, value, onChangeText, error})=>{
    return(
        <View>
            <LeftIcon>
            <Octicons name={icon} size={20} color="black" />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
                <TextInput 
                    value={value}
                    placeholder="กรุณากรอกข้อมูล"
                    onChangeText={onChangeText}
                    style={{
                        paddingRight:40,
                        paddingLeft:40,
                        fontSize:18,
                        height:50,
                        marginVertical:3,
                        marginBottom:15,
                        backgroundColor:LightGray,
                        opacity:0.5,
                    }}
                    keyboardType="email-address"
                />
                {error && <Text style={{color: 'red'}}>{error}</Text>}
        </View>
    )
}

// Text input ใช้ วันเกิด
const DateTextInput = ({ icon, label, value, onChangeText, showDatePicker, error }) => {
    const formattedValue = value instanceof Date ? value.toLocaleDateString() : '';
  
    return (
      <View>
        <LeftIcon>
          <Octicons name={icon} size={20} color="black" />
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        <TouchableOpacity onPress={showDatePicker}> 
          <TextInput
            value={formattedValue}
            placeholder="วัน เดือน ปี"
            onChangeText={onChangeText}
            style={{
              paddingRight: 40,
              paddingLeft: 40,
              fontSize: 18,
              height: 50,
              marginVertical: 3,
              marginBottom: 15,
              backgroundColor: LightGray,
              opacity: 0.5,
            }}
            editable={false}
          />
        </TouchableOpacity>
        {error && <Text style={{ color: 'red' }}>{error}</Text>}
      </View>
      
    );
  };
  

// Text input ใช้ กรอกเบอร์โทรศัพท์
const NumberTextInput = ({icon, label, value, onChangeText, error})=>{
    return(
        <View>
            <LeftIcon>
            <Octicons name={icon} size={20} color="black"/>
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
                <TextInput 
                    value={value}
                    placeholder="กรอกเบอร์โทรศัพท์"
                    onChangeText={onChangeText}
                    style={{
                        paddingRight:40,
                        paddingLeft:40,
                        fontSize:18,
                        height:50,
                        marginVertical:3,
                        marginBottom:15,
                        backgroundColor:LightGray,
                        opacity:0.5,
                    }}
                    keyboardType="number-pad"
                    maxLength={10}
                />
                {error && <Text style={{color: 'red'}}>{error}</Text>}
        </View>
    )
}
// Text input ใช้ กรอกเลขบัตรประชาชน
const NumberIDTextInput = ({icon, label, value, onChangeText, error})=>{
    return(
        <View>
            <LeftIcon>
            <Octicons name={icon} size={20} color="black"/>
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
                <TextInput 
                    value={value}
                    placeholder="กรอกเลขบัตรประชาชน"
                    onChangeText={onChangeText}
                    style={{
                        paddingRight:40,
                        paddingLeft:40,
                        fontSize:18,
                        height:50,
                        marginVertical:3,
                        marginBottom:15,
                        backgroundColor:LightGray,
                        opacity:0.5,
                    }}
                    keyboardType="number-pad"
                    maxLength={13}
                />
                {error && <Text style={{color: 'red'}}>{error}</Text>}
        </View>
    )
}
export default Signup;