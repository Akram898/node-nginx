const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

//Serialized URL
console.log(myUrl.href);

//Host
console.log(myUrl.host);

//Path Name
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

//Serialized query
console.log(myUrl.searchParams);

//Add Param
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value} `));
