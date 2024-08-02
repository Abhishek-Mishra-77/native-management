import { ScrollView, StyleSheet, Text, View, TextInput, Pressable, ToastAndroid, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import { SERVER_URL } from "../../constants/common";
import { useRouter } from 'expo-router';

const AddDetails = () => {
    const [employeeDetails, setEmployeeDetails] = useState({
        employeeName: "",
        employeeId: "",
        dateOfBirth: "",
        phoneNumber: "",
        joiningDate: "",
        salary: "",
        address: "",
        designation: "",
        activeEmployee: true
    })
    const router = useRouter();

    const onEmployeeRegisterHandler = async () => {
        if (!employeeDetails) {
            ToastAndroid.show("Please fill all the fields.", ToastAndroid.SHORT);
            return;
        }
        if (!employeeDetails.employeeName || !employeeDetails.dateOfBirth || !employeeDetails.designation ||
            !employeeDetails.address || !employeeDetails.phoneNumber
            || !employeeDetails.employeeId || !employeeDetails.salary || !employeeDetails.joiningDate) {
            Alert.alert("Please fill all the fields.")
            return;
        }

        try {
            const response = await axios.post(`${SERVER_URL}/addEmployee`, {
                employeeDetails
            })
            Alert.alert("Successfully saved the data of employee")
            setEmployeeDetails((prev) => (
                {
                    ...prev,
                    employeeName: "",
                    employeeId: "",
                    dateOfBirth: "",
                    phoneNumber: "",
                    joiningDate: "",
                    salary: "",
                    address: "",
                    designation: "",
                    activeEmployee: true
                }
            ))
            router.replace('/(home)/employees');
        }
        catch (error) {
            console.log("Unable to save thr data.", error);
            Alert.alert("Error while saving the employee data")
        }
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>Add a new Employee</Text>
                <TextInput
                    style={{
                        padding: 10,
                        borderColor: "#D0D0D0",
                        borderWidth: 1,
                        marginTop: 10,
                        borderRadius: 5
                    }}
                    placeholder='India'
                    placeholderTextColor="black"
                />
                <View >
                    <Text
                        style={{ fontSize: 17, fontWeight: "bold" }}
                    >Full Name (First and last Name)
                    </Text>
                    <TextInput
                        value={employeeDetails.employeeName}
                        onChangeText={(text) => setEmployeeDetails((prev) => ({ ...prev, employeeName: text }))}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5
                        }}
                        placeholder='Enter your name'
                        placeholderTextColor="black"
                    />
                </View>
                <View >
                    <Text
                        style={{ fontSize: 17, fontWeight: "bold" }}
                    >Employee Id
                    </Text>
                    <TextInput
                        value={employeeDetails.employeeId}
                        onChangeText={(text) => setEmployeeDetails((prev) => ({ ...prev, employeeId: text }))}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5
                        }}
                        placeholder='Employee Id'
                        placeholderTextColor="black"
                    />
                </View>
                <View >
                    <Text
                        style={{ fontSize: 17, fontWeight: "bold" }}
                    >Designation
                    </Text>
                    <TextInput
                        value={employeeDetails.designation}
                        onChangeText={(text) => setEmployeeDetails((prev) => ({ ...prev, designation: text }))}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5
                        }}
                        placeholder='Designation'
                        placeholderTextColor="black"
                    />
                </View>
                <View >
                    <Text
                        style={{ fontSize: 17, fontWeight: "bold" }}
                    >Mobile Number
                    </Text>
                    <TextInput
                        value={employeeDetails.phoneNumber}
                        onChangeText={(text) => setEmployeeDetails((prev) => ({ ...prev, phoneNumber: text }))}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5
                        }}
                        placeholder='Mobile No'
                        placeholderTextColor="black"
                    />
                </View>
                <View>
                    <Text
                        style={{ fontSize: 17, fontWeight: "bold" }}
                    >Date Of Birth
                    </Text>
                    <TextInput
                        value={employeeDetails.dateOfBirth}
                        onChangeText={(text) => setEmployeeDetails((prev) => ({ ...prev, dateOfBirth: text }))}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5
                        }}
                        placeholder='Enter Date of birth'
                        placeholderTextColor="black"
                    />
                </View>
                <View>
                    <Text
                        style={{ fontSize: 17, fontWeight: "bold" }}
                    >Joining Date
                    </Text>
                    <TextInput
                        value={employeeDetails.joiningDate}
                        onChangeText={(text) => setEmployeeDetails((prev) => ({ ...prev, joiningDate: text }))}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5
                        }}
                        placeholder='Joining Date'
                        placeholderTextColor="black"
                    />
                </View>
                <View style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <Text>Active Employee</Text>
                    <Text>True</Text>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Text
                        style={{ fontSize: 17, fontWeight: "bold" }}
                    >Salary
                    </Text>
                    <TextInput
                        value={employeeDetails.salary}
                        onChangeText={(text) => setEmployeeDetails((prev) => ({ ...prev, salary: text }))}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5
                        }}
                        placeholder='Enter Salary'
                        placeholderTextColor="black"
                    />
                </View>
                <View>
                    <Text
                        style={{ fontSize: 17, fontWeight: "bold" }}
                    >Address
                    </Text>
                    <TextInput
                        value={employeeDetails.address}
                        onChangeText={(text) => setEmployeeDetails((prev) => ({ ...prev, address: text }))}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5
                        }}
                        placeholder='Enter Address'
                        placeholderTextColor="black"
                    />
                </View>

                <Pressable
                    onPress={onEmployeeRegisterHandler}
                    style={{
                        backgroundColor: "#ABCABA",
                        padding: 10,
                        marginTop: 20,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 5,
                        marginBottom: 20
                    }}>
                    <Text style={{ fontWeight: "bold", color: "white" }}>Add Employee</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default AddDetails

const styles = StyleSheet.create({})