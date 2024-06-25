
import React from 'react';
import {StyleSheet,Image, Text, View, ScrollView, } from 'react-native';

export const HomeScreen = () =>{
    return(
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.home}>
            <View style={styles.proCon}>
                <Image source={require('../assets/images/profile.png')} style={styles.profile}></Image>
                <View style={styles.proText}>
                    <Text  style={styles.wel}>Welcome back,</Text>
                    <Text style={styles.dAA}>Daniel Annan</Text> 
                </View>
                <View style={styles.searchCon}>
                    <Image source={require('../assets/images/search.png')} style={styles.search}></Image>
                </View>
            </View>
          
             <Image source={require('../assets/images/Card.png')} style={styles.creCard}></Image>

             <View style={styles.trans}>
             <View style={styles.tranIconWrapper}>
                    <View style={styles.tranIcon}>
                        <Image source={require('../assets/images/send.png')} style={styles.icons} />
                    </View>
                    <Text style={styles.iconText}>Sent</Text>
                </View>

                <View style={styles.tranIconWrapper}>
                    <View style={styles.tranIcon}>
                        <Image source={require('../assets/images/receive.png')} style={styles.icons} />
                    </View>
                    <Text style={styles.iconText}>Receive</Text>
                </View>

                <View style={styles.tranIconWrapper}>
                    <View style={styles.tranIcon}>
                        <Image source={require('../assets/images/loan.png')} style={styles.icons} />
                    </View>
                    <Text style={styles.iconText}>Loan</Text>
                </View>

                <View style={styles.tranIconWrapper}>
                    <View style={styles.tranIcon}>
                        <Image source={require('../assets/images/topUp.png')} style={styles.icons} />
                    </View>
                    <Text style={styles.iconText}>TopUp</Text>
                </View>
                
            
            </View>
            <View style={styles.tranSee}>
              <Text style={styles.tranSaction}>Transaction</Text>
              <Text style={styles.sellAll}>Sell All</Text>
            </View>

            <View style={styles.transactions}>
            <View style={styles.tranWrap}>
                    <View style={styles.tranIcon}>
                        <Image source={require('../assets/images/apple.png')} style={styles.icons} />
                    </View>
                    <View style={styles.tranText}> 
                            <Text style={styles.mainText}>Apple Store</Text> 
                            <Text style={styles.subText}>Entertainment</Text>
                     </View> 
                     <View style={styles.selary}>
                        <Text style={styles.amount}> -$5,99</Text>
                       </View>   
             </View>

             <View style={styles.tranWrap}>
                    <View style={styles.tranIcon}>
                        <Image source={require('../assets/images/spotify.png')} style={styles.icons} />
                    </View>
                    <View style={styles.tranText}> 
                            <Text style={styles.mainText}>Spotify</Text> 
                            <Text style={styles.subText}>Music</Text>
                     </View> 
                     <View style={styles.selary}>
                        <Text style={styles.spotifyAmount}> -$12,99</Text>
                       </View>   
             </View>

             <View style={styles.tranWrap}>
                    <View style={styles.tranIcon}>
                        <Image source={require('../assets/images/moneyTransfer.png')} style={styles.icons} />
                    </View>
                    <View style={styles.tranText}> 
                            <Text style={styles.mainText}>Money Transaction</Text> 
                            <Text style={styles.subText}>Transaction</Text>
                     </View> 
                     <View style={styles.selary}>
                        <Text style={styles.transAmount}>$300</Text>
                       </View>   
             </View>

             <View style={styles.tranWrap}>
                    <View style={styles.tranIcon}>
                        <Image source={require('../assets/images/grocery.png')} style={styles.icons} />
                    </View>
                    <View style={styles.tranText}> 
                            <Text style={styles.mainText}>Grocery</Text> 
                            <Text style={styles.subText}>Shopping</Text>
                     </View> 
                     <View style={styles.selary}>
                        <Text style={styles.grosAmount}> -$88</Text>
                       </View>   
             </View>

            </View>

         </View>
         </ScrollView>

    )
};

const styles =StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 50,
  },
    home:{
      flex: 1,
      paddingTop: 10,
      paddingHorizontal: 20,
        
    },
    profile:{
        width: 50,
        height: 50,
        borderRadius: 70,
        right:20,
        top:40

    },
    proText:{
      gap:5,
      bottom:13,
      left:50

    },
    proCon:{
      left:20

    },
    dAA:{
      fontWeight:'bold',
      fontSize:24
    },
    wel:{
      color:'#95969D',
      fontSize:15
    },
    searchCon:{
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        left:270,
        bottom:65

    },
    search:{
     width: 30, 
    height: 30,
       
    },
    creCard:{
      width:350,
      height:200,
    borderRadius:20,
    bottom:20
    },
    trans:{
      flexDirection:'row',
        justifyContent: 'space-around',
        top:15
    },
    tranIconWrapper: {
      alignItems: 'center',
  },
  tranIcon:{
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    
  },
  icons:{
    width:18,
    height:20

  },
  iconText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 15,
    color: '#000'
},
tranSee:{
  flexDirection:'row',
  top:40
},
tranSaction:{
  fontWeight:'bold',
  fontSize:24
},
sellAll:{
  marginLeft:158,
  top:5,
  fontSize:20,
  color: 'blue'
},
transactions:{
  top:50,
  right:15,
  
},
tranText:{
  gap:15,
  marginTop:10,
},
tranWrap:{
  flexDirection:'row',
    borderRadius:20,
    gap:10,
    padding:10,

},
mainText:{
  fontSize: 18,
  fontWeight: 'bold',
  bottom: 5,
  color: '#0D0D26',
  left:12

},
subText:{
  color: '#95969D',
    bottom: 13,
    left: 12,
   fontSize: 13,


},
selary:{
  marginLeft:90,
  marginTop:20,
  gap:15,

},
amount:{
  color: '#0D0D26',
        fontSize:18,
        left:20,
        fontWeight:'bold'

},
spotifyAmount:{
  left:47,
  fontSize:18,
},
transAmount:{
  right:20,
  fontSize:18,
  color:'blue'

},
grosAmount:{
  left:63,
  fontSize:18,
}
     

})


 