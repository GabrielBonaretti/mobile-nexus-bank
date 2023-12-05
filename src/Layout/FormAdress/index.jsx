import { Pressable } from "react-native"
import { View } from "react-native"
import { TextInput } from "react-native"
import { Text } from "react-native"

import { useAuthStore } from "../../store/authStore";

import { api } from "../../service/api";
import { useEffect, useState } from "react";


const FormAdress = () => {
    const [enableForm, setEnableForm] = useState(false);
    const [cep, setCep] = useState("");
    const [city, setCity] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [number, setNumber] = useState("");
    const [street, setStreet] = useState("");
    const [uf, setUf] = useState("");

    const auth = useAuthStore((state) => state.accessToken);

    const header = {
        Authorization: "Bearer " + auth,
    };

    const handleCancel = (e) => {
        handleGetContent(); // Restores original content from the server
        setEnableForm(false); // Disables the form
    };

    const handleSubmit = async (e) => {
        // Request data for updating user address
        const requestData = {
            cep: cep,
            city: city,
            neighborhood: neighborhood,
            number: number,
            street: street,
            uf: uf,
        };


        await api
            .put("/api/adress/1/search/", requestData, { headers: header })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
                handleGetContent();
            });

        setEnableForm(false);
    };


    const handleGetContent = async () => {
        if (auth) {
            await api
                .get("/api/adress/search/", { headers: header })
                .then((response) => {
                    setCep(`${response.data.cep}`);
                    setCity(response.data.city);
                    setNeighborhood(response.data.neighborhood);
                    setNumber(`${response.data.number}`);
                    setStreet(response.data.street);
                    setUf(response.data.uf);
                })
                .catch((error) => console.log(error));
        }
    };

    useEffect(() => {
        handleGetContent();
    }, []);


    return (
        <View>
            <Text>Profile address: </Text>

            <TextInput
                placeholder="Street"
                editable={enableForm}
                value={street}
                onChangeText={(e) => setStreet(e)}
            />

            <TextInput
                placeholder="Number"
                editable={enableForm}
                value={number}
                onChangeText={(e) => setNumber(e)}
            />

            <TextInput
                placeholder="Neighborhood"
                editable={enableForm}
                value={neighborhood}
                onChangeText={(e) => setNeighborhood(e)}
            />

            <TextInput
                placeholder="City"
                editable={enableForm}
                value={city}
                onChangeText={(e) => setCity(e)}
            />

            <TextInput
                placeholder="UF"
                editable={enableForm}
                value={uf}
                onChangeText={(e) => setUf(e)}
            />

            <TextInput
                placeholder="CEP"
                editable={enableForm}
                value={cep}
                onChangeText={(e) => setCep(e)}
            />

            <View>
                {enableForm ? (
                    <>
                        <Pressable onPress={() => handleCancel()}><Text>Cancel</Text></Pressable>

                        <Pressable onPress={() => handleSubmit()}><Text>Submit</Text></Pressable>
                    </>
                ) : (
                    <>
                        <Pressable onPress={() => setEnableForm(true)}><Text>Editar</Text></Pressable>
                    </>
                )}
            </View>
        </View>
    )
}

export default FormAdress