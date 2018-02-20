
module.exports = class DataSetLevelSearch {
  constructor(parentSearch) {
    this.parentSearch = parentSearch;
  }

  getDataByLevel(dataSet, level) {
    // will store level information for preventing redundant calculations
    // used it as localVar instead of field for thread safeness
    const levelCache = {};
    return dataSet.filter(item => this.getItemLevel(dataSet, item, levelCache) === level)
      .map(item => item.categoryId);
  }

  getItemLevel(dataSet, item, levelCache) {
    if (levelCache[item.categoryId]) {
      return levelCache[item.categoryId];
    }
    if (item.parentCategoryId === -1) {
      levelCache[item.categoryId] = 1;
      return 1;
    }
    const itemParent = this.parentSearch.getParent(dataSet, item);
    const level = this.getItemLevel(dataSet, itemParent, levelCache) + 1;
    levelCache[item.categoryId] = level;
    return level;
  }
};
