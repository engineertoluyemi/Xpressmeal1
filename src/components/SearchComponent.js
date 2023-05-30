import {
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  FlatList,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState, useRef } from "react";
import { colors } from "../global/styles";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { filterData } from "../global/Data";
import { filter } from "lodash";

export default function SearchComponent() {
  const navigation = useNavigation();
  const [data, setData] = useState([...filterData]);
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputFocussed, setTextInputFocussed] = useState(true);

  const textInput = useRef(0);

  const contain = ({ name }, query) => {
    if (name.includes(query)) {
      return true;
    }
    return false;
  };

  const handleSearch = (text) => {
    const dataS = filter(filterData, (user) => {
      return contain(user, text);
    });
    setData([...dataS]);
  };

  return (
    <View style={{ alignItems: "center" }}>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <View style={styles.searchArea}>
          <Icon
            name="search"
            type="material"
            iconStyle={styles.searchIcon}
            size={32}
          />
          <Text style={{ fontSize: 15 }}>What are you looking for?</Text>
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.view1}>
            <View style={styles.textInput}>
              <Animatable.View
                animation={textInputFocussed ? "fadeInRight" : "fadeInLeft"}
                duration={400}
              >
                <Icon
                  name={textInputFocussed ? "arrow-back" : "search"}
                  onPress={() => {
                    if (textInputFocussed) setModalVisible(false);
                    setTextInputFocussed(true);
                  }}
                  style={styles.icon2}
                  type="material"
                  iconStyle={{ marginRight: 5 }}
                />
              </Animatable.View>
              <TextInput
                style={{ width: "90%" }}
                placeholder=""
                autoFocus={false}
                ref={textInput}
                onFocus={() => {
                  setTextInputFocussed(true);
                }}
                onBlur={() => {
                  setTextInputFocussed(false);
                }}
                onChangeText={handleSearch}
              />
              <Animatable.View
                animation={textInputFocussed ? "fadeInLeft" : ""}
              >
                <Icon
                  name={textInputFocussed ? "cancel" : null}
                  onPress={() => {
                    textInput.current.clear();
                    handleSearch();
                  }}
                  style={{ marginRight: 0 }}
                  type="material"
                  iconStyle={{ color: colors.gray3 }}
                />
              </Animatable.View>
            </View>
          </View>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => {
                  Keyboard.dismiss;
                  navigation.navigate("SearchResultScreen", {
                    item: item.name,
                  });
                  setTextInputFocussed(true);
                }}
              >
                <View style={styles.view2}>
                  <Text style={{ color: colors.gray2, fontSize: 15 }}>
                    {item.name}
                  </Text>
                </View>
              </Pressable>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    fontSize: 16,
    color: colors.gray3,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 0,
    borderColor: "#86939e",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  searchArea: {
    width: "94%",
    height: 50,
    backgroundColor: colors.gray5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.gray4,
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    padding: 5,
    color: colors.gray2,
  },
  view1: {
    height: 70,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  view2: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  icon2: {
    fontSize: 24,
    padding: 5,
    color: colors.gray2,
  },
  modal: {
    flex: 1,
  },
});
