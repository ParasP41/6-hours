class customError extends Error()
{
    constructor(message)
    {
        super(message);
    }
}

module.export={customError};