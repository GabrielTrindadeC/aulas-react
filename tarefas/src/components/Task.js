import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, ImageBackground, TouchableOpacity } from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import Icon from 'react-native-vector-icons/FontAwesome'
import commonStyles from '../commonStyles'
import Swipeable from 'react-native-gesture-handler/Swipeable'



export default props => {
    const doneOrNot = props.doneAt != null ? {textDecorationLine: 'line-through'}: {}
    
    function getCheckView(doneAt){
        if (doneAt != null){
            return(
            <View style= {styles.done}>
                <Icon 
                name='check' 
                size={20} 
                color='#000'/>
             </View>

            )
        }
        return (
            <View style= {styles.pending}>
               
             </View>
        )

    }
    const getRightContent = () =>{
        return (
            <TouchableOpacity onPress={()=>console.warn('deletou')} style={styles.right}>
                <Icon name= 'trash' size= {30} color='#fff'/>
            </TouchableOpacity>
        )
    }
    const getLefttContent = () =>{
        return (
            <TouchableOpacity style={styles.left}>
                <Icon name= 'trash' size= {30} color='#fff' style={styles.exclude}/>
                <Text style={styles.excludeText}>Excluir</Text>
            </TouchableOpacity>
        )
    }

    const formattedDate = moment(props.estimatedAt).locale('pt-br').format('ddd, D [de] MMMM')
    return (
        <Swipeable
            renderRightActions={getRightContent}
            renderLeftActions= {getLefttContent}
            onSwipeableLeftOpen={()=>console.warn('deletou')}>
            
            <View style={styles.container}>
            <TouchableWithoutFeedback>
                <View style= {styles.checkContainer}>
                {getCheckView(props.doneAt)}
                </View>
            </TouchableWithoutFeedback>
            <View>
                <Text style={[styles.desc, doneOrNot]}>{props.desc}</Text>
                <Text style= {styles.date}>{formattedDate}</Text>
            </View>
        </View>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#aaa',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#fff'
    },
    checkContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pending: {
        height:25,
        width:25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#555'
    },
    done: {
        height: 25,
        width:25,
        borderRadius: 13,
        backgroundColor:'#4d7031',
        alignItems: 'center',
        justifyContent: 'center'

    }, desc: {
        
        fontSize: 16,
        color: commonStyles.colors.mainText
    },
    date: {
        color: commonStyles.colors.subText,
        fontSize:12
    },
    right: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
       
    },
    left :{
        flexDirection: 'row',
        flex:1,
        backgroundColor: 'red',
        alignItems: 'center'

    },
    exclude:{
        marginLeft: 10
    },
    excludeText: {
        color: commonStyles.colors.secondary,
        fontSize: 20
    }
})