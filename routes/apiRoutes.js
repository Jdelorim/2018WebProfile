module.exports = (app) => {
    app.get("/", (req,res) => {
        res.render("index", {title: "Joshua deLorimier Web Portfolio"});
    });
}