import React, { useEffect, useState } from "react";
import './styles.css'
import axios from "axios";

export const City = () => {
    const [datas, setDatas] = useState();
    const [inputText, setInputText] = useState("");


    const getJson = () => {
        var data = JSON.stringify({
            modelName: "Address",
            calledMethod: "searchSettlements",
            methodProperties: {
                "CityName": inputText,
                "Limit": "500",
                "Page": "1"
            }
        });

        var config = {
            method: "post",
            url: "https://api.novaposhta.ua/v2.0/json/",
            headers: {
                "Content-Type": "application/json",
            },
            data: data
        };

        axios(config)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setDatas(res.data);
            })

            .catch(function (error) {
                console.log(error);
            });
    };
    useEffect(() => getJson(), [inputText]);
    const gotodep = (el) => {
        setInputText(el.Present);
    };
    return (
        <div className="box_city">

            <input
                className="inputсity"
                placeholder="Введіть назву міста"
                value={inputText}
                onChange={(event) => (setInputText(event.target.value))}
            >

            </input>
            {inputText !== "" && <div className="list">

                {datas.data[0].Addresses.map(el => (<button onClick={() => (gotodep(el))} className="choose_city">{el.Present}</button>))}
            </div>}


        </div>
    );

};