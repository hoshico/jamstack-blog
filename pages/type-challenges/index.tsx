import TypeChallengeIcon from '../../public/icons/typechallenge.svg';

const easyList = [
  'Pick',
  'Readonly',
  'Tuple to Object',
  'First of Array',
  'Length of Tuple',
  'Exclude',
  'Awaited',
  'If',
  'Concat',
  'Includes',
  'Push',
  'Unshift',
  'Parameters',
];

const mediumList = [
  'Get Return Type',
  'Omit',
  'Readonly',
  'Deep Readonly',
  'Turple to Union',
  'Chainable Options',
  'Last of Array',
  'Pop',
  'Promise.all',
  'Type Lookup',
  'Trim Left',
  'Trim',
  'Capitalize',
  'Replace',
  'ReplaceAll',
  'Append Argument',
  'Permutation',
  'Length of String',
  'Flatten',
  'Append to object',
  'Absolute',
  'String to Union',
  'Merge',
  'KebabCase',
  'Diff',
  'AnyOf',
  'IsNever',
  'IsUnion',
  'ReplaceKeys',
  'Remove Index Signature',
  'Percentage Parser',
  'Drop Char',
  'MinusOne',
  'PickByType',
  'StartsWith',
  'EndsWith',
  'PartialByKeys',
  'RequiredByKeys',
  'Mutabla',
  'OmitByType',
  'ObjectEntries',
  'Shift',
  'turple to Nested Object',
  'Reverse',
  'Flip Arguments',
  'FlattenDepth',
  'BEM style string',
  'InorderTraversal',
  'Flip',
  'Fibonacci Sequence',
  'AllCombinations',
  'Greater Than',
  'Zip',
  'IsTuple',
  'Chunk',
  'Fill',
  'Trim Right',
  'Without',
  'Trunc',
  'IndexOf',
  'Join',
  'LastIndexOf',
  'Unique',
  'MapTypes',
  'Construct Tuple',
  'Number Range',
  'Combination',
  'Subsequence',
  'CheckRepeatedChars',
  'FirstUniqueCharIndex',
  'Parse URL Params',
  'GetMiddleElement',
  'Appear only once',
  'Count Element Number To Object',
  'Integer',
  'ToPrimitive',
  'DeepMutable',
  'All',
  'Filter',
  'FindAll',
  'Combination Key type',
  'Permutations of Tuple',
  'Replace First',
  'Tranpose',
  'JSON Schema to TypeScript',
  'Square',
  'Triangular number',
  'CartesianProduct',
  'MergeAll',
  'CheckRepeatedTuple',
  'Public Type',
  'ExtranctToObject',
  'Deep Omit',
  'IsOdd',
  'Tower of hanoi',
  "Pascal's trianle",
  'IsFixedStringLiteralType',
];

const hardList = [
  'Simple Vue',
  'Currying',
  'Union to Intersection',
  'Get Required',
  'Get Optional',
  'Required Keys',
  'Optional keys',
  'Capitalize Words',
  'CamelCase',
  'C-printf Parser',
  'Vue Basic Props',
  'IsAny',
  'Typed Get',
  'String to Number',
  'tuple Filter',
  'Tuple to Enum Object',
  'printf',
  'Deep object to unique',
  'Length of String 2',
  'Union to Tuple',
  'String Join',
  'DeepPick',
  'Pinia',
  'Camelize',
  'Drop String',
  'Split',
  'ClassPublickeys',
  'IsRequiredkey',
  'ObjectFromEntries',
  'IsPalindrome',
  'Mutable Keys',
  'Intersection',
  'Binary to Decimal',
  'Object key Paths',
  'Two Sum',
  'ValidDate',
  'Assign',
  'Maximum',
  'Capitalize Nest Object Keys',
  'Replace Union',
  'FizzBuzz',
  'Run-length encoding',
  'Tree path array',
  'SnakeCase',
  'IsNegativeNumber',
  'OptionalUndefined',
  'Unique Items',
  'BitwiseXOR',
  'Sudoku',
  'Length of String 3',
  'Unbox',
  'Binary Addition',
];

const Typechallenges = () => {
  return (
    <div className="h-full bg-white pb-10">
      <div className="flex">
        <div className="mx-auto w-5/6">
          <TypeChallengeIcon />
        </div>
      </div>
      <div className="mt-6">
        <ul className="mx-auto flex w-5/6 flex-wrap gap-4">
          {easyList.map((ele) => (
            <li key={ele}>
              <div className="badge cursor-pointer gap-2 border-none bg-green-500">
                <p className="text-white">{ele}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <ul className="mx-auto flex w-5/6 flex-wrap gap-4">
          {mediumList.map((ele) => (
            <li key={ele}>
              <div className="badge cursor-pointer  gap-2 border-none bg-yellow-600">
                <p className="text-white">{ele}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <ul className="mx-auto flex w-5/6 flex-wrap gap-4">
          {hardList.map((ele) => (
            <li key={ele}>
              <div className="badge badge-error cursor-pointer gap-2">
                <p className="text-white">{ele}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Typechallenges;
