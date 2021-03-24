import { getPlace, getReadings } from "../../model/server/api"

export const createChartCard = async() => {
    const places = await getPlace()

    if (places.tal === 1){
        addDataSet(humidade)
    }

    if (places.chablau === 1){
        addDataSet(humidade)
    }
}