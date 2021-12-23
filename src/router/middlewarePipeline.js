//context - объект контекста, нужен для того, чтобы передавать его каждому middleware в стеке
//middleware - сам масив middleware, навешеных на роут
//index - указатель на текущий middleware в массиве
function middlewarePipeline (context, middleware, index) {
    // Здесь мы проверяем есть ли middleware с нужным index. Если его нету, то вызываем коллбэк next() нашего контекста
    const nextMiddleware = middleware[index]
    if(!nextMiddleware){
        return context.next 
    }
    /*
    Если же nextMiddleware есть, то передаем в него контекст и переменную nextPipeline, в которой просто увеличиваем index на 1, тем самым указавая функции запускать следующий middleware.
    В итоге мы возвращаем middleware с перезаписанным next, в котором у нас лежит функция middlewarePipeline. Таким образом с помощью рекурсии мы пройдем все middleware в стеке.
     */
    return param => {
        //если next передался с параметром (например: next({ name: 'Login'})), то прерываем выполнение pipeline 
        if (param) return context.next(param)

        const nextPipeline = middlewarePipeline(
            context, middleware, index + 1
        )
        nextMiddleware({ ...context, next: nextPipeline })
    }
}
export default middlewarePipeline