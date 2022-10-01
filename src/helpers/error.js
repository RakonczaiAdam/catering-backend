class TokenExpiredError extends Error{
    static MESSAGE = "Jwt access token has expired."
    constructor(){
        super(MESSAGE, 401)
        this.name = this.constructor.name
        Error.captureStackTrace(this, this.constructor);
    }
}

class FieldConflictError extends Error{
    constructor(recordType, field){
        super(`${recordType} with this ${field} content is already exist.`, 400)
        this.name = this.constructor.name
        Error.captureStackTrace(this, this.constructor);
    }
}

class PermissionError extends Error{
    static MESSAGE = "Only admins can use this function."
    constructor(){
        super(MESSAGE, 403)
        this.name = this.constructor.name
        Error.captureStackTrace(this, this.constructor);
    }
}

class ResourceError extends Error{
    static MESSAGE = "The header or body resources are not right."
    constructor(){
        super(MESSAGE, 400)
        this.name = this.constructor.name
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = {
    TokenExpiredError,
    FieldConflictError,
    PermissionError,
    ResourceError
}