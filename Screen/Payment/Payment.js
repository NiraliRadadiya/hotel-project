import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import RazorpayCheckout from 'react-native-razorpay';


const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

function Payment({ navigation }) {

    const paymentHandler = () => {
        var options = {
            description: 'Check Payment',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_58UWx91S24g1Qo', // Your api key
            amount: '5000',
            name: 'Nirali',
            prefill: {
                email: 'void@razorpay.com',
                contact: '9191919191',
                name: 'Razorpay Software'
            },
            theme: { color: '#05A081' }
        }
        RazorpayCheckout.open(options).then((data) => {
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
        });
    }

    return (
        <View >
            <Button onPress={paymentHandler} title="Pay Now" />
        </View>
    )
}

export default Payment;



