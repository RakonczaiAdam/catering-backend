class TokenExpiredError extends Error{
    static MESSAGE = "Jwt access token has expired"
    constructor(){
        super(MESSAGE, 401)
        this.name = this.constructor.name
        Error.captureStackTrace(this, this.constructor);
    }
}

class NameAlreadyExistError extends Error{
    static MESSAGE = "with this name is already exist"
    constructor(recordType){
        super(`${recordType} ${MESSAGE}`, 400)
        this.name = this.constructor.name
        Error.captureStackTrace(this, this.constructor);
    }
}

class PermissionError extends Error{
    static MESSAGE = "Only admins can use this function"
    constructor(){
        super(MESSAGE, 403)
        this.name = this.constructor.name
        Error.captureStackTrace(this, this.constructor);
    }
}

class ResourceError extends Error{
    static MESSAGE = "The header or body resources are not right"
    constructor(){
        super(MESSAGE, 400)
        this.name = this.constructor.name
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = {
    TokenExpiredError,
    NameAlreadyExistError,
    PermissionError,
    ResourceError
}