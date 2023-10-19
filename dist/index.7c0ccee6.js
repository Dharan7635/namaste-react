const heading = React.createElement("div", {
    className: "parent"
}, [
    React.createElement("div", {
        className: "child"
    }, [
        React.createElement("h1", {
            className: "h1"
        }, "Im from H1 tag"),
        React.createElement("h2", {
            className: "h12"
        }, "Im from H1 tag")
    ]),
    React.createElement("div", {
        className: "child2"
    }, [
        React.createElement("h1", {
            className: "h1"
        }, "Im from H1 tag"),
        React.createElement("h2", {
            className: "h12"
        }, "Im from H1 tag")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//# sourceMappingURL=index.7c0ccee6.js.map
