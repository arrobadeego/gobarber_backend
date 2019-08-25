class FileController {
    async store(req, res) {
        return res.json(req.file);
    }
}

module.exports = new FileController();
