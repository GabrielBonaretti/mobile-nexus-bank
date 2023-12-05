import { Pressable } from "react-native"
import { View } from "react-native"
import { TextInput } from "react-native"
import { Text } from "react-native"

import { useAuthStore } from "../../store/authStore";

import { api } from "../../service/api";
import { useEffect, useState } from "react";

const FormUser = () => {
    const [enableForm, setEnableForm] = useState(false);
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [declaredSalary, setDeclaredSalary] = useState("");

    const auth = useAuthStore((state) => state.accessToken);

    const header = {
        Authorization: "Bearer " + auth,
    };

    const handleCancel = (e) => {
        handleGetContent(); // Restores original content from the server
        setEnableForm(false); // Disables the form
    };


    const handleSubmit = async (e) => {
        // Extracting the numerical value from the declaredSalary string
        const declaredSalaryCorrect = declaredSalary.split(" ")[1];

        // Request data for updating user data
        const requestData = {
            cpf: cpf,
            email: email,
            name: name,
            declared_salary: declaredSalaryCorrect,
        };

        // Sending a PATCH request to update user data
        await api
            .patch("/api/user/", requestData, { headers: header })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(response)
                handleGetContent(); // Restores original content from the server in case of an error
            });

        setEnableForm(false); // Disables the form after submission
    };

    // Function to get user data content from the server
    const handleGetContent = async () => {
        if (auth) {
            await api
                .get("/api/user/", { headers: header })
                .then((response) => {
                    // Setting state variables with user data
                    setCpf(response.data.cpf);
                    setEmail(response.data.email);
                    setName(response.data.name);
                    setDeclaredSalary(
                        `R$ ${Number(response.data.declared_salary).toFixed(2)}`
                    );
                })
                .catch((error) => console.log(error));
        }
    };

    // Fetching user data content from the server on component mount
    useEffect(() => {
        handleGetContent();
    }, [auth]);

    return (
        <View>
            <Text>Profile data: </Text>

            <TextInput
                editable={enableForm}
                value={name}
                onChangeText={(e) => setName(e)}
            />

            <TextInput
                editable={enableForm}
                value={cpf}
                onChangeText={(e) => setCpf(e)}
            />

            <TextInput
                editable={enableForm}
                value={declaredSalary}
                onChangeText={(e) => setDeclaredSalary(e)}
            />

            <TextInput
                editable={enableForm}
                value={email}
                onChangeText={(e) => setEmail(e)}
            />

            <View>
                {enableForm ? (
                    <>
                        <Pressable onPress={() => handleCancel()}><Text>Cancel</Text></Pressable>

                        <Pressable onPress={() => handleSubmit()}><Text>Submit</Text></Pressable>
                    </>
                ) : (
                    <>
                        <Pressable onPress={(e) => setEnableForm(true)}><Text>Editar</Text></Pressable>
                    </>
                )}
            </View>
        </View>
    )
}

export default FormUser