
import React from "react";
import Movie from "./Movie";
import './App.css'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Movie 
                name="Uzuklar hukmdori: Uzuk ittifoqi"
                poster="https://upload.wikimedia.org/wikipedia/uz/9/9d/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_%282001%29_theatrical_poster.jpg"
                date="10-dekabr, 2001"
                duration="178 daqiqa"
                budget="$93 million"
                box_office="$897.7 million"
                full_info="https://uz.wikipedia.org/wiki/Uzuklar_hukmdori:_Uzuklar_ittifoqi"
                />
                <Movie 
                name="Uzuklar hukmdori: Ikki qal'a"
                poster="https://upload.wikimedia.org/wikipedia/uz/a/ad/Lord_of_the_Rings_-_The_Two_Towers.jpg"
                date="5-dekabr, 2002"
                duration="179 daqiqa"
                budget="$94 million"
                box_office="$926 million"
                full_info="https://uz.wikipedia.org/wiki/Uzuklar_hukmdori:_Ikki_qal%CA%BCa"
                />
                <Movie 
                name="Uzuklar hukmdori: Qirolning qaytishi"
                poster="https://upload.wikimedia.org/wikipedia/uz/7/7a/Uzuklar_hukmdori_-_Qirolning_qaytishi.jpg"
                date="17-dekabr, 2003"
                duration="200 daqiqa"
                budget="$94 million"
                box_office="$1.120 milliard"
                full_info="https://uz.wikipedia.org/wiki/Uzuklar_hukmdori:_Qirolning_qaytishi"
                />
                <Movie 
                name="Xobbit: Kutilmagan sarguzashtlar"
                poster="https://upload.wikimedia.org/wikipedia/uz/b/b3/The_Hobbit-_An_Unexpected_Journey.jpeg"
                date="28-noyabr, 2012"
                duration="169 daqiqa"
                budget="$200-315 million"
                box_office="$1.021 milliard"
                full_info="https://uz.wikipedia.org/wiki/Hobbit:_Kutilmagan_sarguzashtlar"
                />
                <Movie 
                name="Xobbit: Smaug vayronasi"
                poster="https://upload.wikimedia.org/wikipedia/uz/4/4f/The_Hobbit_-_The_Desolation_of_Smaug_theatrical_poster.jpg"
                date="2-dekabr, 2013"
                duration="161 daqiqa"
                budget="$217 million"
                box_office="$958.4 million"
                full_info="https://uz.wikipedia.org/wiki/Hobbit:_Smaug_vayronasi"
                />
                <Movie 
                name="Xobbit: Besh saltanat jangi"
                poster="https://upload.wikimedia.org/wikipedia/uz/0/0e/The_Hobbit_-_The_Battle_of_the_Five_Armies.jpg"
                date="1-dekabr, 2014"
                duration="144 daqiqa"
                budget="$209 million"
                box_office="$956 million"
                full_info="https://uz.wikipedia.org/wiki/Hobbit:_Besh_koinotning_urushi"
                />
                <Movie 
                name="Uzuklar hukmdori: Qudrat uzuklari (serial)"
                poster="https://upload.wikimedia.org/wikipedia/uz/thumb/1/1d/LOTR_The_Rings_of_Power_logo.jpg/250px-LOTR_The_Rings_of_Power_logo.jpg"
                date="1-sentabr, 2022"
                duration="65 - 72 daqiqa"
                budget="$465 million"
                box_office="$367 million"
                full_info="https://uz.wikipedia.org/wiki/The_Lord_of_the_Rings:_The_Rings_of_Power"
                />
                <Movie 
                name="Uzuklar hukmdori: Rohhirim urushi"
                poster="https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/LOTR_The_War_of_the_Rohirrim_poster.jpg/250px-LOTR_The_War_of_the_Rohirrim_poster.jpg"
                date="3-dekabr, 2024"
                duration="134 daqiqa"
                budget="$30 million"
                box_office="$20.7 million"
                full_info="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings:_The_War_of_the_Rohirrim"
                />
                <Movie 
                name="Gollumga ov"
                poster="https://posterspy.com/wp-content/uploads/2024/08/himtforgollum.jpg"
                date="17-dekabr, 2027"
                duration="N/A"
                budget="N/A"
                box_office="N/A"
                full_info="https://www.imdb.com/title/tt32328070/"
                />
            </div>
        );
    }
}
export default App;