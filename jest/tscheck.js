// eslint-disable-next-line import/no-commonjs
const fs = require('file-system');
// eslint-disable-next-line import/no-commonjs
const { exec } = require('child_process');

const data = fs
  .readFileSync(
    'packages/core/src/__tests__/__typings__/__failures__/index.tsx',
    'utf8'
  )
  .slice(15);

fs.writeFileSync(
  'packages/core/src/__tests__/__typings__/__failures__/index-gen.tsx',
  data
);

exec('yarn tsc --project tsconfig.json --noEmit', (_, e) => {
  const err = e
    .split('\n')
    .slice(2, -2)
    .join('\n');
  fs.unlinkSync(
    'packages/core/src/__tests__/__typings__/__failures__/index-gen.tsx'
  );
  fs.unlinkSync(
    'packages/core/src/__tests__/__typings__/__failures__/index-gen.d.ts'
  );
  fs.unlinkSync(
    'packages/core/src/__tests__/__typings__/__failures__/index-gen.js'
  );
  const res =
    err ===
    `packages/core/src/__tests__/__typings__/__failures__/index-gen.tsx(13,24): error TS2322: Type 'null' is not assignable to type 'InitialState | undefined'.`;
  console.log(res ? 'PASSED' : 'FAILED');
});
