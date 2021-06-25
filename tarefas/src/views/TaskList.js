import React, { Component } from 'react'
import 
{ 
    View, Text, StyleSheet, ImageBackground, TouchableOpacity, FlatList 
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Constants from 'expo-constants'
import moment from 'moment'
import 'moment/locale/pt-br'


import todayImage from '../../assets/imgs/today.jpg'
import commonStyles from '../commonStyles'
import Task from '../components/Task'

const initialState = {
    showDoneTask : true,
    showAddTask : false,
    visibleTask :[],
    tasks : []
}
export default class TaskList extends Component {

    state = {...initialState}


    render() {
        
        const TODAY = moment().locale('pt-br').format('ddd, D [de] MMMM')
        

        return (
            <View style={styles.container}>
                <ImageBackground source= {todayImage} style={styles.background}>
                    <View style= {styles.iconBar}>
                        <TouchableOpacity>
                            <Icon name= {this.state.showDoneTask
                            ? 'eye': 'eye-slash'} 
                            size ={30} 
                            color={commonStyles.colors.secondary} />
                        </TouchableOpacity>
                    </View>
                    <View style= {styles.titleBar}>
                        <Text style= {styles.title}>Hoje</Text>
                        <Text style= {styles.subtitle}>{TODAY}</Text>
                    </View>
                </ImageBackground>
                <View style= {styles.containerList}>
                    <Task
                    desc= "Ver filme" 
                    estimatedAt= {new Date()}/>
                    <Task 
                    desc= "Ver filme"  
                    estimatedAt= {new Date()}
                    doneAt= {new Date()}/>
                </View>
                <TouchableOpacity style={styles.addButton}>
                    <Icon name='plus' size={20} color= {commonStyles.colors.secondary}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    background: {
        flex:3
    },
    containerList: {
        flex: 7,

    },
    iconBar: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: 30,
        paddingTop:Constants.statusBarHeight
    },
    titleBar :{
        flex:1,
        justifyContent: 'flex-end'
    },
    title:{
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20
    },
    subtitle:{
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 20
    },
    addButton: {
        backgroundColor: commonStyles.colors.today,
        width: 70,
        height:70,
        justifyContent:'center',
        alignItems: 'center',
        position: 'absolute',
        right: 30,
        bottom: 30,
        borderRadius: 40
    }
})