function createStack()
{
    const items = [];
    return {
        push(item) {
            items.push(item)
        },
        pop() {
            return items.pop()
        }
    }
    
         
}
let p = createStack()

p.push(4)
p.push(5)
p.pop() // 5
console.log(p.items) // undefined

