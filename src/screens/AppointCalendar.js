import React, { useState, useEffect } from "react";
import {
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
    ImageBackground,
    FlatList,
    Dimensions
} from 'react-native';

import { Button, Block, Text, Input, theme } from 'galio-framework';

// import { materialTheme, Images } from '../constants/';
// import { Select, Icon, Header, Switch } from '../components/';
import appointmenu from '../constants/appointmenu';
const { width } = Dimensions.get('screen');

// import moment from 'moment'
import { LocaleConfig, CalendarList } from 'react-native-calendars';
// import {authHeader} from '../helpers'
import Constants from 'expo-constants';
import axios from "axios";
import deviceStorage from '../helpers/deviceStorage'
import {axiosInstance} from '../helpers/axiosApiInstance';

LocaleConfig.locales['th'] = {
    monthNames: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
    monthNamesShort: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
    dayNames: ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'],
    dayNamesShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
    today: 'วันนี้'
};
LocaleConfig.defaultLocale = 'th';


const thumbMeasure = (width - 48 - 32) / 3;



//export default class AppointCalendar extends React.Component {
const AppointCalendar = (props) => {
    const navigation = props.navigation;
    const [DisplayTerm, setDisplayTerm] = useState(false);
    const [AppointDate, setAppointDate] = useState(null);
    const [DayDesc, setDayDesc] = useState("");
    const [CurrentDate, setCurrentDate] = useState(/*Date.now()*/'2020-12-05');
    const [CurrentMonth, setCurrentMonth] = useState(0);
    const [TimeState, setTimeState] = useState([]);
    const [MarkedHoliday, setMarkedHoliday] = useState(null);
    const [DateText, setDateText] = useState('');
    const [MarkedDate, setMarkedDate] = useState(null);
    const [Holidays, setHolidays] = useState([{ dateVal: null, description: '' }]);
    const [timeItems, setTimeItems] = useState([

        { key: '09:00', text: '' },
        { key: '09:15', text: '' },
        { key: '09:30', text: '' },
        { key: '09:45', text: '' },
        { key: '10:00', text: '' },
        { key: '10:15', text: '' },
        { key: '10:30', text: '' },
        { key: '10:45', text: '' },
        { key: '11:00', text: '' },
        { key: '11:15', text: '' },
    ]);

    const serviceType=props.route.params.serviceType;
    const slotType=props.route.params.slotType;

    const DATA = [
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "First Item",
        },
        {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            title: "Second Item",
        },
        {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            title: "Third Item",
        },
    ];
   
    React.useEffect(() => {
        //console.log(props)
    }, []);

    const onMonthChange = (months) => {

        if (months.length == 1) {
            setCurrentMonth(months[0].month);
/*
            axios.interceptors.request.use(function (config) {
                // Do something before request is sent
              
              const value =  deviceStorage.getItem('currentUser')
              const currentUser = JSON.parse(value)
              const token = currentUser.token
            
              if (token) {
                config.headers['Authorization'] = `Bearer ${token}`
              }
              return config
              }, function (error) {
                // Do something with request error
                return Promise.reject(error);
            });
*/
                //const result = await callAPI.get('/api/v1/timeslot?AppointDatetime=' + AppointDate + '&SlotType=' + slotType);
                //console.log(Constants.manifest.extra.backend+'/api/v1/timeslot?AppointDatetime=' + AppointDate + '&SlotType=' + slotType)
                //axiosInstance.get(Constants.manifest.extra.backend+'/api/v1/timeslot?AppointDatetime=' + AppointDate + '&SlotType=' + slotType)


                //axios.get(Constants.manifest.extra.backend+'/api/v1/timeslot?AppointDatetime=' + AppointDate + '&SlotType=' + slotType)
  
  /*
                callAPI
                .get('/api/v1/timeslot?AppointDatetime=' + AppointDate + '&SlotType=' + slotType)
                .then(result=>{
                   console.log(JSON.stringify(result))
                })
              
                axios.get(Constants.manifest.extra.backend+'/api/v1/timeslot?AppointDatetime=' + AppointDate + '&SlotType=' + slotType, {
                    headers: authHeader()
                })
                .then((response) => {
                  //console.log("RESPONSE RECEIVED: ", response);

                })
                .catch((err) => {
                    //console.log("RESPONSE Error: ", err);

                })
                */
            /*
            fetch("https://appointment.trangskin.go.th/api/appointment/month", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    param: { id_user: '22', month: months[0].month },
                }),
            })
                .then((response) => response.json())
                .then((json) => {
                    console.log(json)
                    //alert(json.response.result[2].appointment_date)
                    if (json.response.result != null) {
                        
                        var hdPush = new Array();
                        const app_date = json.response.result.map((item) => {
                            const _selectedDay = moment(item.appointment_date).format('YYYY-MM-DD');
                            //const updatedMarkedDates = {...this.state._markedHoliday, ...{ [_selectedDay]: {selected: true, selectedColor: 'blue'} } }
                            const updatedMarkedDates = { ...MarkedHoliday, ...{ [_selectedDay]: { selected: true, marked: true, selectedColor: 'red' } } }
                            setMarkedHoliday(updatedMarkedDates);

                            hdPush.push({ dateVal: _selectedDay, description: item.description });
                        });

                        setMarkedDate(MarkedHoliday);
                        //this.setState({ _markedDates: this.state._markedHoliday });
                        setHolidays(hdPush);
                        //this.setState({ _holiday: hdPush });
                        //console.log(this.state._holiday);
                    }

                })
                .catch((error) => {
                    console.error(error);
                });
            */

        }

    }

    const onDaySelect = (day) => {
        const _selectedDay = moment(day.dateString).format('YYYY-MM-DD');
        setAppointDate(_selectedDay);

        const hd = Holidays.filter(h => h.dateVal == _selectedDay);

        if (hd != null && hd.length > 0) {
            setDayDesc(hd[0].description);
            setTimeState([]);
        }
        else {
            setDayDesc('');
            // Create a new object using object property spread since it should be immutable
            // Reading: https://davidwalsh.name/merge-objects
            //const updatedMarkedDates = {...this.state._markedDates, ...{ [_selectedDay]: { marked } } }
            const updatedMarkedDates = { ...MarkedHoliday, ...{ [_selectedDay]: { selected: true, selectedColor: 'green' } } }
            // Triggers component to render again, picking up the new state
            setMarkedDate(updatedMarkedDates);
            //this.setState({ _markedDates : { [_selectedDay]: {selected: true, marked: true, selectedColor: 'red'} }});
            console.log(Constants.expoConfig.extra.backend+'/api/v1/timeslot?AppointDatetime=' + _selectedDay + '&SlotType=' + slotType)
            
            
            const value =  deviceStorage.getItem('currentUser')

            //const currentUser = JSON.parse(value)

            axiosInstance.get(Constants.expoConfig.extra.backend+'/api/v1/timeslot?AppointDatetime=' + _selectedDay + '&SlotType=' + slotType)
            .then((response) => {
              
                var result = response.data.data;       

                //if (result != null) {
                //    result.map((item) => {
                //        updateTimeState = updateTimeState.filter(time => time.slotTime !== item.slotTime);
                //    });
                //}
     
                var thMonth = LocaleConfig.locales['th'].monthNames[moment(day.dateString).month()];
                setDateText('ของวันที่ '+ moment(day.dateString).date() + ' ' + thMonth +' '+moment(day.dateString).year())
                setTimeState(result);
            })
            .catch((error) => {
                console.log(error);
            });

        }

    }

    return (
        <>
            <Block center style={{ flex: 0.6 }}>
                <CalendarList
                    theme={{
                        backgroundColor: '#47c9fa',
                        calendarBackground: '#47c9fa',
                        monthTextColor: '#ffffff',
                        textSectionTitleColor: '#ffffff',
                        indicatorColor: '#ffffff',
                        //todayTextColor: '#00adf5',
                        dayTextColor: '#ffffff',

                        //สี จ-ศ
                        //textSectionTitleColor: '#b6c1cd',

                        textSectionTitleDisabledColor: '#d9e1e8',
                        selectedDayBackgroundColor: '#D9E1E8',
                        selectedDayTextColor: '#ffffff',

                        textDisabledColor: '#d9e1e8',
                        dotColor: '#00adf5',
                        selectedDotColor: '#ffffff',
                        arrowColor: 'orange',
                        disabledArrowColor: '#d9e1e8',

                        textDayFontWeight: '300',
                        textMonthFontWeight: 'bold',
                        textDayHeaderFontWeight: '300',
                        textDayFontSize: 16,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 18,

                    }}

                    // Enable horizontal scrolling, default = false
                    horizontal={true}
                    // Enable paging on horizontal, default = false
                    pagingEnabled={true}
                    // Set custom calendarWidth.

                    minDate={CurrentDate}
                    onVisibleMonthsChange={(months) => {
                        console.log('monthchange')
                        onMonthChange(months);
                    }}


                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    //maxDate={'2012-05-30'}
                    // Handler which gets executed on day press. Default = undefined
                    onDayPress={(day) => { onDaySelect(day) }}

                    markedDates={MarkedDate}
                    // Handler which gets executed on day long press. Default = undefined
                    onDayLongPress={(day) => { console.log('selected day', day) }}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'MMMM yyyy'}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    onMonthChange={(month) => { console.log(month); }}
                    // Hide month navigation arrows. Default = false
                    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                    firstDay={1}

                    hideArrows={false}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                    onPressArrowLeft={substractMonth => console.log(substractMonth)/*substractMonth()*/}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                    onPressArrowRight={addMonth => console.log(addMonth) /*addMonth()*/}
                />
         
            </Block>
            <Block style={[styles.dayBlock,{ flex: 0.4, backgroundColor: 'white' }]}>
                <Text style={styles.title}>เลือกเวลานัดหมาย {DateText}</Text>
                <FlatList
                    //data={DATA}
                    //renderItem={renderItem}
                    keyExtractor={(item) => item.slotID}
                    style={{ alignSelf: 'center', }}
                    data={TimeState}
                    numColumns={4}
                    renderItem={
                        ({ item,index }) =>
                            <View key={index} style={styles.viewTime}>
                                <Button
                                    center
                                    shadowless
                                    color="#47c9fa"        
                                    onPress={() => {
                                        console.log(serviceType + ' ' + slotType+ ' '+ AppointDate + ' ' + item.slotTime)
                                        navigation.navigate('AppointUpload', {serviceType: serviceType, slotType: slotType, appointDate: AppointDate, appointTime:  item.slotTime});
                                    }}

                                    style={[styles.optionsButton, styles.shadow]}>
                                    <Text style={styles.optionsText}>{item.slotTime.substring(0, 5)} น.</Text>
                                    
                                </Button>
                                
                            </View>
                    }
                />
            </Block>

        </>
    );
}

const styles = StyleSheet.create({
    components: {
    },
    title: {
        paddingVertical: theme.SIZES.BASE,
        paddingHorizontal: theme.SIZES.BASE * 2,
    },
    group: {
        paddingTop: theme.SIZES.BASE * 3.75,
    },
    shadow: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.2,
        elevation: 2,
    },
    button: {
        marginBottom: theme.SIZES.BASE,
        width: width - (theme.SIZES.BASE * 2),
    },
    viewTime: {
        height: '100%',
        margin: 3,
        alignContent: 'center'
    },
    optionsText: {
        color: '#ffffff',
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: -0.29,
    },
    optionsButton: {
        width: (width-30) / 4,
        height: 34,
        paddingHorizontal: 10,

    },
    input: {
        borderBottomWidth: 1,
    },
    inputDefault: {
        borderBottomColor: materialTheme.COLORS.PLACEHOLDER,
    },
    inputTheme: {
        borderBottomColor: materialTheme.COLORS.PRIMARY,
    },
    inputTheme: {
        borderBottomColor: materialTheme.COLORS.PRIMARY,
    },
    inputInfo: {
        borderBottomColor: materialTheme.COLORS.INFO,
    },
    inputSuccess: {
        borderBottomColor: materialTheme.COLORS.SUCCESS,
    },
    inputWarning: {
        borderBottomColor: materialTheme.COLORS.WARNING,
    },
    inputDanger: {
        borderBottomColor: materialTheme.COLORS.ERROR,
    },
    imageBlock: {
        overflow: 'hidden',
        borderRadius: 4,
    },
    rows: {
        height: theme.SIZES.BASE * 2,
    },
    social: {
        width: theme.SIZES.BASE * 3.5,
        height: theme.SIZES.BASE * 3.5,
        borderRadius: theme.SIZES.BASE * 1.75,
        justifyContent: 'center',
    },
    category: {
        backgroundColor: theme.COLORS.WHITE,
        marginVertical: theme.SIZES.BASE / 2,
        borderWidth: 0,
    },
    categoryTitle: {
        height: '100%',
        paddingHorizontal: theme.SIZES.BASE,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    albumThumb: {
        borderRadius: 4,
        marginVertical: 4,
        alignSelf: 'center',
        width: thumbMeasure,
        height: thumbMeasure
    },
    flatTime: {
        marginTop: 5,
        marginBottom: 5,
        fontSize: 20,
        alignSelf: "stretch",
        textAlign: 'center',
    },
    borderTime: {
        borderRadius: 50,
        borderWidth: 0.5
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }    
    , dayBlock: {
        //width: 375,
        //position: "absolute",
        //backgroundColor: "rgba(255,255,255,1)",
        //top: 189,
        //height: 543,
        //left: 0,
        overflow: "visible",
        borderRadius: 43,
        marginTop: -40
    },
});

export default AppointCalendar;