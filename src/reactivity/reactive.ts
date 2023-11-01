export  function reactive(raw) {
    return new Proxy(raw, {
        get(target, key) {
            // {foo:1}
            // foo
            const res = Reflect.get(target, key)
            // 依赖收集
            return res
        },
        set(target, key, value) {
            const res = Reflect.get(target, key, value)
            return res
        }
    })
}