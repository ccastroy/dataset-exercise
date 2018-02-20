
module.exports = class DatasetLoader {
  // this could be loaded from a database, api call, etc.
  getDataset() {
    return [
      {
        categoryId: 100,
        parentCategoryId: -1,
        name: 'Business',
        keywords: 'Money'
      },
      {
        categoryId: 200,
        parentCategoryId: -1,
        name: 'Tutoring',
        keywords: 'Teaching'
      },
      {
        categoryId: 101,
        parentCategoryId: 100,
        name: 'Accounting',
        keywords: 'Taxes'
      },
      {
        categoryId: 102,
        parentCategoryId: 100,
        name: 'Taxation',
        keywords: null
      },
      {
        categoryId: 201,
        parentCategoryId: 200,
        name: 'Computer',
        keywords: null
      },
      {
        categoryId: 103,
        parentCategoryId: 101,
        name: 'Corporate Tax',
        keywords: null
      },
      {
        categoryId: 202,
        parentCategoryId: 201,
        name: 'Operating System',
        keywords: null
      },
      {
        categoryId: 109,
        parentCategoryId: 101,
        name: 'Small business tax',
        keywords: null
      }
    ];
  }
};

