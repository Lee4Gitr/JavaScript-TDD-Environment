let makeCallbackSynchronous = (functionOne, functionOneArgs, functionTwo, functionTwoArgs) => {
    functionOne({ ...functionOneArgs });
    functionTwo({ ...functionTwoArgs });
}