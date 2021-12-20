import { db } from "../../../config/dbconfig"

const createNote = async(req,res) => {
    try {
        await db.query('INSERT INTO notas(title,body) VALUES($1,$2)',['New note','Create a description'])
        res.json({
            ok:true,
            msg:`Nota agregada correctamente`
        })
    } catch (error) {
        res.json({
            ok:false,
            msg:'Contacte al administrador',
            error
        })
    }
}
const getNotes = async(req,res) => {
    try {
        const resp = await db.query('SELECT * FROM notas')
        res.json({
            ok:true,
            msg:'Notas obtenidas correctamente',
            notas: resp.rows
        })
    } catch (error) {
        res.json({
            ok:false,
            msg:'Contacte al administrador',
            error
        })
    }
}

const manageNote = async(req, res) => {
    switch (req.method) {
        case 'POST':
            createNote(req,res)
            break;
        case 'GET':
            getNotes(req,res)
            break;
        default:
            res.json({
                msg:'INVALID METHOD'
            })
            break;
    }
}
export default manageNote
  