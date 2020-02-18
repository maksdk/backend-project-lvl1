#!/usr/bin/env node
// @ts-check

import { askName, greet } from '../src/index.js';

const name = askName();
greet(name);
