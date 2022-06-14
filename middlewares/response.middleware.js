const responseMiddleware = (req, res, next) => {
   // TODO: Implement middleware that returns result of the query

   if (res.data) {
       return res.status(200).json(res.data)
   }
   if (res.err.message.substr(-5) === 'found') {
        return res.status(404).json({error: true, message: res.err.message})
        // , status: 404})
   }
   if (res.err) {
       return res.status(400).json({error: true, message: res.err.message})
        // , status: 400})
   }
    next();
}

exports.responseMiddleware = responseMiddleware;