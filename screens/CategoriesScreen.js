import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const RenderCategoryItem = ({ itemData }) => {
  return (
    <CategoryGridTile
      title={itemData?.item?.title}
      color={itemData?.item?.color}
    />
  );
};
const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item?.id}
      renderItem={(item) => <RenderCategoryItem itemData={item} />}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
