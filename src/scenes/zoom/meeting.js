
import React,{useEffect, Fragment} from "react";

const Meeting=({payload})=>
{
    useEffect(()=>{
        const zommfn = async () => {
        const {ZoomMtg}= await import("@zoomus/websdk");

        ZoomMtg.setZoomJSLib('https://source.zoom.us/lib','/av');

        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareWebSDK();

        ZoomMtg.generateSDKSignature({
            meetingNumber:payload.meetingNumber,
            role:payload.role,
            sdkKey:payload.sdkKey,
            sdkSecret:payload.sdkSecret,
            success:function(signature)
            {
                ZoomMtg.init({
                    leaveUrl:payload.leaveUrl,
                    success:function(data)
                    {
                        ZoomMtg.join({
                            meetingNumber:payload.meetingNumber,
                            signature:signature.result,
                            sdkKey:payload.sdkKey,
                            userName:payload.userName,
                            userEmail:payload.userEmail,
                            passWord:payload.passWord,
                            tk:'',
                            success:function(){
                                console.log('--Joined--');
                            },
                            error:function(error)
                            {
                                console.log(error);
                            }
                        })
                    },
                    error:function(error)
                    {
                        console.log(error);
                    }
                 })
            },
            error:function(error)
            {
                console.log(error);
            }
        })}
        zommfn()
    },[])
    return(
        <Fragment></Fragment>
    )
};

export default Meeting;