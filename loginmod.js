(function main(React, ReactNative,NativeBase,componentState, styles, require) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var react_1 = React;
    var _reactNative = ReactNative;
    var _nativebase = NativeBase;
    var root = this;
	
  function loginCall() {
    var userJsonData = { "loginName": componentState.state.userName, "password": componentState.state.password };
	  
    fetch('https://cfsfiserv.com/QEUATSMT/api/Authentication/LogIn', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userJsonData)
    }).then(function (response) {
       componentState.setState({progressModal:false});
        var responseObj = JSON.parse(response._bodyText);
        var TokenResponse = responseObj.antiForgeryToken;
        //console.log("responseObj  =::" + responseObj.antiForgeryToken);
        if (TokenResponse == '' || TokenResponse == undefined) {
	_nativebase.Toast.show({
            text: 'Please enter the valid UserName and Password',
            position: 'bottom',
            buttonText: 'Okay',
            duration: 5000,
            type: 'danger'
        });
            
        } else {
            componentState.props.navigation.navigate("AccountSummary", {
                token: TokenResponse
            });
        }
    });
}


function validateUser() {
    if (componentState.state.userName === '' || componentState.state.userName == undefined) {
        _nativebase.Toast.show({
            text: 'Please enter Username',
            position: 'bottom',
            buttonText: 'Okay',
            duration: 5000,
            type: 'danger'
        });
    } else if (componentState.state.password === '' || componentState.state.password == undefined) {
        _nativebase.Toast.show({
            text: 'Please enter Password',
            position: 'bottom',
            buttonText: 'Okay',
            duration: 5000,
            type: 'danger'
        });
    } else {
	    _nativebase.Toast.show({
            text: 'Please wait a moment..',
            position: 'top',
            buttonText: 'Okay',
            duration: 9000,
            type: 'danger'
        });
	 componentState.setState({ progressModal: true }, function () { 
		loginCall()
	});
	componentState.forceUpdate();
    }
}

    return react_1.createElement(_nativebase.Container, {style:styles.containerStyle }, [
                react_1.createElement(_reactNative.View, {
                        "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04_field_container",
                        style:styles.viewStyle
                    }, [
                            react_1.createElement(_reactNative.Image, {
                                    "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl0423_Label_container",
                                    style:styles.imageStyle,
                                    source:{uri:'https://raw.githubusercontent.com/nagred01/Login/master/Mainlog.png'}
                            }, null),
                            react_1.createElement(_reactNative.View, {
                                    "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04_Label_container",
                                    style:styles.userNameItem
                                }, [
                                        react_1.createElement(_nativebase.Label, {
                                        "htmlFor": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04",
                                        "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04_Label",
                                        style : styles.userNameLabel
                                        },["UserName"]),
                                        react_1.createElement(_reactNative.TextInput, {
                                            "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04",
                                            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04",
                                            "cssClass": "form-control component-group",
                                            "fieldCssClass": "",
                                            style : styles.inputStyle,
                                            autoCapitalize : 'none',
                                            "bindingMode": "",
                                            onChangeText: function (val) {
                                                componentState.setState({ userName: val })
                                            },
                                            placeHolder: "Enter the User Name"
                                        }, [])
                                ]),
                                react_1.createElement(_reactNative.View, {
                                    "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04_Label_container",
                                    style:styles.userNameItem
                                }, [
                                    react_1.createElement(_nativebase.Label, {
                                        "htmlFor": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04",
                                        "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04_Label",
                                        style : styles.passwordlabel
                                    },["Password"]),
                                    react_1.createElement(_reactNative.TextInput, {
                                        "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04",
                                        "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04",
                                        "cssClass": "form-control component-group",
                                        "fieldCssClass": "",
                                        style : styles.inputStyle,
                                        "bindingMode": "",
                                        onChangeText: function (val) {
                                            componentState.setState({ password: val })
                                        },
                                         autoCapitalize : 'none',
                                        secureTextEntry:true,
                                        placeHolder: "Enter the Password"
                                    }, [])
                                ]),
                            react_1.createElement(_nativebase.Button, {
                                    "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_btnCancel",
                                    "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_btnCancel",
                                    style : styles.loginButton,
				   onPress: function () { validateUser() }
                                    
                                },[react_1.createElement(_reactNative.Text, {
                                    "htmlFor": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl023",
                                    "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl023_Label",
                                    style : styles.loginButtonLabel,
                                }, ["Login"])])
                    ]),
	    react_1.createElement(_reactNative.Modal,{
			       "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_mdlCancel",
                               "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_mdlCancel",
				transparent:true,
				visible:componentState.state.progressModal,
	                        onRequestClose:function(){console.log("closed Modal")},
                           },[react_1.createElement(_reactNative.View,{
				"id": "M_layout_content_PCDZ_MNS7LAN_ctl00_viewCancel",
                               "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_viewCancel",
			   },[react_1.createElement(_reactNative.ActivityIndicator,{
			      "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_activityCancel",
                               "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_activityCancel",
				   size:'large',
				   color:'#0000ff',
			   },[])])])
	    
            ])
})
