function getTimestamp(req,res,next) {
  
    const date = new Date();

    req.timeStamp = date.toLocaleString([],{hour: "2-digit", minute: "2-digit"});
    console.log(req.timeStamp);
    next();
}

module.exports = {
    getTimestamp: getTimestamp
}

