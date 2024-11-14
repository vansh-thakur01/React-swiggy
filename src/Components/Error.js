import {useRouteError} from "react-router-dom";

const Error = ()=>{
    const er = useRouteError();
    console.log(er);
    return (
        <div>
            <h1>error</h1>
            <p>{er.error.message}</p>
            <p>{er.status}</p>
        </div>
    )
}


export default Error;