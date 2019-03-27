export const submitForm = body => {
    return({
        type: "[FORM] API_REQUEST",
        payload: {
            url: "http://localhost:5000/upload",
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: body,
            success: responseSuccess,
            failed: responseFailed,
            start: startFetching,
            stop: stopFetching
        }
    })
}

export const responseSuccess = response => {
    return{
        type: "RESPONSE_SUCCESS",
        payload: response
    }
}

export const responseFailed = error => {
    return{
        type: "RESPONSE_FAILED",
        payload: error
    }
}

export const startFetching = action => {
    return{
        type: "FETCH_START",
        payload: action
    }
}

export const stopFetching = action => {
    return{
        type: "FETCH_STOP",
        payload: action
    }
}