import {Platform} from 'react-native';
export default [
  {
    title: 'จองคิววันนี้',
    image: '../images/feature-appointment.jpg',
    source: require("../images/feature-appointment.jpg"),
        navigate: Platform.OS === 'android' ? 'AppointUploadAndroid' : 'AppointUpload' 
  },
  {
      title: 'นัดล่วงหน้า',
      source: require("../images/feature-service.jpg"),
      price: 40,
      navigate: 'Appoint2'
  },
  {
      title: 'คลินิกทั่วไป',
      source: require("../images/feature-service.jpg"),
      price: 40,
      navigate: 'AppointCalendar'
  },
  {
      title: 'คลินิกพิเศษเฉพาะทางนอกเวลาราชการ (SMC)',
      source: require("../images/feature-service.jpg"),
      price: 40,
      navigate: 'AppointCalendar'
  }

];
