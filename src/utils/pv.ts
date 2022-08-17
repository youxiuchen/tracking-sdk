
// 重写history方法

export const createHistoryEvent = <T extends keyof History>(type:T)=>{
    const origin = history[type]

    return function (this:any){
        const res = origin.apply(this, arguments)

        // 自定义事件
        const e = new Event(type)
        // 派发事件
        window.dispatchEvent(e)
        return res
    }
}
