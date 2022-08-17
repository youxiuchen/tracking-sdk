import {DefaultOptons,TrackerConfig,Options} from '../types/index'

import {createHistoryEvent} from '../utils/pv'
export default class Tracking {
    public data:Options;
    constructor (options: Options){
        this.data = Object.assign(this.initDef(),options)
        this.installTracking()
    }

    private initDef ():DefaultOptons {

        window.history["pushState"] = createHistoryEvent("pushState")
        window.history["replaceState"] = createHistoryEvent("replaceState")
        return <DefaultOptons>{
            sdkVersion:TrackerConfig.version,
            historyTracker:false,
            hashTracker: false,
            domTracker:false,
            jsError: false,
        }
    }

    private captureEvents <T>(mouseEventList:string[],targetKey:string,data?:T){
        mouseEventList.forEach(event => {
            window.addEventListener(event,()=>{
                console.log("监听到了");
                
            })
        })
    }

    private installTracking (){
        if(this.data.historyTracker){
            this.captureEvents(['pushState','replaceState','popState'],'history-pv')
        }
    }
}