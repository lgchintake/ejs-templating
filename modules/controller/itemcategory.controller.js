import itemCategoryCollection from "../model/itemcategory.model.js";

export const addItemCategory = async (req, res) => {
  res.render("item-cetegory-add");
};

export const saveItemCategory = async (req, res) => {
  const formFields = req.fields;
  const itemCategory = new itemCategoryCollection({
    categoryName: formFields.categoryName,
    categoryDescription: formFields.categoryDescription,
  });

  await itemCategory.save();
  res.render("item-cetegory-add", { categoryDetails: itemCategory });
};
export const getItemCategories = async (req, res) => {
  const categoryList = await itemCategoryCollection.find();
  res.render("item-category-list", { categoryList });
};

export const editItemCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const category = await itemCategoryCollection.findOne({ _id: id });
    res.render("item-category-edit", { category });
  } catch (error) {
    res.render("item-category-edit");
  }
};

export const updateItemCategory = async (req, res) => {
  const id = req.params.id;
  const formFields = req.fields;

  const udpatedDetails = await itemCategoryCollection.updateOne(
    { _id: id },
    {
      categoryName: formFields.categoryName,
      categoryDescription: formFields.categoryDescription,
    }
  );
  if (udpatedDetails.acknowledged && udpatedDetails.modifiedCount == 1) {
    res.redirect("/item-category/");
  } else {
    res.render("item-category-edit", { errorDetails: udpatedDetails });
  }
};
