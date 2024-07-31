import fetchApi from "@src/utils/strapi.util";
import { horarioAdapter } from "@src/context/home/adapters/horario.adapter";



export async function horarioService() {

    const serverData = await fetchApi({
        endpoint: 'home-page',
        query: {
            'populate[PageContent][on][home.horario][populate][LunesViernes][populate]': '*',
            'populate[PageContent][on][home.horario][populate][Sabado][populate]': '*',
        },
        wrappedByKey: 'data'
    })


    const data = horarioAdapter({data: serverData});


    return data;

}