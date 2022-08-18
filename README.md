
# 前端Tracking-sdk
收集前端页面的数据，并上报、分析



## 使用方法/示例

```javascript
import Tracking from 'Tracking-sdk'

/**
 * @requestUrl 接口地址  必填
 * @historyTracker history上报
 * @hashTracker hash上报
 * @domTracker 携带Tracker-key 点击事件上报
 * @sdkVersionsdk版本
 * @extra透传字段
 * @jsError js 和 promise 报错异常上报
 */
 export interface DefaultOptons {
    uuid: string | undefined,
    requestUrl: string | undefined,
    historyTracker: boolean,
    hashTracker: boolean,
    domTracker: boolean,
    sdkVersion: string | number,
    extra: Record<string, any> | undefined,
    jsError:boolean
}

const tracking = new Tracking({
    requestUrl: "",
    }) 
```

