import { reactive } from "../reactive"

describe('reactive', () => {
    it('core path', () => {
        const original = {foo: 1}
        const observed = reactive(original)
        expect(observed).not.toBe(origianl)
        expect(observed.foo).toBe(1)
    })
})