module.exports = class DatasetParentSearch {
  getParent(dataSet, item) {
    const [itemParent] = dataSet.filter(parent => parent.categoryId === item.parentCategoryId);
    if (!itemParent) {
      throw new Error(`Could not find a parent with Id ${item.parentCategoryId}`);
    }
    return itemParent;
  }
};

