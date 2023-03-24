import { View, Text } from "react-native";
import React from "react";
import FeaturedRow from "./FeaturedRow";

const FeaturedRows = ({ featuredCategories }) => {
  return (
    <View>
      {featuredCategories?.map((category) => (
        <FeaturedRow
          key={category._id}
          id={category._id}
          title={category.name}
          description={category.short_description}
        />
      ))}
    </View>
  );
};

export default FeaturedRows;
