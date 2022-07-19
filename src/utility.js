import { cwd } from 'node:process';
import { resolve } from 'path';
import { readFileSync } from 'node:fs';
import _ from 'lodash';

export const getPath = (path) => resolve(cwd(), path);

export const readFile = (path) => readFileSync(getPath(path), 'utf-8');

export const sortUnionArrays = (arr1, arr2) => _.sortBy(_.union(arr1, arr2));