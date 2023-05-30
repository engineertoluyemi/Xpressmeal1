import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../global/styles";
import { Image } from "react-native";
import { Icon } from "@rneui/base";

export default function FoodCart({
  onPressFoodCart,
  restaurantName,
  deliveryAvailable,
  discountPercent,
  numberOfReview,
  businessAddress,
  distance,
  averageReview,
  restauranyImage,
  screenWidth,
}) {
  return (
    <View>
      <TouchableOpacity>
        <View style={{ ...styles.cardView, width: screenWidth }}>
          <Image
            style={{ ...styles.image, width: screenWidth }}
            source={{ uri: restauranyImage }}
          />
          <View>
            <View>
              <Text style={styles.restaurantName}>{restaurantName}</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <View style={styles.distance}>
                <Icon
                  type="material"
                  name="place"
                  color={colors.gray2}
                  size={18}
                  iconStyle={{
                    marginTop: 3,
                  }}
                />
                <Text style={styles.min}>{distance} Min</Text>
              </View>

              <View style={{ flex: 9, flexDirection: "row" }}>
                <Text style={styles.address}>{businessAddress}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.review}>
          <Text style={styles.averageReview}>{averageReview}</Text>
          <Text style={styles.totalReview}>{numberOfReview} reviews</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 9,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 1,
    borderColor: colors.gray4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 150,
  },
  restaurantName: {
    fontSize: 17,
    fontWeight: "bold",
    color: colors.gray1,
    marginTop: 5,
    marginLeft: 10,
  },
  distance: {
    flex: 4,
    flexDirection: "row",
    borderRightColor: colors.gray4,
    paddingHorizontal: 5,
    borderRightWidth: 1,
  },
  min: {
    fontSize: 12,
    fontWeight: "bold",
    paddingTop: 5,
    color: colors.gray3,
  },
  address: {
    fontSize: 12,
    paddingTop: 5,
    color: colors.gray2,
    paddingHorizontal: 10,
  },
  review: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: colors.transparentDark,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12,
  },
  averageReview: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -3,
  },
  totalReview: {
    color: colors.white,
    fontSize: 13,
    marginLeft: 0,
    marginRight: 0,
  },
});
