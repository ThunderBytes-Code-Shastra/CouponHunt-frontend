import React, { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import Colors from "../../constant/Colors";
import CustomInput from "../../components/auth/CustomInput";
import {
  authIsAuthenticatedSelector,
  authLoadingSelector,
} from "../../store/auth/selector";
import { authSignUp } from "../../store/auth/slice";
import DateInput from "../../components/DateInput";

const signUpValidationSchema = Yup.object().shape({
  name: Yup.string().trim().required("Please enter your full name"),
  username: Yup.string()
    .trim()
    .matches(/^[a-zA-Z0-9_@\.\-]+$/, "Invalid name input")
    .required("Please enter your name"),
  password: Yup.string()
    .required("Please enter your Password")
    .matches(
      /^[a-zA-Z0-9!@#%^&*+-=]{6,15}$/,
      "Password can only contains 6 to 15 alphabet or number or symbol(!, @, #, %, ^, &, *, +, -, =)"
    ),
  confirmPassword: Yup.string()
    .required("Please enter your Password again")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export default SignUp = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isDateModalVisible, setIsDateModalVisible] = useState(false);

  const isLoading = useSelector(authLoadingSelector);
  const isAuthenticated = useSelector(authIsAuthenticatedSelector);

  const usernameRef = useRef(null);
  const passRef = useRef(null);
  const confirmPassRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated === true) {
      navigation.reset({
        index: 0,
        routes: [{ name: "TabNavigator" }],
      });
    }
  }, [isAuthenticated]);

  const focusUsername = () => {
    usernameRef.current.focus();
  };

  const focusPass = () => {
    passRef.current.focus();
  };

  const focusConfirmPass = () => {
    confirmPassRef.current.focus();
  };

  const signUphandler = (values) => {
    dispatch(authSignUp(values));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated backgroundColor={Colors.primary} style="dark" />
      <ScrollView contentContainerStyle={{ paddingHorizontal: 15 }}>
        <Text style={styles.welcomeText}>Welcome to Bankco - Coupon Manager</Text>
        <Text style={styles.loginText}>SignUp to your account</Text>
        <Formik
          validationSchema={signUpValidationSchema}
          initialValues={{
            username: "",
            password: "",
            confirmPassword: "",
            name: "",
          }}
          onSubmit={signUphandler}
        >
          {({
            handleSubmit,
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            setFieldTouched,
            setFieldValue,
          }) => (
            <>
              <CustomInput
                value={values["name"]}
                error={errors["name"]}
                touched={touched["name"]}
                onChange={handleChange("name")}
                onBlur={() => handleBlur("name")}
                setFieldTouched={() => setFieldTouched("name")}
                placeholder="Enter your name"
                title="Name"
                onCodePress={() => {}}
                returnKeyType="next"
                onSubmitEditing={focusUsername}
              />
              <CustomInput
                ref={usernameRef}
                value={values["username"]}
                error={errors["username"]}
                touched={touched["username"]}
                onChange={handleChange("username")}
                onBlur={() => handleBlur("username")}
                setFieldTouched={() => setFieldTouched("username")}
                placeholder="Enter your username"
                title="Username"
                returnKeyType="next"
                onSubmitEditing={focusPass}
              />
              <CustomInput
                ref={passRef}
                value={values["password"]}
                error={errors["password"]}
                touched={touched["password"]}
                onChange={handleChange("password")}
                onBlur={() => handleBlur("password")}
                setFieldTouched={() => setFieldTouched("password")}
                placeholder="Enter password"
                title="Password"
                secureTextEntry
                passwordVisible={passwordVisible}
                setPasswordVisible={setPasswordVisible}
                onSubmitEditing={focusConfirmPass}
                returnKeyType="next"
              />
              <CustomInput
                ref={confirmPassRef}
                value={values["confirmPassword"]}
                error={errors["confirmPassword"]}
                touched={touched["comfirmPassword"]}
                onChange={handleChange("confirmPassword")}
                onBlur={() => handleBlur("confirmPassword")}
                setFieldTouched={() => setFieldTouched("confirmPassword")}
                placeholder="Confirm password"
                title="Confirm Password"
                secureTextEntry
                passwordVisible={passwordVisible}
                setPasswordVisible={setPasswordVisible}
                onSubmitEditing={handleSubmit}
                returnKeyType="done"
              />

              {!isLoading && (
                <TouchableOpacity onPress={handleSubmit}>
                  <Text style={styles.btnTxt}>Sign Up</Text>
                </TouchableOpacity>
              )}
            </>
          )}
        </Formik>
        {isLoading && (
          <View style={styles.loader}>
            <Loader />
          </View>
        )}
        <View style={styles.footer} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.secondary,
    textAlign: "center",
    marginTop: 100,
    marginBottom: 35,
    maxWidth: 380,
    alignSelf: "center",
  },
  loginText: {
    fontSize: 16,
    color: Colors.secondary,
    textAlign: "center",
    marginBottom: 10,
    maxWidth: 270,
    alignSelf: "center",
  },
  text: {
    fontSize: 18,
    color: Colors.secondary,
    textAlign: "center",
  },
  btnTxt: {
    color: Colors.primary,
    backgroundColor: Colors.secondary,
    borderRadius: 24,
    marginVertical: 20,
    paddingVertical: 15,
    flex: 1,
    textAlign: "center",
    fontSize: 16,
  },
  loader: {
    flex: 1,
    alignItems: "center",
  },
});
