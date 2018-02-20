const DatasetLevelSearch = require('../src/dataset-level-search');
const DataSetParentSearch = require('../src/dataset-parent-search');

describe('Dataset Level Search:', () => {
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

    describe('when searching by level 2', () => {
      it('then the result should be returned correctly', () => {
        const levelSearch = new DatasetLevelSearch(new DataSetParentSearch());
        const result = levelSearch.getDataByLevel(dataset, 2);
        expect(result.sort()).toEqual([101, 102, 201]);
      });
    });

    describe('when searching by level 3', () => {
      it('then the result should be returned correctly', () => {
        const levelSearch = new DatasetLevelSearch(new DataSetParentSearch());
        const result = levelSearch.getDataByLevel(dataset, 3);
        expect(result.sort()).toEqual([103, 109, 202]);
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
        const categorySearch = new DatasetLevelSearch(new DataSetParentSearch());
        expect(() => categorySearch.getDataByLevel(wrongDataset, 2)).toThrow(new Error('Could not find a parent with Id 110'));
      });
    });
  });
});
