export function epExport(req, res){
    const number = req.params.number;
    res.json({
        result: number
    });
}