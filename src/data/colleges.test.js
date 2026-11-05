import fs from 'fs';
import path from 'path';
import colleges from './colleges.json';

test('every college has a unique name, because names are used as React keys', () => {
  const names = colleges.map((college) => college.name);

  expect(new Set(names).size).toBe(names.length);
});

test('every college logo path points to a real file', () => {
  const missing = colleges.filter((college) => !fs.existsSync(path.join('public', college.logo)));

  expect(missing).toEqual([]);
});

test('no logo file is left unused', () => {
  const used = new Set(colleges.map((college) => path.basename(college.logo)));
  const unused = fs.readdirSync(path.join('public', 'college-logos')).filter((file) => !used.has(file));

  expect(unused).toEqual([]);
});
