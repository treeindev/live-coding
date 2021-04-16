import { FC } from "react";

export interface iCountry {
    "Active Cases_text": string;
    "Country_text": string;
    "Last Update": string;
    "New Cases_text": string;
    "New Deaths_text": string;
    "Total Cases_text": string;
    "Total Deaths_text": string;
    "Total Recovered_text": string;
    "favourite": boolean;
}

export interface iContent {
    countries: Array<iCountry>;
    dispatcher: any;
    section: string;
}

const Content: FC<iContent> = ({countries, section, dispatcher}) => {
    const getCountries = ():any => {
        return countries.map((country, index) => {
            if (section === "favourites" && !country.favourite) { return ""; }
            return( 
                <div key={index}>
                    <div className="w-10">
                        <span>{country.Country_text}</span>
                    </div>
                    <div className="w-20">
                        <span>{country["Active Cases_text"]}</span>
                    </div>
                    <div className="w-20">
                        <span>{country["Total Deaths_text"]}</span>
                    </div>
                    <div className="w-20">
                        <span>{country["Total Recovered_text"]}</span>
                    </div>
                    <div className="w-10">
                        <div className="cmp__checkbox">
                            <label>
                                Favourite
                                <input 
                                    type="checkbox"
                                    defaultChecked={country.favourite}
                                    onChange={(event) => {dispatcher({
                                        type: event.target.checked ? "favourite" : "unfavourite",
                                        data: country
                                    })}}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
            );
        })
    }
    
    return (
        <section className="layout-main">
            <div className="cmp__cards">
                <section className="cmp__table small">
                    <header className="header">
                        <div className="w-10">
                            <span>Name</span>
                        </div>
                        <div className="w-20">
                            <span>Active cases</span>
                        </div>
                        <div className="w-20">
                            <span>Total deaths</span>
                        </div>
                        <div className="w-20">
                            <span>Total recovered</span>
                        </div>
                    </header>
                    <div className="content">{getCountries()}</div>
                </section>
            </div>
        </section>
    );
}

export default Content;