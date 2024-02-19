import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { Octicons } from '@expo/vector-icons';
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
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

const { LightGray } = Colors;

const PersonalScreen = ({ navigation }) => {
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());
    const [dob, setDob] = useState(new Date());

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
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
                    <SubTitle> ข้อมูลส่วนตัว </SubTitle>

                    

                        <Formik
                            initialValues={{
                                phone: '',
                                dateofBirth: '',
                                houseNumber: '',
                                village: '',
                                alley: '',
                                street: '',
                                postalCode: '',
                                province: '',
                                lineId: ''
                            }}
                            validate={values => {
                                const errors = {};
                                if (!values.houseNumber) {
                                    errors.houseNumber = 'กรุณากรอกบ้านเลขที่';
                                }
                                if (!values.village) {
                                    errors.village = 'กรุณากรอกเลขที่หมู่บ้าน';
                                }
                                if (!values.alley) {
                                    errors.alley = 'กรุณากรอกซอย';
                                }
                                if (!values.street) {
                                    errors.street = 'กรุณากรอกถนน';
                                }
                                if (!values.postalCode) {
                                    errors.postalCode = 'กรุณากรอกรหัสไปรษณีย์';
                                }
                                if (!values.province) {
                                    errors.province = 'กรุณาเลือกจังหวัด';
                                }
                                if (!values.lineId) {
                                    errors.lineId = 'กรุณากรอก ID ไลน์';
                                }
                                return errors;
                            }}
                            onSubmit={(values) => {
                                console.log(values);
                                navigation.navigate('SignatureScreen');
                            }}
                        >
                        
                        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                            <StyledFormArea>
                                {/* Add other text inputs for the new fields */}
                                {/* Text input for house number */}
                                <WordTextInput
                                    label="บ้านเลขที่"
                                    icon="home"
                                    value={values.houseNumber}
                                    onChangeText={handleChange('houseNumber')}
                                    onBlur={handleBlur('houseNumber')}
                                    error={errors.houseNumber}
                                />
                                {/* Text input for village */}
                                <WordTextInput
                                    label="หมู่ที่"
                                    icon="home"
                                    value={values.village}
                                    onChangeText={handleChange('village')}
                                    onBlur={handleBlur('village')}
                                    error={errors.village}
                                />
                                <WordTextInput
                                    label="ซอย"
                                    icon="link"
                                    value={values.alley}
                                    onChangeText={handleChange('alley')}
                                    onBlur={handleBlur('alley')}
                                    error={errors.alley}
                                />
                                <WordTextInput
                                    label="ถนน"
                                    icon="pulse"
                                    value={values.street}
                                    onChangeText={handleChange('street')}
                                    onBlur={handleBlur('street')}
                                    error={errors.street}
                                />
                                <WordTextInput
                                    label="รหัสไปรษณีย์"
                                    icon="location"
                                    value={values.postalCode}
                                    onChangeText={handleChange('postalCode')}
                                    onBlur={handleBlur('postalCode')}
                                    error={errors.postalCode}
                                />
                                <WordTextInput
                                    label="จังหวัด"
                                    icon="globe"
                                    value={values.province}
                                    onChangeText={handleChange('province')}
                                    onBlur={handleBlur('province')}
                                    error={errors.province}
                                    keyboardType="default"
                                />

                                <WordTextInput
                                    label="Line ID"
                                    icon="checklist"
                                    value={values.lineId}
                                    onChangeText={handleChange('lineId')}
                                    onBlur={handleBlur('lineId')}
                                    error={errors.lineId}
                                />


                                <StyledButton onPress={handleSubmit}>
                                    <ButtonText>บันทึกข้อมูล</ButtonText>
                                </StyledButton>
                            </StyledFormArea>
                        )}
                    </Formik>
                </InnerContainer>
            </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
};

const WordTextInput = ({ icon, label, value, onChangeText, error }) => {
    return (
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
                    paddingRight: 40,
                    paddingLeft: 40,
                    fontSize: 18,
                    height: 50,
                    marginVertical: 3,
                    marginBottom: 15,
                    backgroundColor: LightGray,
                    opacity: 0.5,
                }}
                keyboardType={label === 'บ้านเลขที่' || label === 'หมู่บ้าน' || label === 'รหัสไปรษณีย์' ? 'numeric' : 'default'}
            />
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
        </View>
    )
}


export default PersonalScreen;
