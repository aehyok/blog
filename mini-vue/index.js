const { effect, reactive } = require('@vue/reactivity')

console.log('hello javascript')
console.log('-----------------第一个版本-------------------')
{
    let a = 10
    let b = a + 10
    console.log(b)

    a = 20
    b = a + 10
    console.log(b)
}

console.log('-----------------第二个版本-------------------')
{
    let a = 10
    let b
    update()
    function update() {
        b = a + 10
        console.log(b)
    }
    
    a = 20
    update()
}


// a发生变更了，想让b自动更新
console.log('-----------------第三个版本-------------------')
{
    // 声明一个响应式的对象
    let a = reactive({
        value: 1,
    })
    let b
    effect(() => {
        // 1、首次会自动执行一次，
        // 2、a.value发生变化 effect会再次执行
        b = a.value + 10
        console.log(b)
    })

    a.value = 30
}