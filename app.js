// const heading = React.createElement(
//     "h1", 
//     {id:"heading"},
//     "Hello world from React js");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// console.log(heading);


/**
 * 
 * How to achieve nested HTML in react
 * 
 * 
 */

const nestedEle = React.createElement(
    "div",
    {id:"parent"},[
    React.createElement(
        "div",
        {id:"child 1"},[
            React.createElement("h1",{},"Heading 1"),
            React.createElement("h2",{},"Heading 2")
        ]
    ),
    React.createElement(
        "div",
        {id:"Child 2"},[
            React.createElement("h1",{},"Heading 1"),
            React.createElement("h2",{},"Heading 2")
        ]
    )
]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nestedEle);






