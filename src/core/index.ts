import {DefaultOptons,TrackerConfig,Options} from '../types/index'

export default class Tracking {
    public data:Options;
    constructor (options: Options){
        this.data = Object.assign(this.initDef(),options)
    }

    private initDef ():DefaultOptons {
        return <DefaultOptons>{
            sdkVersion:TrackerConfig.version,
            historyTracker:false,
            hashTracker: false,
            domTracker:false,
            jsError: false,
        }
    }
}