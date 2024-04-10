import { Equal, Expect } from "../helpers/type-utils";

const myFunc = (str: string) => {
  return "hello";
};

type MyFuncType = typeof myFunc;
/**
 * How do we extract MyFuncReturn from myFunc?
 */
type MyFuncReturn = ReturnType<MyFuncType>;

type tests = [Expect<Equal<MyFuncReturn, string>>];
