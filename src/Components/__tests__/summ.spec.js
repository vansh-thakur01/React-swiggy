import {sum} from '../sum.js'

test("testing sun function",()=>{
    const res = sum(2,4);

    // Assertion
    expect(res).toBe(6);
});