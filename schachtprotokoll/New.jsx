import { ScrollView, View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';

export default function New() {
    DropDownPicker.setListMode("MODAL");
    const currentDate = new Date();
    const options = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    };

    const formattedDate = currentDate.toLocaleDateString('de-DE', options);
    // Abwasserart //
    const [openAbwArt, setopenAbwArt] = useState(false)
    const [valueAbwArt, setvalueAbwArt] = useState(null)
    const [AbwArt, setAbwArt] = useState(
        [
            { label: 'Schmutz', value: 'schmutz' },
            { label: 'Misch', value: 'misch' },
            { label: 'Regen', value: 'regen' },
        ])

    const handleValueAbwArt = (value) => {
        if (value === valueMaterialDeckel) {
            setvalueAbwArt(null);
        } else {
            setvalueAbwArt(value);
        }
    };
    const AbwArtKomp = <View style={styles.zIndex4000}>
        <DropDownPicker
            items={AbwArt}
            setItems={setAbwArt}
            multiple={false}
            style={styles.dropdownContainer}
            dropDownStyle={styles.dropdownList}
            itemStyle={styles.dropdownItem}
            dropDownMaxHeight={150}
            open={openAbwArt}
            setOpen={setopenAbwArt}
            value={valueAbwArt}
            setValue={handleValueAbwArt}
            placeholder='Abwasserart'
            dropDownDirection='down'
        />
    </View>
    // Schachtart //
    const [openSchArt, setopenSchArt] = useState(false)
    const [valueSchArt, setvalueSchArt] = useState(null)
    const [SchArt, setSchArt] = useState(
        [
            { label: 'KS', value: 'ks' },
            { label: 'ES', value: 'es' },
            { label: 'SS', value: 'ss' },
            { label: 'KS1', value: 'ks1' },
            { label: 'ES1', value: 'es1' },
            { label: 'SS1', value: 'ss1' },
        ])

    const handleValueSchArt = (value) => {
        if (value === valueMaterialDeckel) {
            setvalueSchArt(null);
        } else {
            setvalueSchArt(value);
        }
    };
    const SchArtKomp = <View style={styles.zIndex4000}>
        <DropDownPicker
            items={SchArt}
            setItems={setSchArt}
            multiple={false}
            style={styles.dropdownContainer}
            dropDownStyle={styles.dropdownList}
            itemStyle={styles.dropdownItem}
            dropDownMaxHeight={250}
            open={openSchArt}
            setOpen={setopenSchArt}
            value={valueSchArt}
            setValue={handleValueSchArt}
            placeholder='Schachtart'
            dropDownDirection='down'
        />
    </View>

    //Schachtdeckel Material//
    const [openSchachtMaterial, setopenSchachtMaterial] = useState(false)
    const [valueMaterialDeckel, setvalueMaterialDeckel] = useState(null)
    const [SchachtMaterial, setSchachtMaterial] = useState(
        [
            { label: 'Mat 1', value: 'mat1' },
            { label: 'Mat 2', value: 'mat2' },
            { label: 'Mat 3', value: 'mat3' },
        ])

    const handleValueDeMaChange = (value) => {
        if (value === valueMaterialDeckel) {
            setvalueMaterialDeckel(null);
        } else {
            setvalueMaterialDeckel(value);
        }
    };
    const DeckelMatKomp = <View style={styles.zIndex3000}>
        <DropDownPicker
            items={SchachtMaterial}
            setItems={setSchachtMaterial}
            multiple={false}
            style={styles.dropdownContainer}
            dropDownStyle={styles.dropdownList}
            itemStyle={styles.dropdownItem}
            dropDownMaxHeight={150}
            open={openSchachtMaterial}
            setOpen={setopenSchachtMaterial}
            value={valueMaterialDeckel}
            setValue={handleValueDeMaChange}
            placeholder='Material'
            dropDownDirection='down'
        />
    </View>
    //Deckel Zustand//
    const [openSchachtZustand, setopenSchachtZustand] = useState(false)
    const [valueDeckelZustand, setvalueDeckelZustand] = useState(null)
    const [DeckelZustand, setDeckelZustand] = useState(
        [
            { label: 'Zust 1', value: 'zust1' },
            { label: 'Zust 2', value: 'zust2' },
            { label: 'Zust 3', value: 'zust3' },
        ])

    const handleValueDeZustand = (value) => {
        if (value === valueMaterialDeckel) {
            setvalueDeckelZustand(null);
        } else {
            setvalueDeckelZustand(value);
        }
    };
    const DeckelZustKomp = <View style={styles.zIndex2000}>
        <DropDownPicker
            items={DeckelZustand}
            setItems={setDeckelZustand}
            multiple={true}
            min={1}
            style={styles.dropdownContainer}
            dropDownStyle={styles.dropdownList}
            itemStyle={styles.dropdownItem}
            dropDownMaxHeight={150}
            open={openSchachtZustand}
            setOpen={setopenSchachtZustand}
            value={valueDeckelZustand}
            setValue={handleValueDeZustand}
            placeholder='Deckel Zustand'
            dropDownDirection='down'
        />
    </View>
    //Rahmen Zustand//
    const [openRahmenZustand, setopenRahmenZustand] = useState(false)
    const [valueRahmenZustand, setvalueRahmenZustand] = useState(null)
    const [RahmenZustand, setRahmenZustand] = useState(
        [
            { label: 'ZustR 1', value: 'zustR1' },
            { label: 'ZustR 2', value: 'zustR2' },
            { label: 'ZustR 3', value: 'zustR3' },
        ])

    const handleValueRaZustand = (value) => {
        if (value === valueMaterialDeckel) {
            setvalueRahmenZustand(null);
        } else {
            setvalueRahmenZustand(value);
        }
    };
    const RahmenKomp = <View style={styles.zIndex1000}>
        <DropDownPicker
            items={RahmenZustand}
            setItems={setRahmenZustand}
            multiple={true}
            min={1}
            style={styles.dropdownContainer}
            dropDownStyle={styles.dropdownList}
            itemStyle={styles.dropdownItem}
            dropDownMaxHeight={150}
            open={openRahmenZustand}
            setOpen={setopenRahmenZustand}
            value={valueRahmenZustand}
            setValue={handleValueRaZustand}
            placeholder='Schachtrahmen Zustand'
            dropDownDirection='down'
        />
    </View>

    return (
        <ScrollView style={styles.container}>
            <View style={styles.row}>
                <ScrollView horizontal={true} style={styles.zIndex4000} contentContainerStyle={{ width: '100%', height: '100%' }}>
                    <View style={styles.leftContainer}>
                        <TextInput
                            placeholder='Schachtnummer'
                            label={'Schachtnr.:'}
                            style={styles.input}
                        />
                    </View>
                </ScrollView>
                <ScrollView horizontal={true} contentContainerStyle={{ width: '100%', height: '100%' }}>
                    <View style={styles.rightContainer}>
                        <TextInput
                            defaultValue={formattedDate}
                            label={'Datum:'}
                            style={styles.input}
                        />
                        <TextInput defaultValue='RUF' label={'erfasst von:'} style={styles.input} />
                    </View>
                </ScrollView>
            </View>
            <Text style={styles.text}>{'\n'}Allgemein:</Text>
            <View style={styles.row}>
                <ScrollView horizontal={true} style={styles.zIndex4000} contentContainerStyle={{ width: '100%', height: '100%' }}>
                    <View style={styles.leftContainer}>
                        {/* Abwasserart */}
                        <Text>Abwasserart:</Text>
                        {AbwArtKomp}
                        {openAbwArt === true ? <Text>{'\n'}{'\n'}{'\n'}</Text> : ''}
                        {/* DurchmesserKl */}
                        <TextInput
                            defaultValue='600'
                            label={'⌀ klein'}
                            style={styles.input} />
                    </View>
                </ScrollView>
                <ScrollView horizontal={true} contentContainerStyle={{ width: '100%', height: '100%' }}>
                    <View style={styles.rightContainer}>
                        {/* Schachtart */}
                        <Text>Schachtart:</Text>
                        {SchArtKomp}
                        {openSchArt === true ? <Text>{'\n'}{'\n'}{'\n'}</Text> : ''}
                        {/* DurchmesserGr */}
                        <TextInput
                            defaultValue='800'
                            label={'⌀ gross'}
                            style={styles.input} />
                    </View>
                </ScrollView>
            </View>
            <Text style={styles.text}>{'\n'}Deckel:</Text>
            <View style={styles.row}>
                <ScrollView horizontal={true} contentContainerStyle={{ width: '100%', height: '100%' }}>
                    <View style={styles.leftContainer}>
                        {/* Schachtdeckel Material */}
                        <Text>Material:</Text>
                        {DeckelMatKomp}
                        {openSchachtMaterial === true ? <Text>{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text> : ''}
                        {/* Deckel Zustand */}
                        <Text>Zustand Deckel:</Text>
                        {DeckelZustKomp}
                        {openSchachtZustand === true ? <Text>{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text> : ''}
                        {/* Schachtrahmen Zustand */}
                        <Text>Zustand Rahmen:</Text>
                        {RahmenKomp}
                        {openRahmenZustand === true ? <Text>{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text> : ''}
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        flexDirection: 'column',
        padding: 10
    },
    row: {
        flexDirection: 'row',
    },
    leftContainer: {
        flex: 1,
        backgroundColor: 'red',
        height: "100%"
    },
    rightContainer: {
        flex: 1,
        backgroundColor: 'blue',
        height: "100%"
    },
    input: {
        width: '99%',
        marginBottom: 3,
        height: 50,
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        borderColor: 'grey',
    },
    text: {
        fontSize: 24,
        zIndex: -1
    },
    dropdownContainer: {
        height: 50,
        width: '99%',
        marginBottom: 3,
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        borderColor: 'grey',
    },
    dropdownItem: {
        justifyContent: 'flex-start',
    },
    dropdownList: {
        backgroundColor: 'green',
    },
    zIndex4000: {
        zIndex: 4000,
    },
    zIndex1000: {
        zIndex: 1000,
    },
    zIndex2000: {
        zIndex: 2000,
    },
    zIndex3000: {
        zIndex: 3000,
    }
});
