'use strict'
const Database = use('Database')
const Artista = use('App/Models/Artista')

class ArtistaController {
    async read () 
    {
        return await Database.table('artistas')
    }
    async create ({request, response}){
        const info = request.all()

        const art = new Artista()
        art.nombre    = info.nombre
        art.edad   = info.edad
        art.cd_origen = info.cd_origen
        try{
            await art.save()
            return response.json("ingresaste lo siguiente: ",art)
        } catch (error) {
            return response.json(Error)
        }      
    }
    async delete (i) 
    {
        const {id} = i
        const arts = await Artista.all()  
        const art = await Artista.find(id)

        await art.delete()
        return response.json({Mensaje:"artista eliminado"})
    }
    async update (request, i)
    {
        const {id} = i
        const info = request.all()
        const art = await Artista.find(id)
        art.nombre = info.nombre
        art.edad   = info.edad
        art.cd_origen = info.cd_origen
        try {
            await art.save()
            return response.json("se actualizo el artista", art)
        } catch (error) {
            return response.json(Error)
        }
    }
}

module.exports = ArtistaController
