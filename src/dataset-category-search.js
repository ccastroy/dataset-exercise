
module.exports = class DataSetCategorySearch {
  constructor(parentSearch) {
    this.parentSearch = parentSearch;
  }

  getDataByCategoryId(dataSet, categoryId) {
    const [result] = dataSet.filter(item => item.categoryId === categoryId);
    return result ? {
      name: result.name,
      parentCategoryId: result.parentCategoryId,
      keywords: this.getKeywords(dataSet, result)
    } : null;
  }

  getKeywords(dataSet, item) {
    if (item.keywords && item.keywords !== '') {
      return item.keywords;
    }
    if (item.parentCategoryId === -1) {
      return '';
    }
    const itemParent = this.parentSearch.getParent(dataSet, item);
    return this.getKeywords(dataSet, itemParent);
  }
};
