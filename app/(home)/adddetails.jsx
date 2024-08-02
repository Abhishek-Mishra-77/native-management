import { ScrollView, StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React from 'react'

const AddDetails = () => {
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