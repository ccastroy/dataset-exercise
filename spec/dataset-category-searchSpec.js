const DatasetCategorySearch = require('../src/dataset-category-search');
const DataSetParentSearch = require('../src/dataset-parent-search');

describe('Dataset Category Search:', () => {
  describe('Given a loaded dataset ', () => {
    // using same data,so all exercise document scenarios can be tested
    const dataset = [
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
    describe('when searching by category 201', () => {
      it('then the result should be returned correctly', () => {
        const categorySearch = new DatasetCategorySearch(new DataSetParentSearch());
        const result = categorySearch.getDataByCategoryId(dataset, 201);
        expect(result).toEqual({
          name: 'Computer',
          parentCategoryId: 200,
          keywords: 'Teaching'
        });
      });
    });

    describe('when searching by category 202', () => {
      it('then the result should be returned correctly', () => {
        const categorySearch = new DatasetCategorySearch(new DataSetParentSearch());
        const result = categorySearch.getDataByCategoryId(dataset, 202);
        expect(result).toEqual({
          name: 'Operating System',
          parentCategoryId: 201,
          keywords: 'Teaching'
        });
      });
    });

    describe('when searching by a category that doesn\'t exist', () => {
      it('then the result should be null', () => {
        const categorySearch = new DatasetCategorySearch(new DataSetParentSearch());
        const result = categorySearch.getDataByCategoryId(dataset, 2000);
        expect(result).toBeNull();
      });
    });
  });

  describe('Given a wrong dataset', () => {
    describe('when searching and a node doesn\'t have a parent in the dataset', () => {
      it('then it should throw an error', () => {
        const wrongDataset = [
          {
            categoryId: 100,
            parentCategoryId: -1,
            name: 'Business',
            keywords: 'Money'
          },
          {
            categoryId: 200,
            parentCategoryId: 110,
            name: 'Tutoring',
            keywords: null
          }
        ];
        const categorySearch = new DatasetCategorySearch(new DataSetParentSearch());
        expect(() => categorySearch.getDataByCategoryId(wrongDataset, 200)).toThrow(new Error('Could not find a parent with Id 110'));
      });
    });
  });
});
