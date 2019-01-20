(function main(React, ReactNative,NativeBase,componentState, styles, require, Overlay, state) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var react_1 = React;
    var _reactNative = ReactNative;
    var _nativebase = NativeBase;
    var root = this;

    var loginCall = function(username, password) {
        componentState.setState({ progressModal: true });
        var userJsonData = { "loginName": username, "password": password }
        fetch('https://cfsfiserv.com/QEUATSMT/api/Authentication/LogIn',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userJsonData),
            }).then(response => {
                console.log(response);
                componentState.setState({progressModal:false});
                var responseObj = JSON.parse(response._bodyText);
                var TokenResponse = responseObj.antiForgeryToken;
                if (TokenResponse == '' || TokenResponse == undefined) {
                    componentState.setState({progressModal:false});
                    react_1.Alert.alert(
                        '',
                        'Please enter the valid UserName and Password',
                        [
                            { text: '', onPress: () => console.log('Ask me later pressed') },
                            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                            { text: 'OK', onPress: () => console.log('OK Pressed') },
                        ],
                        { cancelable: false }
                    )
                } else {
                    componentState.setState({progressModal:false});
                    componentState.props.navigation.navigate("AccountSummary", {
                        token: TokenResponse,
                    });
                }
            });
    }

    componentState.validateAndMakeApiCall = function(username, password) {
        if (username === '' || username == undefined) {
            _nativebase.Toast.show({
                text: 'Please enter Username',
                position: 'bottom',
                buttonText: 'Okay',
                duration: 5000,
                type: 'danger',
            })
        }
        else if (password === '' || password == undefined) {
            _nativebase.Toast.show({
                text: 'Please enter Password',
                position: 'bottom',
                buttonText: 'Okay',
                duration: 5000,
                type: 'danger',
            })
        } else {
          loginCall(username, password);
        }
    };


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
				                            onPress: function() {
                                      componentState.validate()
                                    }
                                },[react_1.createElement(_reactNative.Text, {
                                    "htmlFor": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl023",
                                    "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl023_Label",
                                    style : styles.loginButtonLabel,
                                }, ["Login"])]
                            )

                    ])
            ])


})
