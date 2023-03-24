import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import FeaturedRows from "./FeaturedRows";
import sanityClient from "../../sanity";

const HomeContent = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    sanityClient.fetch(`
    *[_type=="featured"]{
      ...,
      restaurant[]->{
        ...,
        dishes[]->
      }
    }
    `).then(data=>setFeaturedCategories(data))
  }, []);
  return (
    <ScrollView
      className="bg-gray-100"
      contentContainerStyle={{
        paddingBottom: 100,
      }}
    >
      <Categories />
      <FeaturedRows featuredCategories={featuredCategories} />
    </ScrollView>
  );
};

export default HomeContent;
