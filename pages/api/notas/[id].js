import { db } from "../../../config/dbconfig";
const deleteNote = async(req,res) => {
    const {id} = req.query
    try {
        db.query('DELETE FROM notas WHERE id = $1', [id])
        res.json({
            ok:true,
            msg:`Tarea ${id} eliminada correctamente`
        })
    } catch (error) {
        res.json({
            ok:false,
            msg:'Contacte al administrador'
        })
    }
}
const updateNote = async(req,res) => {
    const {id} = req.query
    const {title,body} = req.body
    try {
        db.query('UPDATE notas SET title = $2, body =$3 WHERE id =$1', [id,title,body])
        res.json({
            ok:true,
            msg:`Tarea ${id} actualizada correctamente`
        })
    } catch (error) {
        res.json({
            ok:false,
            msg:'Contacte al administrador'
        })
    }
}
const manageNote = async(req,res) => {
    switch (req.method) {
        case 'DELETE':
            deleteNote(req,res)
            break;
        case 'PUT':
            updateNote(req,res)
            break;
        default:
            res.json({
                msg:'INVALID METHOD'
            })
            break;
    }
}

export default manageNote