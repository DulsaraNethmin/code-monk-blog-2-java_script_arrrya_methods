let items=
[
    {name:'bike',        price:100},
    {name:'TV',      price:200},
    {name:'Album',      price:10},
    {name:'Book',      price:5},
    {name:'Phone',      price:500},
    {name:'Computer',      price:1000},
    {name:'Keyboard',      price:25}
]


let filter_item=items.filter((item)=>item.price>100);
console.log(filter_item);
console.log(items);
