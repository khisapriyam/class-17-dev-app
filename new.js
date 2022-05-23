const people =[
    {
        name : "pk",
        age : 21,
        roll: 23
    },
    {
        name : "kk",
        age : 24,
        roll: 2
    },
    {
        name : "ck",
        age : 29,
        roll: 29
    }
]


for(data of people) {
    console.log(data.name)

}

for(data in people){
    console.log(people[data].roll)
}