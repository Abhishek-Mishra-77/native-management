import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Feather, Entypo, Ionicons, AntDesign, Octicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Home = () => {
    const router = useRouter();

    return (
        <ScrollView>
            <LinearGradient colors={["#7F7FD5", "#E9E4F0"]} style={{ flex: 1 }}>
                <View style={{ padding: 12 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Feather name="bar-chart" size={24} color="black" />
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Employee Management System</Text>
                        <Entypo name="lock" size={24} color="black" />
                    </View>

                    <View style={{ marginTop: 40, flexDirection: "row", alignItems: "center", gap: 20 }}>
                        <Pressable
                            onPress={() => router.replace("/(home)/employees")}
                            style={{
                                backgroundColor: "#D3CCE3",
                                padding: 12,
                                borderRadius: 6,
                                alignItems: "center",
                                justifyContent: "center",
                                flex: 1
                            }}>
                            <View style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                                backgroundColor: "white",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Ionicons name="people-sharp" size={24} color="black" />
                            </View>
                            <Text style={{ marginTop: 7, fontWeight: "600" }}>Employee List</Text>
                        </Pressable>
                        <Pressable style={{
                            backgroundColor: "#D3CCE3",
                            padding: 12,
                            borderRadius: 6,
                            alignItems: "center",
                            justifyContent: "center",
                            flex: 1
                        }}>
                            <View style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                                backgroundColor: "white",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Ionicons name="people-sharp" size={24} color="black" />
                            </View>
                            <Text style={{ marginTop: 7, fontWeight: "600" }}>
                                Mark Attendance
                            </Text>
                        </Pressable>
                    </View>



                    <View style={{
                        backgroundColor: "white",
                        marginTop: 40,
                        paddingHorizontal: 10,
                        paddingVertical: 10,
                        borderRadius: 7
                    }}>
                        <Pressable style={{
                            backgroundColor: "#BE93C5",
                            borderRadius: 6,
                            padding: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            marginVertical: 10
                        }}>
                            <View style={{
                                padding: 7,
                                width: 45,
                                height: 45,
                                borderRadius: 7,
                                backgroundColor: "white",
                                justifyContent: "center"
                            }}>
                                <Ionicons name="newspaper-outline" size={24} color="black" />
                            </View>
                            <Text style={{
                                marginLeft: 10,
                                fontSize: 16,
                                fontWeight: "600",
                                flex: 1
                            }}>Attendance Report</Text>
                            <View style={{
                                width: 35,
                                height: 35,
                                borderRadius: 7,
                                backgroundColor: "white",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <AntDesign name="right" size={24} color="black" />
                            </View>
                        </Pressable>
                        <Pressable style={{
                            backgroundColor: "#BE93C5",
                            borderRadius: 6,
                            padding: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            marginVertical: 10
                        }}>
                            <View style={{
                                padding: 7,
                                width: 45,
                                height: 45,
                                borderRadius: 7,
                                backgroundColor: "white",
                                justifyContent: "center"
                            }}>
                                <Octicons name="repo-pull" size={24} color="black" />
                            </View>
                            <Text style={{
                                marginLeft: 10,
                                fontSize: 16,
                                fontWeight: "600",
                                flex: 1
                            }}>Summary Report</Text>
                            <View style={{
                                width: 35,
                                height: 35,
                                borderRadius: 7,
                                backgroundColor: "white",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <AntDesign name="right" size={24} color="black" />
                            </View>
                        </Pressable>
                        <Pressable style={{
                            backgroundColor: "#BE93C5",
                            borderRadius: 6,
                            padding: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            marginVertical: 10
                        }}>
                            <View style={{
                                padding: 7,
                                width: 45,
                                height: 45,
                                borderRadius: 7,
                                backgroundColor: "white",
                                justifyContent: "center"
                            }}>
                                <Octicons name="report" size={24} color="black" />
                            </View>
                            <Text style={{
                                marginLeft: 10,
                                fontSize: 16,
                                fontWeight: "600",
                                flex: 1
                            }}>All Generate Reports</Text>
                            <View style={{
                                width: 35,
                                height: 35,
                                borderRadius: 7,
                                backgroundColor: "white",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <AntDesign name="right" size={24} color="black" />
                            </View>
                        </Pressable>
                        <Pressable style={{
                            backgroundColor: "#BE93C5",
                            borderRadius: 6,
                            padding: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            marginVertical: 10
                        }}>
                            <View style={{
                                padding: 7,
                                width: 45,
                                height: 45,
                                borderRadius: 7,
                                backgroundColor: "white",
                                justifyContent: "center"
                            }}>
                                <Ionicons name="people" size={24} color="black" />
                            </View>
                            <Text style={{
                                marginLeft: 10,
                                fontSize: 16,
                                fontWeight: "600",
                                flex: 1
                            }}>Overtime Employee</Text>
                            <View style={{
                                width: 35,
                                height: 35,
                                borderRadius: 7,
                                backgroundColor: "white",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <AntDesign name="right" size={24} color="black" />
                            </View>
                        </Pressable>
                    </View>

                    <View style={{
                        marginTop: 20,
                        flexDirection: "row",
                        alignItems: 'center',
                        gap: 12
                    }}>
                        <View style={{
                            borderRadius: 6,
                            backgroundColor: "#f79d00",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: 12,
                            flex: 1
                        }}>
                            <View style={{
                                width: 35,
                                height: 35,
                                borderRadius: 7,
                                backgroundColor: "white",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <MaterialCommunityIcons name="guy-fawkes-mask" size={24} color="black" />
                            </View>
                            <Text style={{
                                marginTop: 7
                            }}>Attendance Criteria</Text>
                        </View>
                        <View style={{
                            borderRadius: 6,
                            backgroundColor: "#ABCABA",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: 12,
                            flex: 1
                        }}>
                            <View style={{
                                width: 35,
                                height: 35,
                                borderRadius: 7,
                                backgroundColor: "white",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Feather name="bar-chart" size={24} color="black" />
                            </View>
                            <Text style={{
                                marginTop: 7
                            }}>Increased Workflow</Text>
                        </View>
                    </View>
                    <View style={{
                        marginTop: 40,
                        flexDirection: "row",
                        alignItems: 'center',
                        gap: 12
                    }}>
                        <View style={{
                            borderRadius: 6,
                            backgroundColor: "#D3CCE3",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: 12,
                            flex: 1
                        }}>
                            <View style={{
                                width: 35,
                                height: 35,
                                borderRadius: 7,
                                backgroundColor: "white",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <MaterialCommunityIcons name="guy-fawkes-mask" size={24} color="black" />
                            </View>
                            <Text style={{
                                marginTop: 7
                            }}>Cost Savings</Text>
                        </View>
                        <View style={{
                            borderRadius: 6,
                            backgroundColor: "#bdc3c7",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: 12,
                            flex: 1
                        }}>
                            <View style={{
                                width: 35,
                                height: 35,
                                borderRadius: 7,
                                backgroundColor: "white",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Feather name="bar-chart" size={24} color="black" />
                            </View>
                            <Text style={{
                                marginTop: 7
                            }}>Employee Performance</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({})