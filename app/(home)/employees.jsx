import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { SERVER_URL } from "../../constants/common";
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Employee = () => {
    const [employees, setEmployees] = useState([]);
    const [input, setInput] = useState("");
    const router = useRouter()

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await axios.get(`${SERVER_URL}/employees`);
                setEmployees(response.data);
            } catch (error) {
                console.error("Error fetching the employee", error.message);
            }
        };

        fetchEmployee();
    }, []);


    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "white" }}>
                <Ionicons style={{ marginLeft: 10 }} name="arrow-back" size={24} color="black" />
                <Pressable
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginHorizontal: 7,
                        gap: 10,
                        backgroundColor: "white",
                        height: 40,
                        borderRadius: 4,
                        flex: 1
                    }}>
                    <AntDesign name="search1" size={20} color="black" />
                    <TextInput
                        value={input}
                        onChangeText={(text) => setInput(text)}
                        style={{ flex: 1 }}
                        placeholder='Search'
                    />

                    {employees.length > 0 &&
                        <View>
                            <Pressable>
                                <AntDesign name="pluscircle" size={24} color="black" />
                            </Pressable>
                        </View>
                    }
                </Pressable>
            </View>
            <Pressable onPress={() => router.push("/(home)/adddetails")}>
                <AntDesign name="pluscircle" size={24} color="#0072b1" />
            </Pressable>
        </View>
    )
}

export default Employee

const styles = StyleSheet.create({})