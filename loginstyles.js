(function main(StyleSheet,Dimensions) {

  return StyleSheet.create({
    containerStyle: {
      height: '100%',
      width: '100%',
      backgroundColor: 'transparent',
    },
    viewStyle: {
        marginTop: "20%",
        height: Dimensions.get('window').height / 3
    },
    userNameItem: {
        width: "90%",
        marginLeft: "5%",
        marginRight: "5%",
    },
    inputStyle: {
      color: '#2B7B9F',
      paddingLeft: 10,
      fontSize: 24,
      fontWeight: '500',
      width: '100%',
      height: 50,
      borderWidth: 1,
      //textTransform: 'none',
      borderColor: '#ccc',
    },
    passwordItem: {
      width: "90%",
      marginLeft: "5%",
      marginRight: "5%",
      marginTop: "5%",
    },
    passwordlabel: {
        color: '#2B7B9F',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        marginBottom: 5,
        fontSize: 16
    },
    userNameLabel: {
        color: '#2B7B9F',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        marginBottom: 5,
        fontSize: 16
    },
    loginButton: {
        backgroundColor: '#4568DC',
        marginTop: '3%',
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 40,
       textAlign:'center',
        justifyContent:'center'
    },
    imageStyle: {
      width: '100%',
      height: 160,
    },
    loginButtonLabel:{
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: 'Arial',
        textAlign:'center',
        justifyContent:'center'

    }
});
});
