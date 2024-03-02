export type optionType = {
    name: string,
    lat:number,
    lon: number

}

export type forecastType = {
    name: string,
    country: string,
    sunrise: string,
    sunset: string,
    list:[{
        dt: string,
        main: {
            temp: number,
            feels_like: number,
            humidity: number,
            temp_min: number,
            temp_max: number,
            pressure: number,
        },
        weather:[{
            main: string,
            description: string,
            icon: string
        }],
        clouds: {
            all: number
        },
        wind: {
            speed: number,
            deg: number,
            gust: number
        },
        visibility: number,
        pop: number,
        sys: {
            pod: string
        },
        dt_txt: string
    }]
}