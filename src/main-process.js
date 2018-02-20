const DatasetLoader = require('./dataset-loader');
const DataSetCategorySearch = require('./dataset-category-search');
const DataSetLevelSearch = require('./dataset-level-search');
const DataSetParentSearch = require('./dataset-parent-search');

module.exports = function main(args) {
  const datasetLoader = new DatasetLoader();
  const dataSet = datasetLoader.getDataset();
  const parentSearch = new DataSetParentSearch();
  if (args.category) {
    const categorySearch = new DataSetCategorySearch(parentSearch);
    console.log(
      'Category Search Result:',
      categorySearch.getDataByCategoryId(dataSet, args.category) || 'Category Id doesn\'t exists'
    );
  }
  if (args.level) {
    const levelSearch = new DataSetLevelSearch(parentSearch);
    console.log('Level Search Results:', levelSearch.getDataByLevel(dataSet, args.level));
  }
};
