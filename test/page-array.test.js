import pageArraySplit from '../src/page-array.js';
const test = QUnit.test;

const testArray = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven'
];



test('page 1 of 4 per page', assert => {

    const pagingOptions = {
        page: 1,
        perPage: 4
    };

    const expected = [
        'one',
        'two',
        'three',
        'four'
    ];

    const result = pageArraySplit(testArray, pagingOptions);
    assert.deepEqual(result, expected);
});


test('page 2 of 5 per page', assert => {

    const pagingOptions = {
        page: 2,
        perPage: 5
    };

    const expected = [
        'six',
        'seven',
        'eight',
        'nine',
        'ten'
    ];

    const result = pageArraySplit(testArray, pagingOptions);
    assert.deepEqual(result, expected);
});

test('page 2 of 5 per page', assert => {

    const pagingOptions = {
        page: 2,
        perPage: 5
    };

    const expected = [
        'six',
        'seven',
        'eight',
        'nine',
        'ten'
    ];

    const result = pageArraySplit(testArray, pagingOptions);
    assert.deepEqual(result, expected);
});