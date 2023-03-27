exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'este é o valor da variável local'
    next()
}