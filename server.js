const path = require('path')
const express = require('express');
const fileUpload = require ('express-fileupload')
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'public');


app.use(express.static(publicPath));
app.use(fileUpload());
app.use(require('prerender-node'));

app.post('/upload', (req, res) => {
    if(req.files == null) {
        return res.status(400).json({msg: "no file was uploaded"})
    }

    const file = req.files.file

    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
        if(err) {
            console.error(error);
            return res.status(500).send(err)

        }

        res.json({ fileName: file.name, filePath: `/uploads/${file.name}`})
    })
})
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });
app.listen(port, ()=> console.log(`Server is up on port ${port}!`))