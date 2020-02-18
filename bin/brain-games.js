#!/usr/bin/env node
//@ts-check
import { askName, greet } from "../src";
const name = askName();
greet(name);
