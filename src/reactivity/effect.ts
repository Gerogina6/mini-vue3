class ReactiveEffect{
    private _fn: any
    constructor(fn) {
        this._fn = fn
    }
    run() {
        fn() {
            this._fn()
        }
    }
}

export function track(target, key) {

}

export function effect(fn) {
    const _effect = new ReactiveEffect(fn)
    _effect.run()
}